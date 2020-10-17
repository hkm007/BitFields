import React, { useEffect } from 'react';
import Modal from 'react-modal';
import '../css/loginmodal.css';

Modal.setAppElement('#modal')

function LoginModal({show, open, set}) {
    const [modalIsOpen, setIsOpen] = React.useState(show);

    const closeModal = () => {
        open(false);
    }

    const loginHelper = (e) => {
        e.preventDefault();
        set(true);
        closeModal();
    }

    return (
        <React.Fragment>
                <Modal
                    isOpen={show}
                    onRequestClose={() => closeModal()}
                    style={customStyles}
                    contentLabel="Login"
                >
                    <div className="p-3">
                        <h3><i className="fa fa-sign-in"></i> Login</h3><hr />
                        <form onSubmit={(e) => loginHelper(e)}>
                            <div class="form-group">
                                <label htmlFor="email"><i className="fa fa-user"></i> Email</label>
                                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" required />
                            </div>
                            <div class="form-group">
                                <label htmlFor="password"><i className="fa fa-key"></i> Password</label>
                                <input type="password" class="form-control" id="password" placeholder="Password" required />
                            </div>
                            <button type="submit" class="btn btn-success">Login</button>
                        </form>
                    </div>
                </Modal>
        </React.Fragment>
    )
}

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        width                 : "30%",
        background            : "black",
        color                 : "white"
    }
};

export default LoginModal;