import React, { useState, FormEvent, ChangeEvent } from 'react'

interface EmailFormProps {}

const EmailForm: React.FC<EmailFormProps> = () => {
    const [emailContent, setEmailContent] = useState<string>('')
    const [submittedContent, setSubmittedContent] = useState<string>('')

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSubmittedContent(emailContent)
        console.log('Submitted Email Content:', emailContent)
    }

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setEmailContent(e.target.value)
    }

    return (
        <div className="email-form-container">
            <h1>Email Content Verifier</h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={emailContent}
                    onChange={handleChange}
                    placeholder="Paste your .eml content here..."
                    rows={10}
                    cols={50}
                />
                <button type="submit">Submit</button>
            </form>

            {submittedContent && (
                <div className="submitted-content">
                    <h2>Submitted Content:</h2>
                    <pre>{submittedContent}</pre>
                </div>
            )}
        </div>
    )
}

export default EmailForm
