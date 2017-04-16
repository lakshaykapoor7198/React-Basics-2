import React, { Component } from 'react';
import '../App.css'
class Forme extends Component {
    static defaultProps = {
        len: [1, 2, 3, 4],
        htmlOp: ['true', 'false']
    }

    newRequest(e) {
        e.preventDefault();
        var item = { paras: this.refs.l.value, htm: this.refs.h.value };
        this.props.s(item);
    }

    render() {

        let a = this.props.len.map(e => {
            
            return (

                <option value={e}>{e}</option>
            )
        });
        let b = this.props.htmlOp.map(e => {
            
            return (

                <option value={e}>{e}</option>
            )
        });
        return (
            <div className="Forme">
                <center><form >
                    <div class='form-group'>
                    <br/><br/>
                        <select ref='l' onChange={this.newRequest.bind(this)} className='sel'>
                            <option value=''>No of paragraphs</option>
                            {a}
                        </select>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <select ref='h' onChange={this.newRequest.bind(this)} className='sel'>
                            <option value=''>Html required or not</option>
                            {b}
                        </select>

                        <br />
                    </div>
                </form>
                </center>
            </div>
        );
    }
}

export default Forme;
