//icons skills fron-end
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react-icon.png'
import redux from '../assets/redux.png'
import bootstrap from '../assets/bootstrap.png'
import materialUI from '../assets/material-ui-.png'
import vtex from '../assets/vtex.png'
//icons skills back-end
import node from '../assets/node.png'
import express from '../assets/express.png'
import sequelize from '../assets/sequelize.png'
import sql from '../assets/sql.png'
import postgresql from '../assets/postgresql.png'
import git from '../assets/git.png'
import jest from '../assets/jest.png'
//styles

import '../styles/AboutMe.css'

export default function Skills(){
    return(
        <div>
           
            <div className='front'>
           
            <img src={html} alt='html icon' className='icon-skill'/>
            <img src={css} alt='css icon' className='icon-skill'/>
            <img src={js} alt='js icon' className='icon-skill'/>
            <img src={react} alt='react icon' className='icon-skill'/>
            <img src={redux} alt='react icon' className='icon-skill'/>
            <img src={bootstrap} alt='react icon' className='icon-skill'/>
            <img src={materialUI} alt='react icon' className='icon-skill'/>
            <img src={vtex} alt='react icon'  className='vtex-icon'/>
            </div>
            <hr style={{width: '100%'}}/>
            <div className='back'>
           
            <img src={node} alt='react icon' className='icon-skill'/>
            <img src={express} alt='react icon' className='icon-skill'/>
            <img src={sequelize} alt='react icon'  className='icon-skill'/>
            <img src={sql} alt='react icon'  className='icon-skill'/>
            <img src={postgresql} alt='react icon'  className='icon-skill'/>
            <img src={git} alt='react icon'  className='icon-skill'/>
            <img src={jest} alt='react icon'  className='icon-skill'/>
            </div>
            
        </div>
    )
}