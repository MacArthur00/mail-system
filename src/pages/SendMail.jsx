import { Image, Paperclip, Send, Trash2, Underline, X } from "lucide-react";
import DefaultLayout from "../layouts/DefaultLayout.jsx";
import { useState } from "react";
//import profil from "../../../assets/img/team-2.jpg"
//import { Link } from "react-router-dom";
//import Select from "../components/form/Select.jsx";

export default function SendMail () {

    const baseStyles = 'inline-flex items-center rounded-full px-2.5 py-0.5 font-semibold';
  
    const variantStyles = {
        default: 'bg-gray-100 text-gray-800',
    };

    const combinedClassName = `${baseStyles} ${variantStyles['default']}`;


    const [emails, setEmails] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]{3,6}\.[a-zA-Z]{2,6}$/;

  
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
      setError('')
    };
  
    const handleInputKeyDown = (e) => {
      if (e.key === 'Enter' || e.key === ',' || e.key === ' ') {
        e.preventDefault();
        addEmail();
      }
    };
  
    const validateEmail = (email) => {
        return emailRegex.test(email);
    };

    const addEmail = () => {
        const trimmedEmail = inputValue.trim();
        if (trimmedEmail && !emails.includes(trimmedEmail)) {
          if (validateEmail(trimmedEmail)) {
            setEmails([...emails, trimmedEmail]);
            setInputValue('');
            setError('');
          } else {
            setError('Adresse e-mail invalide.');
          }
        } else if (emails.includes(trimmedEmail)) {
          setError('Cette adresse e-mail est déjà dans la liste');
        }
    };
  
    const removeEmail = (email) => {
      setEmails(emails.filter((e) => e !== email));
    };
  
    const handleSubmit = () => {
      // Ici, vous pouvez ajouter la logique pour envoyer le message aux e-mails
      console.log('Envoyer le message à:', emails);
    };

    return(
        <DefaultLayout>
            <div className="w-full mt-12 transition-all duration-300 border border-gray-300 flex flex-col rounded-xl">
                <form action="" method="get" className="p-4 h-full flex flex-col gap-4">
                    <div>
                        {/* <button className="px-4 py-2 text-gray-700 border rounded-xl flex gap-2 hover:border-gray-500 hover:cursor-pointer">
                            <CornerUpLeft color={"gray"} />
                            <span>Partager</span>
                        </button> */}
                    </div>
                    <div className="px-4 pb-4 rounded-xl">
                        <div className="flex flex-col">
                            <div className="flex flex-col text-gray-700 px-4 gap-2 items-center">
                                <input 
                                    id={"userMail"} 
                                    placeholder="" 
                                    name={"userMail"} 
                                    className="box-border w-full mb-4 px-6 py-3 bg-white text-lg text-gray-700 border border-gray-300 rounded-xl hover:shadow-lg hover:border-2 hover:border-purple-500 focus:outline focus:ring-purple-500" 
                                />
                                <div className="w-full flex flex-col gap-2 mb-6">
                                    {emails && <div className="flex flex-wrap gap-2">
                                        {emails.map((email) => (
                                        <span key={email} className={`${combinedClassName} flex items-center gap-1`}>
                                            {email}
                                            <button
                                            size="sm"
                                            className="h-4 w-4 p-0"
                                            onClick={() => removeEmail(email)}
                                            >
                                                <X className="h-3 w-3" />
                                            </button>
                                        </span>
                                        ))}
                                    </div>}
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            id="selectMail"
                                            name="selectMail[]"
                                            value={inputValue}
                                            onChange={handleInputChange}
                                            onKeyDown={handleInputKeyDown}
                                            placeholder="Entrez les adresses e-mail (séparées par des virgules ou des espaces)"
                                            className="box-border w-full px-6 py-3 bg-white text-lg text-gray-700 border border-gray-300 rounded-xl hover:shadow-lg hover:border-2 hover:border-purple-500 focus:outline focus:ring-purple-500"
                                        />
                                        <button className="flex items-center px-6 py-3 bg-violet-700 text-lg text-white font-bold hover:cursor-pointer active:bg-violet-900 border rounded-2xl" onClick={addEmail}>Ajouter</button>
                                    </div>
                                    {error && <p className="text-red-500 bg-red-100 rounded-lg p-4">{error}</p>}
                                </div>
                            </div>
                            <div>
                                <div className="text-gray-800 px-4">
                                    <div className="flex flex-col">
                                        <input id={"mailTitle"} name={"mailTitle"} placeholder="Entrez le titre de votre message" className="box-border w-full mb-6 px-6 py-3 bg-white text-lg text-gray-700 border border-gray-300 rounded-xl hover:shadow-lg hover:border-2 hover:border-purple-500 focus:outline focus:ring-purple-500" />
                                    </div>
                                    <div className="flex flex-col">
                                        <textarea id={"mailContent"} name={"mailContent"} placeholder="Entrez votre message"  cols="30" rows="10" className="box-border w-full h-auto mt-6 mb-6 px-4 py-2 bg-white text-lg text-gray-700 border border-gray-300 rounded-lg hover:shadow-xl hover:border-2 hover:border-purple-500 focus:outline focus:ring-purple-500"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex ml-8 gap-4 items-center ">
                                    <Underline size={36} color={"gray"} className="p-1 hover:bg-gray-200 rounded-md"/>
                                    <Paperclip size={36} color={"gray"} className="p-1 hover:bg-gray-200 rounded-md" />
                                    <Image size={36} color={"gray"} className="p-1 hover:bg-gray-200 rounded-md" />
                                    <Trash2 size={36} color={"gray"} className="p-1 hover:bg-gray-200 rounded-md" />
                                </div>
                                <div className="mr-4">
                                    <button className="flex items-center px-6 py-3 bg-violet-700 text-lg text-white font-bold hover:cursor-pointer active:bg-violet-900 border rounded-2xl gap-4" onClick={handleSubmit}>
                                        <Send color="white" />
                                        <span>Send</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </DefaultLayout>
    );
}
