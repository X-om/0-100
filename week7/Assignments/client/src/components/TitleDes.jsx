import { useRecoilState } from "recoil";
import { titleAtom } from "../store/atoms/title";
import { descriptionAtom } from "../store/atoms/description";
import axios from "axios";
import { memo } from "react";

export default function TitleDes() {
    const [title, setTitle] = useRecoilState(titleAtom);
    const [description, setDescription] = useRecoilState(descriptionAtom);

    const handleClick = async () => {
        try {
            const response = await axios.post('http://localhost:3000/savetodos', {
                title,
                description
            });
            console.log(response.data);
            // Clear the state to reset the inputs
            setTitle("");
            setDescription("");
        } catch (error) {
            console.error("Error saving todo:", error);
        }
    };

    return (
        <div>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                type="text"
            />
            <br /><br />
            <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                type="text"
            />
            <br /><br />
            <Button handleClick={handleClick} />
        </div>
    );
}

const Button = memo(({ handleClick }) => {
    return (
        <div>
            <button onClick={handleClick}>Add</button>
        </div>
    );
});
