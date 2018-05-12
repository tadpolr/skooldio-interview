import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { COLOR } from '../../const'
import { HeartIcon, OperationIcon, ShareIcon, UserIcon } from '../Icon'
import { InfoList, InfoListItem } from '../InfoList'
import { List, ListItem } from '../base/List'
import Accordion from '../Accordion'
import Button from '../base/Button'
import Card from '../base/Card'
import Divider from '../base/Divider'
import Flex from '../base/Flex'
import Round from '../Round'
import Text from '../base/Text'

class DepartmentCard extends Component {
    state = {
        isFavorite: this.props.data.isFavorite,

        faculty: this.props.data.faculty,
        department: this.props.data.department,
        university: this.props.data.university,
        round: this.props.data.round,
        currentRound: this.props.data.currentRound,

        userScore: this.props.data.userScore,
        lowestScore: this.props.data.lowestScore,
        averageScore: this.props.data.averageScore,
        highestScore: this.props.data.highestScore,

        scoreWeight: this.props.data.scoreWeight,
        insterstedUser: this.props.data.insterstedUser,
    }

    toggleIsFavorite = () => {
        this.setState({
            isFavorite: this.state.isFavorite ? false : true
        })
    }

    onClickShare = () => {
        alert("Share icon is clicked!")
    }

    onClickButton = () => {
        alert("Button is clicked!")
    }
    
    render() {
        return (
            <Card>
                <HeaderSection>
                    <img src="img/engi.svg" alt="faculty icon" width="80px" style={{ marginRight: '1.25rem' }} />
                    <Flex col fullWidth>
                        <Text header semibold color={COLOR.GRAPEFRUIT}>{this.state.faculty}</Text>
                        <Text large medium color={COLOR.LIGHT_GREY}>{this.state.department}</Text>
                        <Text large light color={COLOR.LIGHT_GREY} margin="auto 0 0">{this.state.university}</Text>
                    </Flex>
                    <HeartIcon isFavorite={this.state.isFavorite} onClick={this.toggleIsFavorite}/>
                </HeaderSection>
                
                <Divider />

                <BodySection col fullWidth>
                    <Round data={this.state.round} />

                    <Flex between alignCenter fullWidth margin="1rem 0 1.5rem">
                        <Text semibold color={COLOR.GRAPEFRUIT}>รอบที่ {this.state.currentRound.index}: {this.state.currentRound.name}</Text>
                        <Button onClick={this.onClickButton}>
                            <Text small medium inherit>แก้ไขคะแนน</Text>
                            <OperationIcon />
                        </Button>
                    </Flex>
                    <Flex between alignCenter fullWidth margin="0 0 1.5rem">
                        <img src="img/badge.svg" alt="badge" width="27px" style={{ marginLeft: '1.5rem' }} />
                        <Flex col alignEnd>
                            <Text small light color={COLOR.DARK_GREY} margin='0 0 0.25rem'>คะแนนของคุณคือ</Text>
                            <Text extra light color={COLOR.DARK_GREY}>{this.state.userScore}</Text>
                        </Flex>
                    </Flex>
                    <InfoList>
                        <InfoListItem label="คะแนนต่ำสุด 60" value={this.state.lowestScore} />
                        <InfoListItem label="คะแนนเฉลี่ย 60" value={this.state.averageScore} />
                        <InfoListItem label="คะแนนสูงสุด 60" value={this.state.highestScore} />
                    </InfoList>

                    <Divider />

                    <Accordion title="ดูสัดส่วนคะแนน">
                        <List>
                            { this.state.scoreWeight.map( (e, index) => {
                                return <ListItem key={index}>
                                        <Text medium margin="0 0.5rem 0 0">{e.name}</Text>
                                        {e.minimum ? <Text small light color={COLOR.LIGHT_GREY}>ขั้นต่ำ {e.minimum}</Text> : null}
                                        <Text medium style={{ float: 'right' }}>{e.value}</Text>
                                    </ListItem>
                                })
                            }
                        </List>
                    </Accordion>
                </BodySection>
  
                <Divider />

                <FooterSection>
                    <Text small color={COLOR.LIGHT_GREY}><UserIcon /> {this.state.insterstedUser} <i>คนที่สนใจ</i></Text>
                    <ShareIcon onClick={this.onClickShare} />
                </FooterSection>
            </Card>
        )
    }
}

DepartmentCard.propTypes = {
    // See data example in App.js
    data: PropTypes.object,
}

export default DepartmentCard

const HeaderSection = styled.div`
    display: flex;
    flex-direction: column;

    > * {
        margin-bottom: 1rem;

        &:last-child {
            margin-bottom: 0;
        }
    }

    @media (min-width: 321px) {
        flex-direction: row;
    }
    
    width: 100%;
`

const BodySection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const FooterSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`