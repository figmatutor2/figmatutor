// 새 문의(inquiries)가 저장되면 DB 트리거가 { id }로 호출한다.
// 요청 본문을 믿지 않고 id로 다시 조회해, 아직 알리지 않은 실제 문의일 때만 메일을 보낸다.
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const NOTIFY_TO = "yiseo@figmatutor.info";
const FROM =
  Deno.env.get("RESEND_FROM") ?? "Figmatutor 문의 <onboarding@resend.dev>";

const labels: [string, string][] = [
  ["company", "1. 소속 기업"],
  ["headcount", "2. 수강 인원"],
  ["curriculum", "3. 희망 커리큘럼·구성"],
  ["meeting_date", "4. 온라인 미팅 희망 일정"],
  ["custom_material", "5. 강의 자료 맞춤형 제작"],
  ["custom_examples", "6. 수업 예제 맞춤형 제작"],
  ["contact", "7. 담당자 연락처"],
];

const escape = (value: unknown) =>
  String(value ?? "")
    .replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`)
    .replace(/\n/g, "<br>");

Deno.serve(async (req) => {
  if (req.method !== "POST")
    return new Response("Method not allowed", { status: 405 });

  const { id } = await req.json().catch(() => ({ id: null }));
  if (typeof id !== "string")
    return new Response("Bad request", { status: 400 });

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );
  const { data: inquiry, error } = await supabase
    .from("inquiries")
    .select("*")
    .eq("id", id)
    .is("notified_at", null)
    .maybeSingle();
  if (error) return new Response(error.message, { status: 500 });
  if (!inquiry) return new Response("Nothing to notify", { status: 200 });

  const rows = labels
    .map(
      ([key, label]) =>
        `<tr><th align="left" style="padding:8px 12px;vertical-align:top;white-space:nowrap">${label}</th><td style="padding:8px 12px">${escape(inquiry[key])}</td></tr>`,
    )
    .join("");
  const html = `<h2>새 기업/기관 강의 신청</h2><table border="1" cellspacing="0" style="border-collapse:collapse">${rows}</table><p>접수 시각: ${new Date(inquiry.created_at).toLocaleString("ko-KR", { timeZone: "Asia/Seoul" })}</p>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${Deno.env.get("RESEND_API_KEY")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM,
      to: [NOTIFY_TO],
      subject: `[강의 신청] ${inquiry.company} · ${inquiry.headcount}`,
      html,
    }),
  });
  if (!res.ok)
    return new Response(`Resend error: ${await res.text()}`, { status: 502 });

  await supabase
    .from("inquiries")
    .update({ notified_at: new Date().toISOString() })
    .eq("id", id);
  return new Response("Sent", { status: 200 });
});
