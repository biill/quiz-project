"use client"

import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link";



export function StartQuizCard() {

  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Welcome to the Quiz</CardTitle>
      </CardHeader>
      <CardFooter>
        <Button asChild  className="w-full"><Link href="/quiz/1">Start Quiz</Link></Button>
      </CardFooter>
    </Card>
  )
}