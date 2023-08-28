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
                            <iframe  src="https://www.google.com/maps/embed/v1/place?q=South+East+Money+Exchange+Limited,+CDA+Avenue,+Chattogram,+Bangladesh&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
                        </div>
                    </div>
                </div>
                <div className="flex px-4 md:w-1/3">
                    <a href="#" id="openModalButton" className="underline justify-start">Tell Us More</a>
                    
                </div>
            </div>
        </div>
    )
}