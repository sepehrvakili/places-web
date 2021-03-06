import React from 'react';


const BotEntry = (props) => {
  let classProp = '';
  let symbol = '';
  if (props.bot.posting && props.bot.type === 'posting') {
    classProp = 'btn-floating btn-small waves-effect waves-light red';
    symbol = 'stop';
  } else if (!props.bot.posting && props.bot.type === 'posting') {
    classProp = 'btn-floating btn-small waves-effect waves-light green';
    symbol = 'message';
  } else if (props.bot.moving && props.bot.type === 'moving') {
    classProp = 'btn-floating btn-small waves-effect waves-light red';
    symbol = 'stop';
  } else {
    classProp = 'btn-floating btn-small waves-effect waves-light green';
    symbol = 'navigation';
  }

  const handleClick = () => {
    if (props.bot.type === 'posting') {
      props.handlePost(props.bot.id, props.bot.posting, props.bot.location);
    } else {
      props.handleMoving(props.bot.id, props.bot.moving);
    }
  };

  return (
    <div>
      <div className="card-panel grey lighten-5 z-depth-1 hoverable">
        <div className="row valign-wrapper">
          <div className="col s1">
            <a
              className={classProp}
              onClick={() => handleClick()}
            >
              <i className="material-icons">{symbol}</i>
            </a>
          </div>
          <div className="col s3 push-s5 offset-s2">
            <img
              src={props.bot.imageUrl}
              alt=""
              className="responsive-img"
            />
          </div>
          <div className="col s5 pull-s4 offset-s1">
            <span className="black-text">
              <h5 className="valign-wrapper">
                {props.bot.name}
              </h5>
              {props.bot.location ?
                <span> <strong> Posting from: </strong> {props.bot.location} </span> :
                <span> <strong> Origin: </strong> {props.bot.origin}
                  <br /> <strong> Destination: </strong> {props.bot.destination}
                </span>
              }
            </span>
          </div>
        </div>
      </div>
    </div>
    );
};

BotEntry.propTypes = {
  bot: React.PropTypes.object,
  posting: React.PropTypes.bool,
  handlePost: React.PropTypes.func,
  handleMoving: React.PropTypes.func,
};

export default BotEntry;
