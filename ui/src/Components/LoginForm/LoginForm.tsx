// import React from 'react';
import {Form, Grid, Image, Segment} from 'semantic-ui-react';
import logo from '../../../assets/Logo.png';
import styles from './LoginForm.module.less';

export const LoginForm = () => {
    return (
        <Grid
            className={styles.container}
            textAlign="center"
            verticalAlign="middle"
        >
            <Grid.Column style={{ maxWidth: 360 }}>
                <Segment className={styles.formBox}>
                    <div className={styles.logoRow}>
                        <div className={styles.icon}>
                            <Image size="medium" src={logo} />
                        </div>
                        <div className={styles.title}>Goalkeeping<br/>
                            Organizer
                        </div>
                    </div>
                    <Form className={styles.form} size="large">
                        <Form.Input
                            className={styles.darkInput}
                            placeholder="Login"
                            fluid
                        />
                        <div className={styles.password}>
                            <Form.Input
                                className={styles.darkInput}
                                placeholder="Password"
                                type="password"
                                fluid
                            />
                        </div>
                        <div className={styles.buttonContainer}>
                            <div className={styles.loginButton}>
                                <button className="fluid large ui orange basic button">Login</button>
                            </div>
                        </div>
                    </Form>
                </Segment>
            </Grid.Column>
        </Grid>
    );
};
