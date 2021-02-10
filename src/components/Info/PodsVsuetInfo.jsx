import React from "react";

class PodsVsuetInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch('/lent/vk_pods_vsuet')
            .then(res => res.json())
            .then(lentJson => JSON.parse(lentJson))
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.response.items
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                });
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div className="toast">Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="download">Загрузка...</div>;
        } else {
            return (
                <div className="info">
                    {items.map(post => (
                        <div key={post.id} className="info__newPost">
                            {(post.attachments !== undefined && post.attachments[0].type === "photo") && <img key={post.date} alt="vk-img" className="info__newPost_photo" src={post.attachments[0].photo.sizes[6].url} />}
                            <div className="info__newPost_text">{post.text}</div>
                        </div>
                    ))}
                </div>
            )
        }
    }
}

export default PodsVsuetInfo;
