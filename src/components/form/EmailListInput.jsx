{/* import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';

export default function EmailListInput () {
  const [emails, setEmails] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ',' || e.key === ' ') {
      e.preventDefault();
      addEmail();
    }
  };

  const addEmail = () => {
    const trimmedEmail = inputValue.trim();
    if (trimmedEmail && !emails.includes(trimmedEmail)) {
      setEmails([...emails, trimmedEmail]);
      setInputValue('');
    }
  };

  const removeEmail = (email) => {
    setEmails(emails.filter((e) => e !== email));
  };

  const handleSubmit = () => {
    // Ici, vous pouvez ajouter la logique pour envoyer le message aux e-mails
    console.log('Envoyer le message à:', emails);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {emails.map((email) => (
          <Badge key={email} variant="secondary" className="flex items-center gap-1">
            {email}
            <Button
              size="sm"
              variant="ghost"
              className="h-4 w-4 p-0"
              onClick={() => removeEmail(email)}
            >
              <X className="h-3 w-3" />
            </Button>
          </Badge>
        ))}
      </div>
      <div className="flex gap-2">
        <Input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          placeholder="Entrez les adresses e-mail (séparées par des virgules)"
          className="flex-grow"
        />
        <Button onClick={addEmail}>Ajouter</Button>
      </div>
      <Button onClick={handleSubmit}>Envoyer le message</Button>
    </div>
  );
}; */}