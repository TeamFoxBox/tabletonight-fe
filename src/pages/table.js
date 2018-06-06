import React, { Component } from 'react'
import '../css/table.css'


export default class Table extends Component {
    render() {
        return(
            <div>
            <div className="container-4">
                <div className="box-7">
                    <div className="table-image">
                        <img src="/assets/images/tablechart2.png"/>
                    </div>
                </div>
                <div className="box-8">
                    <div class="form-group">
                        <label for="exampleSelect1">Choose Your Table</label>
                         <select class="form-control" id="exampleSelect1">
                           <option>Table 1</option>
                           <option>Table 2</option>
                           <option>Table 3</option>
                           <option>Table 4</option>
                           <option>Table 5</option>
                         </select>
                    </div>
                    <button type="button" class="btn btn-success">
                      Book Table
                    </button>
                </div>
            </div>
            </div>
       )
    }
}
