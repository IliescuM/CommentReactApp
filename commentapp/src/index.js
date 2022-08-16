import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import './style/App.css'
import { faker } from "@faker-js/faker";


const App = () => {
    return (
        <div>
            <br></br>
            <div className="ui container comments">
                <ApprovalCard>
                    <div>
                        <h4>Warning!</h4>
                        Are you sure you want to do this
                    </div>
                </ApprovalCard>

                <ApprovalCard>
                    <CommentDetail
                        author="Mihnea"
                        date="Today at 4:45PM"
                        comment="Super"
                        avatar={faker.image.avatar()}
                    />
                </ApprovalCard>
                <ApprovalCard>
                    <CommentDetail
                        author="Alex"
                        date="Today at 6:22AM"
                        comment="Bad"
                        avatar={faker.image.avatar()}
                    />
                </ApprovalCard>
                <ApprovalCard>
                    <CommentDetail
                        author="Jane"
                        date="Today at 1:36PM"
                        comment="Intresting"
                        avatar={faker.image.avatar()}
                    />
                </ApprovalCard>

            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))