import PropTypes from "prop-types";
import Card from "./Card";

const RenderCard = ({ data, title }) => {
    if (data?.length > 0) {
        return data?.map((post) => (
            <Card key={post._id} {...post} data={data} title={title} />
        ));
    }
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

// Define PropTypes for the component
RenderCard.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired, // Ensure each post has an _id
        })
    ).isRequired,
    title: PropTypes.string.isRequired,
};

export default RenderCard;
