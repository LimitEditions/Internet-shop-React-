import {PropTypes} from 'prop-types';

function State({states}) {
    
    return states.map((state) => 
        <>
            <p key={state.id}>{state.text}</p>
        </>
    );
}

State.propTypes = {
    states: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
};
export default State;
