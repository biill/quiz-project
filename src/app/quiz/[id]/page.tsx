"use client"
import { Button } from "@/components/ui/button"
import { CardContent, Card,CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {RadioGroup,RadioGroupItem} from "@/components/ui/radio-group";




interface Answer {
  id: number,
  detail: string
}

interface Question {
  id: number,
  description: string,
  answers: Answer[],
  correctAnswer: number
}

const sampleQuestion: Question = {
  id: 1,
  description: 'testQuestion',
  answers : [
    {id: 1, detail: 'detail1'},
    {id: 2, detail: 'detail2'},
    {id: 3, detail: 'detail3'},
    {id: 4, detail: 'detail4'},
  ],
  correctAnswer: 1
}

function QuizPage({ params }: { params: { id: string } }) {

  const { id } = params;

  const form = useForm();

  const onSubmit = (answerId: any) => {
    console.log("Submitted answer:", answerId);
    // need check if answerId match with correctAnswer
    if(Number(answerId)===sampleQuestion.correctAnswer){
      // need have redux to hold count, and then if count ===5, no more questions
      // when click submit, direct to result page.
      // and count will be displayed in count page.
    }
    return ;
  };

  return (
  <Card>
    <CardHeader className="pb-3">
      <CardTitle>Quiz</CardTitle>
      </CardHeader>
    <CardContent className="grid gap-1">
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="answers"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">{sampleQuestion.description}</FormLabel>
                <FormDescription>
                  Choose one of answer below.
                </FormDescription>
              </div>
              {sampleQuestion.answers.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name={item.detail}
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                            <RadioGroup
                                className="ml-2 flex flex-col space-y-1"
                                onValueChange={field.onChange}
                            >
                                {sampleQuestion.answers.map((answer, answerIndex) => (
                                  <FormItem
                                    key={answerIndex}
                                    className="flex items-center space-x-3 space-y-0"
                                  >
                                    <FormControl>
                                      <RadioGroupItem value={String(answer.id)} />
                                    </FormControl>
                                    <FormLabel>{answer.detail}</FormLabel>
                                  </FormItem>
                                ))}
                              </RadioGroup>
                        </FormControl>
                      </FormItem>
                    )
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  </CardContent>
</Card>
  )
}