/********************************************************************************
* Copyright (c) 2022,2023 BMW Group AG 
* Copyright (c) 2022,2023 Contributors to the Eclipse Foundation
*
* See the NOTICE file(s) distributed with this work for additional
* information regarding copyright ownership.
*
* This program and the accompanying materials are made available under the
* terms of the Apache License, Version 2.0 which is available at
* https://www.apache.org/licenses/LICENSE-2.0.
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
* WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
* License for the specific language governing permissions and limitations
* under the License.
*
* SPDX-License-Identifier: Apache-2.0
********************************************************************************/
/* eslint-disable no-console */
import axios from "axios";

// Actions
export function getRatingsByYear(Year, token, customerUser) {
  var yearAPI;

  if (Year === "") {
    yearAPI = new Date().getFullYear();
  } else {
    yearAPI = Year;
  }

  return axios
    .get(process.env.REACT_APP_DASHBOARD_URL_RATINGSTABLE, {
      params: {
        year: yearAPI,
        name: customerUser.name,
        email: customerUser.email,
        companyName: customerUser.companyName,
      },
      data: customerUser,
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data)
    .catch((err) => err);
}

export function deleteRating(token, customerUser, ratingId) {
  return axios({
    method: "delete",
    url: process.env.REACT_APP_DELETE_RATINGS + `/${ratingId}`,
    params: {
      name: customerUser.name,
      email: customerUser.email,
      companyName: customerUser.companyName,
    },

    headers: { Authorization: `Bearer ${token}` },
  });
}
