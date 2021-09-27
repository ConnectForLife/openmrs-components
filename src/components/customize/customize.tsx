/* * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */

import React from 'react';
import { connect } from 'react-redux';
import { getConfigs } from "./customize.reducer";

export interface ICustomizeProps extends DispatchProps, StateProps {
};

export interface ICustomizeState {}

export class Customize extends React.PureComponent<ICustomizeProps, ICustomizeState> {

    componentDidMount() {
        this.props.getConfigs();
    }

    render() {
        return (
            <>
                {this.props.styles.map((e) => {
                    return (<link rel="stylesheet" href={e}></link>);
                })}
            </>
        );
    };
}

export const mapStateToProps = ({ customizeReducer }: any) => ({
    loading: customizeReducer.loading,
    styles: customizeReducer.styles
});

const mapDispatchToProps = ({
    getConfigs
});

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(Customize);