import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Gift, Send, Heart } from "lucide-react";
import { toast } from "sonner";

interface DropAHintProps {
  productTitle: string;
  productHandle: string;
  productPrice: string;
}

export const DropAHint = ({ productTitle, productHandle, productPrice }: DropAHintProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [yourName, setYourName] = useState("");
  const [friendEmail, setFriendEmail] = useState("");
  const [message, setMessage] = useState("");

  const productUrl = `${window.location.origin}/shop/${productHandle}`;

  const handleSendHint = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`${yourName} is dropping you a hint! 💐`);
    const body = encodeURIComponent(
      `Hi there!\n\n${yourName} thought you might like to know about this beautiful item from Nashville Flower Market:\n\n` +
      `${productTitle} - $${parseFloat(productPrice).toFixed(2)}\n\n` +
      `${message ? `Personal message: "${message}"\n\n` : ""}` +
      `Check it out here: ${productUrl}\n\n` +
      `With love,\nNashville Flower Market 🌸`
    );
    
    window.open(`mailto:${friendEmail}?subject=${subject}&body=${body}`, '_blank');
    
    toast.success("Hint ready to send!", {
      description: "Your email app will open with the hint message.",
    });
    
    setIsOpen(false);
    setYourName("");
    setFriendEmail("");
    setMessage("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Gift className="h-4 w-4" />
          Drop a Hint
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-serif flex items-center gap-2">
            <Heart className="h-5 w-5 text-accent" />
            Drop a Hint
          </DialogTitle>
          <DialogDescription>
            Let someone special know what you're wishing for! We'll help you send them a friendly hint.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSendHint} className="space-y-4 mt-4">
          <div className="p-3 bg-muted/50 rounded-lg">
            <p className="text-sm font-medium">{productTitle}</p>
            <p className="text-sm text-muted-foreground">${parseFloat(productPrice).toFixed(2)}</p>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="yourName">Your Name</Label>
            <Input
              id="yourName"
              placeholder="Your name"
              value={yourName}
              onChange={(e) => setYourName(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="friendEmail">Friend's Email</Label>
            <Input
              id="friendEmail"
              type="email"
              placeholder="friend@example.com"
              value={friendEmail}
              onChange={(e) => setFriendEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Personal Message (Optional)</Label>
            <Textarea
              id="message"
              placeholder="Add a personal note..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
            />
          </div>
          
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
            <Send className="h-4 w-4 mr-2" />
            Send Hint
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
