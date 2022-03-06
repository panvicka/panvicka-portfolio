import React, { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { urlFor, client } from '../../clients';
import Tag from '../../components/Tag/Tag';
import { useLanguage } from '../../context/LanguageContext';
import { SectionTitle, PageWrapper } from '../../index.styles';
import { AppWrapper } from '../../wrapper';
import { WorkItem, WorkHeader, WorkItemWrapper, WorkImage, WorkTags } from './Work.styles';

function Work() {
  const [work, setWork] = useState([]);

  const currentLanguage = useLanguage();

  useEffect(() => {
    const query = '*[_type == "work"]';

    client.fetch(query).then((data) => {
      setWork(data);
    });
  }, []);

  const { t } = useTranslation();

  const textMotion = {
    rest: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
        type: 'tween',
        ease: 'easeIn',
      },
    },
    hover: {
      y: 50,
      opacity: 0,
      transition: {
        duration: 0.2,
        type: 'tween',
        ease: 'easeOut',
      },
    },
  };

  return (
    <PageWrapper column>
      <SectionTitle>{t('tra-work')}</SectionTitle>

      <WorkItemWrapper>
        {work.map((workItem) => (
          <WorkItem
            key={workItem._id}
            as={motion.div}
            whileHover="hover"
            initial="rest"
            animate="rest"
          >
            <WorkHeader>{workItem.name[currentLanguage]}</WorkHeader>
            {workItem.link && (
              <button type="button" aria-label={`go to ${workItem.name} project page}`}>
                <a href={workItem.link}>Check Project</a>
              </button>
            )}
            <p>{workItem.info[currentLanguage]}</p>
            <WorkImage as={motion.div} variants={textMotion}>
              {workItem.workImage && (
                <img
                  src={urlFor(workItem.workImage)}
                  alt={`screenshot of the ${workItem.name} project`}
                />
              )}
            </WorkImage>

            <WorkTags>
              {workItem.tags.map((tag, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <Tag key={`tag-${index}`} text={tag} />
              ))}
            </WorkTags>
          </WorkItem>
        ))}
      </WorkItemWrapper>
    </PageWrapper>
  );
}

export default AppWrapper(Work, 'work');
