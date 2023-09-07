import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Results() {

    return (
      <div className="h-[calc(100vh-64px)] flex flex-col justify-center items-center px-10 max-w-md mx-auto">
        <Card>
            <CardHeader className="space-y-1">
                <CardTitle>Results</CardTitle>
            </CardHeader>
            <CardContent>
                <span>Performance Cookies</span>
                <span className="font-normal leading-snug text-muted-foreground">
                    {`You got ${count} correct answers out of 5, congretulations!`}
                </span>
            </CardContent>
        </Card>
      </div>
    );
  }