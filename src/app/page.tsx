'use client';

import React, { useState, useEffect, Fragment, useCallback } from 'react';
import Image from 'next/image';
import ContactTile from '@/components/ContactTile';
import Project from '@/components/Project';
import contactData from '@/data/contactData';
import projectsData from '@/data/projectsData';

import ylvaBg from '../../public/images/ylvaBg.png';
import justYlva from '../../public/images/justYlva.png';

const cta = "Let's have a chat!";

const Portfolio = () => {
    const [siteHasLoaded, setSiteHasLoaded] = useState(false);

    const assignLoadClasses = useCallback(() => {
        // TITLE ANIMATION //
        const titleImgContainer = document.getElementById('titleImages');
        const titleHeadersContainer = document.getElementById('titleHeaders');

        titleImgContainer?.classList.add('loaded');
        titleHeadersContainer?.classList.add('loaded');

        // PROJECT SECTION CLASS ASSIGNMENT //
        const projects = document.querySelectorAll('.project');

        projects.forEach((project, index) => {
            if (index % 2 !== 0) {
                project.classList.add('projectReversed');
            }
        });
    }, []);

    useEffect(() => {
        setSiteHasLoaded(true);
    }, []);

    useEffect(() => {
        if (siteHasLoaded) {
            assignLoadClasses();
        }
    }, [siteHasLoaded, assignLoadClasses]);

    return (
        <Fragment>
            <main className='container'>
                <section className='title' id='title'>
                    <div className='titleHeaders' id='titleHeaders'>
                        <h1>Ylva Turner</h1>
                        <h2>Web Developer</h2>
                    </div>

                    <div className='titleImages' id='titleImages'>
                        <Image
                            width={1000}
                            height={600}
                            className='ylvaBg'
                            src={ylvaBg}
                            alt='Illustration of Ylva sitting on a ball in a room with plants.'
                        />
                        <Image
                            width={400}
                            height={400}
                            className='justYlva'
                            src={justYlva}
                            alt='Illustration of Ylva sitting on a ball in a room with plants.'
                        />
                    </div>
                </section>

                <section className='projects'>
                    <h2 id='projects'>Projects</h2>

                    {projectsData.map((project, idx) => (
                        <Project
                            name={project.name}
                            url={project.url}
                            img={project.img}
                            centeredImg={project.centeredImg}
                            key={idx}
                        />
                    ))}
                </section>

                <section className='contact' id='contact'>
                    <h2>{cta}</h2>

                    <div className='contact-links'>
                        {contactData.map((contactTile, idx) => (
                            <ContactTile
                                text={contactTile.text}
                                url={contactTile.url}
                                icon={contactTile.icon}
                                key={idx}
                            />
                        ))}
                    </div>
                </section>
            </main>
        </Fragment>
    );
};

export default Portfolio;
