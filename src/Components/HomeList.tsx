import { Link } from "react-router-dom";

type Props = {
    id: number,
    title: string
}

export const HomeList = ({ id, title}: Props) => {
    return (
        <Link to={`/album/${id}/`}>
            {title}
        </Link>
    );
}