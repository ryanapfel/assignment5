import React, { Component } from 'react'
import PropTypes from 'prop-types';



class Avatar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false
    }


  }
  // This translate the name property to a max of two letters
  // EX: 'John Doe' => 'JD'
  getName(){
    let nameAr = this.props.name.split(' ');
    let initials = '';
    let i = 0;
    while(i < 2 && i < nameAr.length)
      {
        initials += nameAr[i][0];
        i++;
      }
    return initials.toUpperCase();
  }

  onImgError = () => {
    this.setState({
      error: true
    });
  }

  getDisplay()
  {
    if(this.state.error)
    {
      return {display:'none'};
    }
    else {
      return {display:'block'};
    }
  }



  render()
  {
    console.log(this.getName());
    return(
        <div className={this.props.className, 'avatar'}>
            <div className='childWrapper'>
              <img src={this.props.src} onError={this.onImgError} style={this.getDisplay()} alt={this.props.name}/>
            </div>
            <p>{this.getName()}</p>
        </div>
    );
  }

}


Avatar.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string
};

export default Avatar
