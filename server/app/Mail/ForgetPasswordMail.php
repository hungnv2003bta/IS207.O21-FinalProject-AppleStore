<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Mail\Mailables\Address;

class ForgetPasswordMail extends Mailable
{
    use Queueable, SerializesModels;

    public $mail;
    public $mailMessage;
    public $subject;

    /**
     * Create a new message instance.
     */
    public function __construct($email, $message, $subject)
    {
        $this->mail = $email;
        $this->mailMessage = $message;
        $this->subject = $subject;
    }
    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            from: new Address('hungnv2003bta@gmail.com', '6Tao Shop'),
            replyTo:[
                new Address('hungnv2003bta@gmail.com', '6Tao Shop')
            ],
            subject: $this->subject,
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'mail.forget-password',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
