import React, { useEffect } from 'react'
import Header from './Header'
import { connect } from "react-redux";
import { GET_HOME } from '../core/actions/action-types';
import Footer from './Footer';
const Home = (props) => {

    useEffect(() => {
        props.getHomeMethod();
    }, []);


    console.log(props.home);

    return (
        <>
            <Header />
            <div className="flex flex-col   p-6 sm:space-x-10 lg:space-x-0 sm:flex-row lg:flex-row sm:space-y-0 lg:space-x-60 flex-wrap lg:p-[100px] justify-between">
                <div className="flex flex-col space-y-3 flex-wrap">
                    <div
                        className={"flex flex-col gap-10 bg-white rounded-lg overflow-hidden mb-2 lg:flex-row lg:flex-wrap lg:gap-10"}
                    >
                        {props &&
                            props.home &&
                            props.home.message.map((ele) => (
                                <div className="flex gap-10 px-2 py-1 border-solid border-2 border-black rounded  lg:w-[500px] ">
                                    <div className="flex items-center">
                                        <img
                                            src={ele.flag}
                                            alt="cimage"
                                            className="w-[100px] h-[100px] "
                                        />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <p className="mt-[8px] text-xl font-bold  text-[#40556E] ">
                                            {ele.name}
                                        </p>
                                        <div className="flex items-center gap-1">
                                            <i className="fas fa-rupee-sign text-[#40556E] text-[12px] mt-1 opacity-1"></i>
                                            <p className="mt-[8px] text-sm font-semibold  text-[#40556E]">{ele.region}</p>
                                        </div>

                                    </div>

                                </div>

                            ))}
                    </div>
                </div>
            </div>
          <Footer/>
        </>

    )
}
const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        getHomeMethod: () => dispatch({ type: GET_HOME }),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);