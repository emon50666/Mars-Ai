import Card from "./Card";

const RenderCard = ({data,title}) => {
    if(data?.length > 0){
        return data?.map((post) => <Card key={post._id} {...post} data={data} title={title}  />)
    }
    return (
        <div>
            <h1>{title} </h1>
        </div>
    );
};

export default RenderCard;