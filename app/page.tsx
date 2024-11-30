import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronRight, UserPlus, Vote, BarChart3 } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <main className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">
            Welcome to VoteEase
          </h1>
          <p className="text-xl text-gray-600">
            Simple, Secure, and Transparent Voting System
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon={<UserPlus className="h-12 w-12 text-blue-500" />}
            title="Register"
            description="Create an account to participate in votes"
          />
          <FeatureCard
            icon={<Vote className="h-12 w-12 text-green-500" />}
            title="Vote"
            description="Cast your vote on active polls and elections"
          />
          <FeatureCard
            icon={<BarChart3 className="h-12 w-12 text-purple-500" />}
            title="View Results"
            description="See real-time results and analytics"
          />
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/register">
              Get Started
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </main>

      <footer className="bg-blue-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 VoteEase. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-center">
          {icon}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-xl mb-2 text-center">{title}</CardTitle>
        <CardDescription className="text-center">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
