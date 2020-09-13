import React from 'react';
import { shallow } from 'enzyme';

import Home from '../Home';
import { ServerDataProvider } from '../../state/serverDataContext';
import '@testing-library/jest-dom';
import { expect } from 'chai';

const launchData = {
  launches: [
    {
      flight_number: 110,
      mission_name: 'SXM-7',
      mission_id: [],
      launch_year: '2020',
      launch_date_unix: 1601510400,
      launch_date_utc: '2020-10-01T00:00:00.000Z',
      launch_date_local: '2020-09-30T20:00:00-04:00',
      is_tentative: true,
      tentative_max_precision: 'quarter',
      tbd: false,
      launch_window: null,
      rocket: {
        rocket_id: 'falcon9',
        rocket_name: 'Falcon 9',
        rocket_type: 'FT',
        first_stage: {
          cores: [
            {
              core_serial: null,
              flight: null,
              block: 5,
              gridfins: null,
              legs: null,
              reused: null,
              land_success: null,
              landing_intent: null,
              landing_type: null,
              landing_vehicle: null
            }
          ]
        },
        second_stage: {
          block: 5,
          payloads: [
            {
              payload_id: 'SXM-7',
              norad_id: [],
              reused: false,
              customers: ['SiriusXM'],
              nationality: 'United States',
              manufacturer: 'SSL',
              payload_type: 'Satellite',
              payload_mass_kg: null,
              payload_mass_lbs: null,
              orbit: 'GTO',
              orbit_params: {
                reference_system: 'geocentric',
                regime: 'geostationary',
                longitude: null,
                semi_major_axis_km: null,
                eccentricity: null,
                periapsis_km: null,
                apoapsis_km: null,
                inclination_deg: null,
                period_min: null,
                lifespan_years: 15,
                epoch: null,
                mean_motion: null,
                raan: null,
                arg_of_pericenter: null,
                mean_anomaly: null
              }
            }
          ]
        },
        fairings: {
          reused: null,
          recovery_attempt: null,
          recovered: null,
          ship: null
        }
      },
      ships: [],
      telemetry: {
        flight_club: null
      },
      launch_site: {
        site_id: 'ccafs_slc_40',
        site_name: 'CCAFS SLC 40',
        site_name_long:
          'Cape Canaveral Air Force Station Space Launch Complex 40'
      },
      launch_success: null,
      links: {
        mission_patch: null,
        mission_patch_small: null,
        reddit_campaign: null,
        reddit_launch: null,
        reddit_recovery: null,
        reddit_media: null,
        presskit: null,
        article_link: null,
        wikipedia: null,
        video_link: null,
        youtube_id: null,
        flickr_images: []
      },
      details: null,
      upcoming: true,
      static_fire_date_utc: null,
      static_fire_date_unix: null,
      timeline: null,
      crew: null,
      last_date_update: '2019-12-28T12:12:28.000Z',
      last_ll_launch_date: '2020-07-01T00:00:00.000Z',
      last_ll_update: '2019-10-30T19:01:14.000Z',
      last_wiki_launch_date: '2020-01-01T00:00:00.000Z',
      last_wiki_revision: '509ba52b-296b-11ea-9a3a-0e0020332717',
      last_wiki_update: '2019-12-28T12:12:28.000Z',
      launch_date_source: 'wiki'
    },
    {
      flight_number: 111,
      mission_name: 'Turksat 5A',
      mission_id: [],
      launch_year: '2020',
      launch_date_unix: 1601510400,
      launch_date_utc: '2020-10-01T00:00:00.000Z',
      launch_date_local: '2020-09-30T20:00:00-04:00',
      is_tentative: true,
      tentative_max_precision: 'quarter',
      tbd: false,
      launch_window: null,
      rocket: {
        rocket_id: 'falcon9',
        rocket_name: 'Falcon 9',
        rocket_type: 'FT',
        first_stage: {
          cores: [
            {
              core_serial: null,
              flight: null,
              block: 5,
              gridfins: null,
              legs: null,
              reused: true,
              land_success: null,
              landing_intent: null,
              landing_type: null,
              landing_vehicle: null
            }
          ]
        },
        second_stage: {
          block: 5,
          payloads: [
            {
              payload_id: 'Turksat 5A',
              norad_id: [],
              reused: false,
              customers: ['Turksat'],
              nationality: 'Turkey',
              manufacturer: 'Airbus Defence and Space',
              payload_type: 'Satellite',
              payload_mass_kg: null,
              payload_mass_lbs: null,
              orbit: 'GTO',
              orbit_params: {
                reference_system: 'geocentric',
                regime: 'geostationary',
                longitude: null,
                semi_major_axis_km: null,
                eccentricity: null,
                periapsis_km: null,
                apoapsis_km: null,
                inclination_deg: null,
                period_min: null,
                lifespan_years: 15,
                epoch: null,
                mean_motion: null,
                raan: null,
                arg_of_pericenter: null,
                mean_anomaly: null
              }
            }
          ]
        },
        fairings: {
          reused: null,
          recovery_attempt: null,
          recovered: null,
          ship: null
        }
      },
      ships: [],
      telemetry: {
        flight_club: null
      },
      launch_site: {
        site_id: 'ccafs_slc_40',
        site_name: 'CCAFS SLC 40',
        site_name_long:
          'Cape Canaveral Air Force Station Space Launch Complex 40'
      },
      launch_success: null,
      links: {
        mission_patch: null,
        mission_patch_small: null,
        reddit_campaign: null,
        reddit_launch: null,
        reddit_recovery: null,
        reddit_media: null,
        presskit: null,
        article_link: null,
        wikipedia: null,
        video_link: null,
        youtube_id: null,
        flickr_images: []
      },
      details: null,
      upcoming: true,
      static_fire_date_utc: null,
      static_fire_date_unix: null,
      timeline: null,
      crew: null
    }
  ]
};
describe('<Home />', () => {
  it('renders filter section ', () => {
    const wrapped = shallow(
      <ServerDataProvider value={launchData}>
        <Home />
      </ServerDataProvider>
    );
    console.log(wrapped.debug());
    expect(wrapped.find('Home')).to.have.lengthOf(1);
  });
});
