import React from "react";

const TeamSearch = (props) => (
    <div className="text-center">
        <form style={{ display: "inline-block" }}>
            <div className="form-row align-items-center">
                <div className="col-auto">
                    <div className="md-form">
                        <select className="form-control mb-2" id="inlineFormInputMD" name="category" size="1" style={{ width: "180px", borderTop: "0px", borderLeft: "0px", borderRight: "0px" }} onChange={props.onChange}>
                            <option value="">All</option>
                            <option value="Flowers">Flowers</option>
                            <option value="Catering">Catering</option>
                            <option value="DJing">DJing</option>
                            <option value="Music">Music</option>
                            <option value="Decor">Decor</option>
                        </select>
                    </div>
                </div>

                <div className="col-auto">
                    {/* <label className="sr-only" for="inlineFormInputGroupMD">Username</label> */}
                    <div className="md-form input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text md-addon">in</span>
                            <input type="text" className="form-control pl-0 rounded-0" id="inlineFormInputGroupMD"
                                placeholder="Location" name="location" onChange={props.onChange} value={props.location} style={{ height: "20px", paddingBottom: "8px" }}></input>
                        </div>
                    </div>
                </div>

                <div className="col-auto">
                    <button type="submit" className="btn btn-pink mb-0 z-depth-0" onClick={props.onClick}>Search</button>
                </div>
            </div>
        </form>
    </div>
)

export default TeamSearch;
