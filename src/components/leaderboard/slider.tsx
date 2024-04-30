import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export function Slider() {
    return (
        <div className="flex items-center justify-between">
            <div>
                <IoIosArrowBack size={30} />
            </div>

            <div>
                <IoIosArrowForward size={30} />
            </div>
        </div>
    );
}
