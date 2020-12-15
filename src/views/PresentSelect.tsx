import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ParticipantList from '../states/participants/components/ParticipantList';
import ClaimedPresentList from '../states/presents/components/ClaimedPresentList';
import PresentList from '../states/presents/components/PresentList';
import './PresentSelect.css';
import type { ReducerCombinedState } from '../reducers';
import { startRoundThunk, startFinalRoundThunk } from '../states/round/thunks';
import { setCurrentView } from '../states/app/actions';
import { Views } from '../res/constants';

function PresentSelect() {
  const dispatch = useDispatch();
  const state = useSelector((state: ReducerCombinedState) => state);
  const { activeParticipant, isFinalRound, isRandomizing } = state.round;
  const { firstParticipant } = state.participants;
  const { presents, claimedPresents } = state.presents;

  const shouldStartFinalRound = presents.length === claimedPresents.length;

  console.log({state});

  function onStartRoundClick() {
    if (isRandomizing) {
      return;
    }

    if (shouldStartFinalRound) {
      dispatch(startFinalRoundThunk());
    } else {
      dispatch(startRoundThunk());
    }
  }

  function onCompleteClick() {
    dispatch({
      type: setCurrentView,
      payload: Views.Summary,
    });
  }

  function renderActiveParticipant() {
    return (
      <b id='active-label'> 
        Active Participant:&nbsp;&nbsp;
        <span id='active-participant'>
          { activeParticipant?.name }
        </span>
      </b>
    );
  }

  function renderEndGiftExchangeButton() {
    return (
      <button id='complete-btn' onClick={onCompleteClick}>End Gift Exchange!</button>
    );
  }

  function renderContent() {
    const disableButton = !!activeParticipant || isFinalRound;

    return (
      <div id='main-content'>
        <div id='header-content'>
          <button
            id='start-round-btn'
            disabled={disableButton}
            onClick={onStartRoundClick}
          >
            { shouldStartFinalRound ? 'Start Final Round' : 'Who\'s Next?' }
          </button>
          { renderActiveParticipant() }
        </div>

        <div id='content'>
          <div id='left-content'>
            <ParticipantList />
          </div>
          <div id='right-content'>
            { !isFinalRound && <PresentList /> }
            <ClaimedPresentList  />
          </div>
        </div>
        { isFinalRound && renderEndGiftExchangeButton() }
      </div>
    );
  }

  return (
    <div id='present-select-container'>
      { renderContent() }
    </div>
  );
}

export default PresentSelect;
