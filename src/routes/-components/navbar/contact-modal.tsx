import React, { useState } from "react"
import { X, CheckCircle } from "lucide-react"

interface ContactModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    // 1. Initialize the form state
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        message: "",
    })

    const [isSubmitted, setIsSubmitted] = useState(false)

    if (!isOpen) return null

    // 2. Handle input changes dynamically
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    // 3. Handle submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Form Data Submitted:", formData)
        // Simulate API call
        setIsSubmitted(true)
    }

    const handleClose = () => {
        setIsSubmitted(false)
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            company: "",
            message: "",
        })
        onClose()
    }

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={handleClose} />

            {/* Modal Content */}
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12">
                <button
                    onClick={handleClose}
                    className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                    <X size={24} />
                </button>

                {isSubmitted ? (
                    <div className="text-center py-10 space-y-6 animate-in fade-in zoom-in duration-300">
                        <div className="flex justify-center">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                                <CheckCircle className="w-10 h-10 text-green-600" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Thank You!</h2>
                            <p className="text-slate-500 text-lg">
                                Your message has been received. We'll get back to you shortly.
                            </p>
                        </div>
                        <button
                            onClick={handleClose}
                            className="px-8 py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors"
                        >
                            Close
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-2">
                                Schedule a Consultation
                            </h2>
                            <p className="text-slate-500 text-lg">
                                Fill in the details below and we'll get back to you.
                            </p>
                        </div>

                        <form className="space-y-5" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="First Name*"
                                        required
                                        className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all placeholder:text-slate-400 text-slate-900"
                                    />
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="Last Name*"
                                        required
                                        className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all placeholder:text-slate-400 text-slate-900"
                                    />
                                </div>
                            </div>

                            <div className="relative">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Work Email*"
                                    required
                                    className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all placeholder:text-slate-400 text-slate-900"
                                />
                            </div>

                            <div className="relative">
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="Company Name*"
                                    required
                                    className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all placeholder:text-slate-400 text-slate-900"
                                />
                            </div>

                            <div className="relative">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="How can we help you?"
                                    rows={4}
                                    className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all placeholder:text-slate-400 resize-none text-slate-900"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-[#FF6A00] text-white font-semibold text-lg rounded-xl hover:bg-[#E65F00] transition-colors shadow-lg shadow-orange-500/20 mt-4"
                            >
                                Submit Request
                            </button>

                            <div className="text-center pt-4">
                                <p className="text-slate-500">
                                    Need more space?{" "}
                                    <a href="#" className="text-[#FF6A00] hover:underline font-medium">
                                        Go to full contact form
                                    </a>
                                </p>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </div>
    )
}
