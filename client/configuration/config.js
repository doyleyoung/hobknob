angular.module("config", [])

.constant("ENV", {
  "RequiresAuth": true,
  "AuthProviders": {
    "GoogleAuth": {
      "GoogleClientId": "50690959862-gehe3hl63oqvdh7moa0ert7rn45pd8q1.apps.googleusercontent.com",
      "GoogleClientSecret": "2n5knmIAIHKe59eQsIU0B6cw"
    }
  },
  "name": "development",
  "etcdHost": "127.0.0.1",
  "etcdPort": "4001",
  "hobknobHost": "localhost",
  "hobknobPort": "3006"
})

;