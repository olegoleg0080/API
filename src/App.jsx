import { Form } from "./component/Form";
import React, { Component } from "react";
import { Container } from "./component/Form.styled";
import { Galery } from "./component/Galery";
import { GlobalStyle } from "./GlobalStyle";
import { getPhotos } from "./component/sevise/API";
import styled from "styled-components";

const LoadMore = styled.button``;

export default class App extends Component {
    state = {
        query: "",
        images: [],
        isLoading: false,
        error: null,
        status: "idle",
        page: 1,
        per_page: 20,
        visibleMoreBtn: false,
    };

    // async componentDidMount() {
    //     const res = await axios.get("/search?query=nature", defParams);
    //     this.setState({ data: res.data });
    //     console.log(res);
    // }

    async componentDidUpdate(_, prevState) {
        const { query, page, per_page } = this.state;
        if (!query) {
            return;
        }
        if (page !== prevState.page || query !== prevState.query) {
            this.setState({ isLoading: true, error: null });

            try {
                const data = await getPhotos(query, page, per_page);
                console.log(data);
                this.setState((prevState) => ({
                    images: [...prevState.images, ...data.photos],
                    visibleMoreBtn:page < Math.ceil(data.total_results / per_page)
                }));
            } catch (error) {
                console.log(error);
                this.setState({ error,});
            } finally{
                this.setState({isLoading: false })
            }
        }
    }
    onHandleSubmit = query => {
        this.setState({
            query,
            images: [],
            page: 1,
        })
    }
    onClickMore = () => {
        this.setState((prevState) => ({ page: prevState.page + 1 }));
        // this.setState((prevState)=>({totalHits: prev.totalHits+15}));
    };

    render() {
        const { images, error, isLoading, visibleMoreBtn} = this.state;
        return (
            <Container>
                <Form onSubm={this.onHandleSubmit} />
                {error && <p>Oops... Something wrong...</p>};
                {isLoading && <p>Loading...</p>}
                {images.length > 0 && <Galery data={images} />}
                <GlobalStyle />
                {visibleMoreBtn && <LoadMore onClick={this.onClickMore}>Load More</LoadMore>}
            </Container>
        );
    }
}
