"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/lib/supabase";

type Status = "idle" | "sending" | "success" | "error";

export function ContactDialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    try {
      const { error } = await supabase
        .from("contacts")
        .insert([{ name, email, subject, message }]);

      if (error) {
        console.error("Supabase insert error:", error);
        setStatus("error");
      } else {
        setStatus("success");
        form.reset();
      }
    } catch {
      setStatus("error");
    }
  }

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (!next) {
      // reset state when closing
      setTimeout(() => setStatus("idle"), 300);
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>교육 문의하기</DialogTitle>
          <DialogDescription>
            기업 출강, 온라인 강의 협업, 디자인 관련 문의 등 무엇이든 편하게
            남겨주세요. 빠르게 회신 드리겠습니다.
          </DialogDescription>
        </DialogHeader>

        {status === "success" ? (
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-500/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-7 w-7 text-violet-500"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <p className="text-lg font-semibold">전송 완료!</p>
            <p className="text-sm text-muted-foreground">
              문의가 성공적으로 접수되었습니다. 빠른 시일 내에 회신
              드리겠습니다.
            </p>
            <Button
              variant="outline"
              className="mt-2"
              onClick={() => handleOpenChange(false)}
            >
              닫기
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">이름</Label>
              <Input
                id="name"
                name="name"
                placeholder="홍길동"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">이메일</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">제목</Label>
              <Input
                id="subject"
                name="subject"
                placeholder="기업 출강 문의 / 협업 제안 / 기타"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">내용</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="문의 내용을 자유롭게 작성해 주세요."
                rows={5}
                required
              />
            </div>

            {status === "error" && (
              <p className="text-sm text-destructive">
                전송에 실패했습니다. 다시 시도하거나 yiseo@figmatutor.info로
                직접 메일을 보내주세요.
              </p>
            )}

            <Button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40"
            >
              {status === "sending" ? "전송 중..." : "문의 보내기"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
