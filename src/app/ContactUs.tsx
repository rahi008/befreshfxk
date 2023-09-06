import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faLocationDot,faEnvelope,faMobile
} from "@fortawesome/free-solid-svg-icons";

export default function contacts(){
return(
<div className="text-center md:py-4" id="fxContactus">
    <h2 className="text-xl lg:text-4xl underline font-bold mb-2">CONTACT US</h2>
    <div className="list-item p-1 md:flex ">
        <div className="md:w-1/3">
            <p className="flex justify-left underline px-4 md:px-16">Contact</p>
            <p className="flex justify-left px-4 md:px-16">
                <FontAwesomeIcon icon={faLocationDot} className="mr-3 mt-1" />
                South East Money Exchange Ltd.</p>
            <p className="flex justify-left px-10 md:px-16">Golden Plaza (5th Floor),</p>
            <p className="flex justify-left px-10 md:px-16">1692 CDA Avenue, GEC Moor,</p>
            <p className="flex justify-left px-10 md:px-16">Chattogram, Bangladesh.</p>
            <p className="flex justify-left px-4 md:px-16">
                <FontAwesomeIcon icon={faMobile} className="mr-3 mt-1" />+88 017 3044 4519
            </p>
            <p className="flex justify-left px-4 md:px-16">
                <FontAwesomeIcon icon={faEnvelope} className="mr-3 mt-1" />info@befreshfx.com
            </p>
        </div>
        <div className="md:w-1/3">
            <p className="flex justify-left underline px-4 md:px-16">We Are Here</p>
            <div className="h-48 w-full flex justify-center items-center">
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed/v1/place?q=South+East+Money+Exchange+Limited,+CDA+Avenue,+Chattogram,+Bangladesh&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
                </div>
            </div>
        </div>
        <div className="text-start px-4 md:w-1/3">
            <a href="#" id="openModalButton" className="underline justify-start">Tell Us More</a>
            <div className="mb-4">
                <label className="block text-gray-600">Name</label>
                <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2" />
            </div>
            {/* Mobile and Email */}
            <div className="mb-4">
                <div className="flex space-x-4">
                    <div className="w-1/2">
                        <label className="block text-gray-600">Mobile</label>
                        <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2" />
                    </div>
                    <div className="w-1/2">
                        <label className="block text-gray-600">Email</label>
                        <input type="email" className="w-full border border-gray-300 rounded-md px-3 py-2" />
                    </div>
                </div>
            </div>
            {/* Subject with dropdown */}
            <div className="mb-4">
                <label className="block text-gray-600">Subject</label>
                <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                    <option value="option1">
                        <span className="fi fi-us" style={{ height: '20px', width: '20px', fontSize: '20px' }}></span>
                        Enquiry
                    </option>
                    <option value="option2">Suggestions</option>
                    <option value="option3">Complain</option>
                    <option value="option3">Others</option>
                </select>
            </div>
            {/* Details */}
            <div className="mb-4">
                <label className="block text-gray-600">Details</label>
                <textarea className="w-full border border-gray-300 rounded-md px-3 py-2 resize-none"
                    rows={5}></textarea>
            </div>
            {/* Send Button */}
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-full">
                Send
            </button>

        </div>
    </div>
</div>
)
}