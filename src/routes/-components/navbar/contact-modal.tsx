import { X } from "lucide-react"

interface ContactModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={onClose} />

            {/* Modal Content */}
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12">
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                    <X size={24} />
                </button>

                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-2">Schedule a Consultation</h2>
                    <p className="text-slate-500 text-lg">Fill in the details below and we'll get back to you.</p>
                </div>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="First Name*"
                                className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all placeholder:text-slate-400"
                            />
                        </div>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Last Name*"
                                className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all placeholder:text-slate-400"
                            />
                        </div>
                    </div>

                    <div className="relative">
                        <input
                            type="email"
                            placeholder="Work Email*"
                            className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all placeholder:text-slate-400"
                        />
                    </div>

                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Company Name*"
                            className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all placeholder:text-slate-400"
                        />
                    </div>

                    <div className="relative">
                        <textarea
                            placeholder="How can we help you?"
                            rows={4}
                            className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all placeholder:text-slate-400 resize-none"
                        />
                    </div>

                    <button className="w-full py-4 bg-[#FF6A00] text-white font-semibold text-lg rounded-xl hover:bg-[#E65F00] transition-colors shadow-lg shadow-orange-500/20 mt-4">
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
            </div>
        </div>
    )
}
