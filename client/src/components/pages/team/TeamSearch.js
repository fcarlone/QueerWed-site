import React from "react";

const TeamSearch = (props) => (
    <form>
        <div className="form-row align-items-center">
            <div className="col-auto">
                <div className="md-form">
                    <input list="category" type="text" className="form-control mb-2" id="inlineFormInputMD"
                        placeholder="Category" name="category" onChange={props.onChange}></input>
                    <datalist id="category">
                        <option value="Photography"></option>
                        <option value="Flowers"></option>
                        <option value="Catering"></option>
                        <option value="DJing"></option>
                        <option value="Music"></option>
                        <option value="Decor"></option>
                    </datalist>
                    {/* <label className="sr-only" for="inlineFormInputMD">Name</label> */}
                </div>
            </div>

            <div className="col-auto">
                {/* <label className="sr-only" for="inlineFormInputGroupMD">Username</label> */}
                <div className="md-form input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text md-addon">in</span>
                    </div>
                    <input type="text" className="form-control pl-0 rounded-0" id="inlineFormInputGroupMD"
                        placeholder="Location" name="location" onChange={props.onChange}></input>
                </div>
            </div>

            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-0" onClick={props.onClick}>Search</button>
            </div>
        </div>
    </form>
)

export default TeamSearch;
