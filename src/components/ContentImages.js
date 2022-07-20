import ContentImage from './ContentImage';


function ContentImages(props) {
    return (
        <div>
            <ContentImage type="true" className="m-3" />
            <ContentImage type="false" className="m-3" />
            <ContentImage type="true" className="m-3" />
        </div>
    );
}

export default ContentImages;
