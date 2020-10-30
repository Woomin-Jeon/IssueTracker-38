import React from 'react';
import { PropTypes } from 'prop-types';

const styles = {
  body: {
    padding: '0 10px'
  },
  layout: {
    display: 'flex',
    marginTop: '3px'
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: 'black',
    marginRight: '10px'
  },
  label: {
    padding: '5px 10px',
    backgroundColor: 'violet',
    borderRadius: '12px',
    fontSize: '12px'
  },
  details: {
    display: 'flex',
    fontSize: '12px',
    color: 'grey',
    marginTop: '5px'
  },
  detail: {
    marginRight: '5px'
  },
  milestoneIcon: {
    fill: 'grey'
  }
};

export default function Issue({
  title,
  milestone,
  label,
  issueId,
  createdAt,
  asignee
}) {
  return (
    <div css={styles.body}>
      <div css={styles.layout}>
        <a css={styles.title} href={`/detail/${issueId}`}>
          {title}
        </a>
        <div css={styles.label}>{label}</div>
      </div>
      <div css={styles.details}>
        <div css={styles.detail}>#{issueId}</div>
        <div css={styles.detail}>opened {createdAt}</div>
        <div css={styles.detail}>by {asignee}</div>
        <svg
          css={styles.milestoneIcon}
          aria-label="Milestone"
          class="octicon octicon-milestone"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          height="16"
          role="img"
        >
          <path
            fill-rule="evenodd"
            d="M7.75 0a.75.75 0 01.75.75V3h3.634c.414 0 .814.147 1.13.414l2.07 1.75a1.75 1.75 0 010 2.672l-2.07 1.75a1.75 1.75 0 01-1.13.414H8.5v5.25a.75.75 0 11-1.5 0V10H2.75A1.75 1.75 0 011 8.25v-3.5C1 3.784 1.784 3 2.75 3H7V.75A.75.75 0 017.75 0zm0 8.5h4.384a.25.25 0 00.161-.06l2.07-1.75a.25.25 0 000-.38l-2.07-1.75a.25.25 0 00-.161-.06H2.75a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h5z"
          ></path>
        </svg>
        <div css={styles.detail}>{milestone}</div>
      </div>
    </div>
  );
}

Issue.propTypes = {
  title: PropTypes.string.isRequired,
  milestone: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  issueId: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  asignee: PropTypes.string.isRequired
};