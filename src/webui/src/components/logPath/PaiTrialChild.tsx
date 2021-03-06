import * as React from 'react';
import { Row, Button } from 'antd';
import { DOWNLOAD_IP } from '../../static/const';

interface PaiTrialChildProps {
    logString: string;
    id: string;
    showLogModal: Function;
    isdisLogbtn?: boolean;
}

class PaiTrialChild extends React.Component<PaiTrialChildProps, {}> {

    constructor(props: PaiTrialChildProps) {
        super(props);

    }

    render() {
        const { logString, id, showLogModal, isdisLogbtn } = this.props;
        return (
            <div>
                {
                    logString === ''
                        ?
                        <div />
                        :
                        <Row>
                            <Row>
                                <a
                                    target="_blank"
                                    href={`${DOWNLOAD_IP}/trial_${id}.log`}
                                    style={{ marginRight: 10 }}
                                >
                                    trial stdout
                                </a>
                            </Row>
                            <Row>
                                <Button
                                    disabled={isdisLogbtn}
                                    type="primary"
                                    className="tableButton"
                                    onClick={showLogModal.bind(this, id)}
                                >
                                    View
                                </Button>
                            </Row>
                        </Row>
                }
            </div>
        );
    }
}

export default PaiTrialChild;
