import { X, ChevronDown } from "lucide-react"

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
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-2xl p-6 md:p-10">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                    <X size={24} />
                </button>

                <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-slate-700">
                                First name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                className="w-full px-4 py-2.5 bg-[#f3f6f9] border-none rounded-sm focus:ring-2 focus:ring-orange-500/20 outline-none"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-slate-700">
                                Last name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                className="w-full px-4 py-2.5 bg-[#f3f6f9] border-none rounded-sm focus:ring-2 focus:ring-orange-500/20 outline-none"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-slate-700">
                                Job title <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                className="w-full px-4 py-2.5 bg-[#f3f6f9] border-none rounded-sm focus:ring-2 focus:ring-orange-500/20 outline-none"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-slate-700">
                                Company name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                className="w-full px-4 py-2.5 bg-[#f3f6f9] border-none rounded-sm focus:ring-2 focus:ring-orange-500/20 outline-none"
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-slate-700">
                            Professional Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            className="w-full px-4 py-2.5 bg-[#f3f6f9] border-none rounded-sm focus:ring-2 focus:ring-orange-500/20 outline-none"
                        />
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-slate-700">Phone number</label>
                        <div className="flex gap-2">
                            <select className="w-32 px-3 py-2.5 bg-[#f3f6f9] border-none rounded-sm outline-none cursor-pointer">
                                <option>India (+91)</option>
                                <option>USA (+1)</option>
                                <option>UK (+44)</option>
                            </select>
                            <input
                                type="tel"
                                placeholder="+91"
                                className="flex-1 px-4 py-2.5 bg-[#f3f6f9] border-none rounded-sm outline-none"
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-slate-700">
                            Country/Region <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            className="w-full px-4 py-2.5 bg-[#f3f6f9] border-none rounded-sm outline-none"
                        />
                    </div>

                    <div className="space-y-3">
                        <label className="text-sm font-medium text-slate-700">Therapeutic Areas</label>
                        <div className="space-y-2">
                            {[
                                "Tuberculosis & Global Health AI",
                                "Lung Cancer AI / Lung Health / Oncology / COPD / CAC",
                                "Neuro AI",
                            ].map((area) => (
                                <label key={area} className="flex items-center gap-3 cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 rounded border-slate-300 text-orange-500 focus:ring-orange-500"
                                    />
                                    <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">
                                        {area}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-slate-700">How did you hear about us?</label>
                        <div className="relative">
                            <select className="w-full px-4 py-2.5 bg-[#f3f6f9] border-none rounded-sm outline-none appearance-none cursor-pointer text-slate-400">
                                <option>Please Select</option>
                                <option>Social Media</option>
                                <option>Conference</option>
                                <option>Referral</option>
                            </select>
                            <ChevronDown
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                                size={18}
                            />
                        </div>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-slate-100">
                        <p className="text-xs text-slate-500 leading-relaxed">
                            Qure.AI is committed to protecting and respecting your privacy, and we'll only use your
                            personal information to administer your account and to provide the products and services you
                            requested from us. Please refer to our{" "}
                            <a href="#" className="text-blue-600 underline">
                                Privacy Notice
                            </a>{" "}
                            for further details.
                        </p>

                        <div className="space-y-2">
                            <label className="flex items-start gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="mt-1 w-4 h-4 rounded border-slate-300 text-orange-500 focus:ring-orange-500"
                                />
                                <span className="text-xs text-slate-600">
                                    I agree to receive other communications from Qure.AI.
                                </span>
                            </label>
                            <label className="flex items-start gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="mt-1 w-4 h-4 rounded border-slate-300 text-orange-500 focus:ring-orange-500"
                                />
                                <span className="text-xs text-slate-600">
                                    I agree to allow Qure.AI to store and process my personal data.{" "}
                                    <span className="text-red-500">*</span>
                                </span>
                            </label>
                        </div>

                        <p className="text-xs text-slate-500 leading-relaxed">
                            By clicking submit below, you consent to allow Qure.AI to store and process the personal
                            information submitted above to provide you the content requested.
                        </p>

                        <p className="text-xs text-slate-500">
                            You may unsubscribe from these communications at any time.
                        </p>

                        <button className="w-32 py-2.5 bg-[#ff7c5c] text-white font-medium rounded-sm hover:bg-[#ff6a45] transition-colors shadow-lg shadow-orange-500/10">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
