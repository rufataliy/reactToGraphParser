var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});

// ../vlncc-frontend/src/index.tsx
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

// ../vlncc-frontend/src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// ../vlncc-frontend/src/i18n/en.json
var en_default = {
  "commonTitles.groupsAndUsers": "Groups and users",
  "commonTitles.info": "Info",
  "commonTitles.sites": "Sites",
  "commonTitles.events": "Events",
  "commonTitles.reports": "Reports",
  "commonTitles.deviceManager": "Device Manager",
  "commonTitles.LOC": "location",
  "commonTitles.SITE": "site",
  "commonTitles.ZONE": "zone",
  "profile.changeProfilePicture": "Change profile picture",
  "profile.user": "User",
  "profile.users": "Users",
  "profile.group": "Group",
  "profile.groups": "Groups",
  "profile.usersTotal": "users total",
  "profile.byName": "By name",
  "profile.byMostRecentChanges": "By most recent changes",
  "profile.byNumberOfGroupsAscending": "By number of groups ascending ",
  "profile.byNumberOfGroupsDescending": "By number of groups descending",
  "profile.byNumberOfUsersAscending": "By number of users ascending ",
  "profile.byNumberOfUsersDescending": "By number of users descending",
  "profile.newGroup": "New Group",
  "profile.inviteUser": "Invite User",
  "profile.profileInformation": "Profile information",
  "profile.editProfile": "Edit profile",
  "profile.companyID": "Company ID",
  "profile.company": "Company",
  "profile.unsernameEmail": "Username email",
  "profile.language": "Language",
  "profile.timeZone": "Time zone",
  "profile.notificationEmail": "Notification email",
  "profile.phone": "Phone",
  "profile.addToGroup": "Add to group",
  "profile.accessRight": "Access rights are controlled by group membership",
  "profile.latestActivity": "Latest activity",
  "profile.when": "When",
  "profile.what": "What",
  "profile.viewEvents": "view all events for this user",
  "profile.activateUserMsg": "By activating {{name}}, they will be able to log in and access viewLinc according to their rights.",
  "profile.deactivateUserMsg": "Deactivate {{name}} from the system.\r\n{{user}} will no longer be able to access system.",
  "profile.activateGroupMsg": "Users in this group will gain any rights granted by this group as long as it is active.",
  "profile.deactivateGroupFirstMsg": "Users in this group will not have access to any rights granted by this group as long as it is inactive.",
  "profile.deactivateGroupSecondMsg": "Groups can be re-activated at any time.",
  "profile.activateUserHeader": "Activate User",
  "profile.deactivateUserHeader": "Deactivate User",
  "profile.activateGroupHeader": "Activate group",
  "profile.deactivateGroupHeader": "Deactivate group",
  "profile.activateUserBtn": "Activate",
  "profile.deactivateUserBtn": "Deactivate",
  "profile.activateGroupBtn": "Activate",
  "profile.deactivateGroupBtn": "Deactivate",
  "profile.editProfileConfirmationMsg": "Changes saved to {{name}}",
  "profile.cancel": "Cancel",
  "profile.myProfile": "My profile",
  "profile.pin": "PIN",
  "profile.newUser": "New User",
  "profile.groupsTotal": "Groups Total",
  "profile.deleteUser": "Delete user",
  "profile.delete": "Delete",
  "profile.userDeletionMsg": "Delete {{userName}} from the system.\r\n this action cannot be undone.",
  "profile.userDeletionTitle": "Delete User",
  "profile.createGroupsTitle": "Create new group",
  "profile.creaGroupsName": "Name",
  "profile.createGroupsDescription": "Description",
  "profile.createGroupsConfirmation": "Create group",
  "profile.createGroupsMaxLengthError": "Maximum {{charLen}} characters",
  "profile.createGroupsMinLengthError": "Minimum {{charLen}} characters",
  "profile.groupNameDuplicateError": "The group name exist",
  "profile.groupNameEmptyError": "The group name cannot be empty",
  "profile.editGroupsTitle": "Edit group",
  "profile.editGroupsDescription": "Description",
  "profile.editGroupsMaxLengthError": "Maximum {{charLen}} characters",
  "profile.editGroupsMinLengthError": "Minimum {{charLen}} characters",
  "profile.deleteGroup": "Delete group",
  "profile.groupDeletionTitle": "Delete group",
  "profile.groupDeletionMsg": "Are you sure you want to delete this group? \r\n This action cannot be undone. Any group members will lose the rights associated with this group.",
  "profile.groupDeletionConfirm": "Yes, delete",
  "profile.groupEditDescripitionMessage": "Edit group to add description",
  "profile.siteRightsTitle": "Site rights",
  "profile.groupMembersTitle": "Group members",
  "profile.deleteGroupUsersTitle": "Remove group members",
  "profile.phoneNumber": "Phone #",
  "profile.remove": "Remove",
  "profile.deleteGroupUsersMsg": "Remove {{numberOfGroups}} users from the group {{groupName}}?",
  "profile.report": "Report",
  "profile.addGroupMembers": "Add group members",
  "profile.view": "View zones",
  "profile.acknowledgeAlarms": "Acknowledge alarms",
  "profile.pauseAlarms": "Pause alarms",
  "profile.linkAlarms": "Link alarms",
  "profile.commentAlarms": "Comment on alarms",
  "profile.commentData": "Comment on data",
  "profile.manageSites": "Manage sites",
  "profile.manageDevices": "Manage devices",
  "profile.alarmTemplates": "Alarm Templates",
  "profile.manageUsersAndGroups": "Manage users and groups",
  "profile.manageEvents": "Manage events",
  "profile.managePreferences": "Manage Preferences",
  "profile.manageReports": "Manage Reports",
  "profile.manageAlarmTemplates": "Manage Alarm Templates",
  "profile.manageUsersGroups": "Manage Users Groups",
  "profile.showInactive": "Show inactive",
  "profile.showActive": "Show active",
  "profile.inactive": "Inactive",
  "profile.active": "Active",
  "profile.sort": "Sort",
  "profile.new": "New",
  "profile.viewRightsSummary": "View rights summary",
  "profile.rightSummary": "View {{userName}}'s rights summary",
  "profile.rightSummaryMessage": "A user's rights are affected by the groups the user belongs to, and cannot be edited individually.",
  "profile.hasRights": "Has rights",
  "profile.hasNoRights": "Has no rights",
  "profile.viewightsByZone": "View rights by zone",
  "profile.hasNoRightsToAccessPage": "No rights to view this page",
  "profile.InactiveGroupsEmptySearchResult": "No results found in groups.",
  "profile.ActiveGroupsEmptySearchResult": "No results found in active groups.",
  "profile.InactiveUsersEmptySearchResult": "No results found in users.",
  "profile.ActiveUsersEmptySearchResult": "No results found in active users.",
  "profile.NotifyInvitationsSent": "Invitation sent to {{amount}} new users",
  "profile.NotifyInvitationsRejected": "{{amount}} emal invitation failed to send",
  "profile.NotifyInvitationsFailed": "Email invitation failed to send",
  "profile.NotifyGroupDeactivated": "{{groupName}} group status updated to inactive.",
  "profile.NotifyGroupActivated": "{{groupName}} group status updated to active.",
  "profile.NotifyActivationFailed": "Error updating group status, please try again",
  "auth.user": "User",
  "auth.logout": "Log Out",
  "auth.email": "Username / email",
  "auth.username": "Username",
  "auth.forgotPassword": "Forgot your password?",
  "auth.login": "Login",
  "auth.password": "Password",
  "auth.companyID": "Company ID",
  "auth.loadingUser": "Loading user information",
  "auth.passwordChangeFailed": "Password change failed",
  "auth.invalidPassword": "Invalid password",
  "auth.limitExceeded": "The maximum number of tries exceeded. Try again later.",
  "auth.passwordCannotBeEmpty": "Password cannot be empty",
  "auth.doNotMatch": "Passwords do not match",
  "auth.passwordChanged": "Password changed successfully",
  "auth.logoutDueToInactivity": "You've been logged out due to inactivity",
  "auth.sessionExpired": "Your session expired. Log in again to use {{appName}}",
  "auth.doNotMeetCriteria": "New password does not meet all requirements",
  "auth.forgotPasswordTitle": "Forgot Your Password?",
  "auth.typeUsernameForCode": "Type in your username or email and company ID, then click send. We will send you link to site where you can renew your password.",
  "auth.returnToLogin": "Return to login",
  "auth.sendEmailButton": "Send",
  "auth.createNewPasswordTitle": "Password reset",
  "auth.resetPasswordHelp": "We sent a password reset code to {{email}}. Type the code below to reset your password.",
  "auth.passwordResetCode": "Password reset code",
  "auth.passwordResetTitle": "Password has been reset",
  "auth.passwordResetHelp": "Your password has been reset successfully. Return to login from the link below.",
  "auth.userNotFoundWithEmail": "Could not find user with given email",
  "auth.couldNotSendEmail": "Error while sending reset code",
  "auth.codeMismatch": "Invalid password reset code",
  "auth.codeExpired": "Verification code has expired",
  "auth.couldNotResetPassword": "Could not reset password",
  "auth.invalidUserNameOrPasswordError": "Invalid username or password",
  "auth.invalidUserCredentialError": "Invalid user credentials",
  "auth.linkExpired": "Link is expired",
  "auth.passwordMustBeDifferentThanCurrentPassword": "The new password must be different from the current password.",
  "auth.next": "Next",
  "auth.usernameCharacterLimit": "Username cannot exceed 320 characters",
  "auth.companyIDCharacterLimit": "Company ID cannot exceed 30 characters",
  "auth.passwordStrengthError": "Password must be good",
  "auth.passwordCharsLimit": "Password cannot exceed {{ length }} characters",
  "auth.checkEmailTitle": "Check your email",
  "auth.checkEmailBodyText": "If the address you entered is associated with your {{appName}} account, you will receive an email from us with instructions on how to reset your password.",
  "auth.checkEmailWarning": "In case you don't receive the email, check your junk folder.",
  "auth.emailNotValid": "email is not valid",
  "auth.companyIDMinimumCharacter": "Company ID cannot have less than 2 characters",
  "preferences.preferences": "Preferences",
  "preferences.languages.language": "Language",
  "preferences.languages.fiFI": "Suomi",
  "preferences.languages.en": "English",
  "preferences.languages.dede": "German",
  "preferences.languages.esXN": "Spanish",
  "preferences.languages.frfr": "French",
  "preferences.languages.itIT": "Italian",
  "preferences.languages.jajp": "Japanese",
  "preferences.languages.ptBR": "Portuguese",
  "preferences.languages.svSE": "Swedish",
  "preferences.languages.zhcn": "Chinese",
  "preferences.languages.errorSavingLanguage": "Could not save user language selection",
  "general.appName": "viewLinc Cloud",
  "general.backToSites": "Back to sites",
  "general.accessRestricted": "Access Restricted",
  "general.accessRestrictedDesc": "You do not have permission to view this area of the application",
  "general.contactAdmin": "Contact the {{appName}} administrator for {{companyName}} to request access.",
  "general.copyright": "\xA9 Vaisala - All rights reserved",
  "general.ok": "Ok",
  "general.accountId": "Account",
  "general.back": "Back",
  "general.edit": "Edit",
  "general.save": "Save",
  "general.saving": "Saving...",
  "general.close": "Close",
  "general.discardChanges": "Discard Changes",
  "general.cancel": "Cancel",
  "general.version": "version 1.0",
  "general.versionName": "version",
  "general.privacyPolicy": "Privacy policy",
  "general.environment": "{{env}}\xA0environment",
  "general.feedback": "Give feedback",
  "general.feedbackSubject": "Vaisala Sites Feedback",
  "general.feedbackBody": "My feedback about Vaisala Sites:\r\n\r\n\r\n\r\n\r\n AccountId: {{accountId}} \r\n Version: {{version}}",
  "general.generalErrorMessage": "An error occurred. Try to refresh the page or navigate to another page.",
  "general.somethingWentWrong": "Something went wrong...",
  "general.download": "Download",
  "general.required": "Required",
  "general.networkError": "Network error",
  "general.select": "Select",
  "general.selectEllipsis": "Select...",
  "general.add": "Add",
  "general.name": "Name",
  "general.email": "Email",
  "general.delete": "Delete",
  "general.description": "Description",
  "general.optional": "Optional",
  "general.refresh": "Refresh",
  "general.search": "Search",
  "general.errorPageDescription": "Refresh the page to try again.",
  "general.temperature": "Temperature",
  "general.humidity": "Humidity",
  "general.relativeHumidity": "Relative humidity",
  "general.co2": "CO\u2082",
  "general.exit": "Exit",
  "general.help": "Help",
  "general.location": "Location",
  "general.confirm": "Confirm",
  "general.dataSource": "Data source",
  "general.dataSource_plural": "Data sources",
  "header.tours": "Tour",
  "header.tours_plural": "Tours",
  "menu.changePassword": "Change Password",
  "menu.viewMyProfile": "View my profile",
  placeholder: "Placeholder",
  notificationContent: "Notification content",
  loginInfo: "Login info",
  username: "Username",
  login: "Log in",
  password: "Password",
  settings: "Settings",
  examples: "Examples",
  alerts: "Alerts",
  loadingUser: "Loading user information",
  menuAbout: "About",
  menuMain: "Main page",
  menuSettings: "Settings",
  menuSettingsAlerts: "Alerts",
  menuSettingsExample: "Form example",
  menuSettingsGeneral: "General",
  tabGraph: "Graph",
  tabLatestValues: "Latest values",
  useEnglish: "Use English",
  useFinnish: "Use Finnish",
  forms: "Forms",
  "form.selectPlaceholder": "Select...",
  changeLanguage: "Change language",
  about: "About",
  user: "User",
  info: "Info",
  mainComponents: "Main components",
  text: "Text",
  closable: "Closable",
  theme: "Theme",
  light: "Light",
  dark: "Dark",
  renderCloseButtonInNotificationCorner: "When checked render a close icon in notification corner",
  seconds: "seconds",
  renderNotificationWithLink: "Render with link",
  duration: "Duration",
  linksText: "Links text",
  linksUrl: "Links URL address",
  create: "Create",
  notificationType: "Notification type",
  "notificationTypes.ok": "Check",
  "notificationTypes.warning": "Warning",
  "notificationTypes.error": "Error",
  "notificationTypes.info": "Default",
  "notificationTypes.": "Default",
  "validationErrors.invalidUserNameOrPasswordError": "Invalid username or password",
  "validationErrors.missingNotificationTextError": "Notification text must be defined",
  "validationErrors.tooShortNotificationDurationError": "Notification duration should be at least 4s",
  "validationErrors.missingNotificationLinkText": "Notification link text must be defined",
  "validationErrors.missingNotificationLinkTo": "Notifications links URL must be defined",
  "validationErrors.unknownError": "An unknown error occurred",
  "changePassword.dialogTitle": "Change Password",
  "changePassword.currentPasswordLabel": "Current password",
  "changePassword.newPasswordLabel": "New password",
  "changePassword.createPassword": "Create Password",
  "changePassword.characterLengthError": "Too many characters",
  "password.cannotStartWithSpace": "Password cannot begin with whitespace",
  "password.cannotEndWithSpace": "Password cannot end with whitespace",
  "password.passwordHelperTextBlurb": "Use a strong password. Strong passwords include numbers, letters, and special characters. The minimum password length is {{length}} characters.",
  "password.passwordHelperText": "Password must include:",
  "password.passwordHelperCharacterLengthRequirement": "The minimum password length is {{length}} characters.",
  "password.passwordHelperMaxCharacterLengthRequirement": "The maximum password length is {{length}} characters.",
  "password.passwordHelperLowerCaseRequirement": "A lower case letter",
  "password.passwordHelperUpperCaseRequirement": "An upper case letter",
  "password.passwordHelperNumberRequirement": "A number",
  "password.passwordHelperSpecialCharRequirement": "A special character",
  "password.mustHaveLowerCase": "Password must contain at least one lower case character",
  "password.mustHaveUpperCase": "Password must contain at least one upper case character",
  "password.mustHaveNumber": "Password must contain at least one number character",
  "password.mustHaveSymbol": "Password must contain at least special character",
  "password.containsReservedWords": "Your password contains reserved words like username, email or company name.",
  "password.strong": "Strong",
  "password.good": "Good",
  "password.fair": "Fair",
  "password.short": "Short",
  "password.weak": "Weak",
  "signup.addProfilePicture": "Add profile picture",
  "signup.setupccounttitle": "Begin by setting up your account",
  "signup.dialogTitle": "Begin by setting up your password",
  "signup.createPassword": "Create Password",
  "signup.newPasswordLabel": "New password",
  "signup.confirmNewPasswordLabel": "Confirm password",
  "signup.firstName": "First name",
  "signup.lastName": "Last name",
  "signup.language": "language",
  "signup.timeZone": "Time Zone",
  "signup.phoneNumber": "Phone number",
  "signup.emailAddress": "Email address",
  "signup.pin": "PIN",
  "signup.finishBtn": "Finish",
  "signup.firstNameCannotBeEmpty": "First name cannot be empty",
  "signup.characterLengthError": "Too many characters",
  "signup.lastNameCannotBeEmpty": "Last name cannot be empty",
  "signup.phoneNumberIsNotValid": "Must be a valid phone number",
  "signup.emailIsNotValid": "Check email format",
  "signup.languageCannotBeEmpty": "Language should be selected",
  "signup.timeZoneCannotBeEmpty": "Time zone should be selected",
  "signup.invalidPin": "Must be between 4 and  6 digits",
  "signup.cancel": "Cancel",
  "signup.save": "Save",
  "signup.setupProfileTitle": "Edit profile information",
  "inviteUsers.inviteUsersTitle": "Invite new users",
  "inviteUsers.enterEmail": "Enter the email of the people you want to invite to viewLinc",
  "inviteUsers.addUserToGroups": "Then add your new users to at least one group so they can access the right areas of your system",
  "inviteUsers.email": "email",
  "inviteUsers.invitationLanguage": "Language of invitation",
  "inviteUsers.invite": "Invite",
  "inviteUsers.cancel": "Cancel",
  "inviteUsers.userRejectionTitle": "Something went wrong",
  "inviteUsers.userRejectionMsg": "The following emails could not be sent, click to try again.",
  "inviteUsers.searchFieldPlaceholder": "Search by name",
  "mfa.title": "Enter verification code",
  "mfa.explanation": "A verification code has been sent to your email address. While waiting for the code, do not refresh this page.",
  "mfa.inputLabel": "Enter code",
  "mfa.resendButton": "Resend code",
  "mfa.backButton": "Back to login",
  "mfa.enter": "Enter",
  "mfa.wrongCode": "Invalid verification code",
  "mfa.resendFailure": "Verification code failed to send",
  "addGroupMembers.addGroupMembersTitle": "Add users to a group",
  "addGroupMembers.saveUsers": "Save Users",
  "addGroupMembers.selectExistingUserMsg": "Or, select existing users from the system",
  "addGroupMembers.enterEmail": "Enter an email address to invite new users",
  "addGroupMembers.addTo": "Add to",
  "addGroupMembers.noAvailableUsers": "No available users.",
  "addGroupsToUser.title": "Add groups",
  "addGroupsToUser.instructions": "Select from the list below to add {{name}} to a new group.",
  "addGroupsToUser.noAvailableGroups": "No available groups.",
  "addGroupsToUser.NotifyInvitationSent": "{{name}} group membership updated",
  "events.filterBar.search": "Search",
  "events.filterBar.from": "From",
  "events.filterBar.to": "To",
  "events.filterBar.category": "Category",
  "events.filterBar.action": "Action",
  "events.filterBar.source": "Source",
  "events.filterBar.filterByZone": "Filter by Zone",
  "events.filterBar.clearFiltres": "Clear filters",
  "events.filterBar.apply": "Apply",
  "events.filterBar.filter": "Filter",
  "events.filterBar.events": "events",
  "events.table.loading": "Loading more rows...",
  "events.detail.header": "Location Modification",
  "events.detail.date": "Date",
  "events.detail.time": "Time",
  "events.detail.source": "Source",
  "events.detail.object": "Object",
  "events.detail.affectedLocation": "Affected Location",
  "events.detail.eventID": "Event ID",
  "events.detail.parameters.before": "Before",
  "events.detail.parameters.after": "After",
  "events.detail.parameters.content": "Content",
  "events.detail.parameters.parameter": "Parameter",
  "events.table.header.object": "Object",
  "events.table.header.action": "Action",
  "events.table.header.time": "Time",
  "events.table.header.source": "Source",
  "events.table.header.category": "Category",
  "events.table.header.location": "Affected Location",
  "events.table.header.parameters": "Parameters",
  "site.edit": "Edit",
  "site.sort": "Sort",
  "site.showAll": "Show All",
  "site.hideAll": "Hide All",
  "site.sortByDefault": "By default order",
  "site.sortAlphabetically": "Alphabetically A-Z",
  "site.sortReverseAlphabetically": "Alphabetically Z-A",
  "site.newLocation": "New location",
  "site.newZone": "New zone",
  "site.arrangeSiteTree": "Arrange site tree",
  "site.measurementType": "Measurement type",
  "site.unit": "Unit",
  "site.decimalPlace": "Decimal place",
  "site.nameCannotBeEmpty": "Name cannot be empty",
  "site.characterMaxLengthError": "Maximum {{charLen}} characters",
  "site.measurementTypeCannotBeEmpty": "Measurement type cannot be empty",
  "site.unitTypeCannotBeEmpty": "Unit cannot be empty",
  "site.nameConnotmatchParent": "Zone name cannot match the parent zone",
  "site.nameConnotmatchChild": "Zone name cannot match the child zone",
  "site.nameConnotmatchSiblingName": "A zone/location with that name already exists under {{parentName}}",
  "site.decimalPlaceCannotBeEmpty": "Decimal place cannot be empty",
  "site.parentZone": "Parent zone",
  "site.editZone": "Edit zone",
  "site.editSite": "Edit site",
  "site.editLocation": "Edit location",
  "site.emptySearchResult": "No location or zones matches your search criteria",
  "site.noSiteRights": "No rights to view this site",
  "site.emptyEditTree": 'There is nothing in this site yet. Click the "Edit" button above to start adding zones and locations.',
  "site.emptyHeader": "Welcome to viewLinc Cloud",
  "site.emptyBody": "To begin setting up your Site, add some Locations and Zones to the Site on the left.",
  "site.emptyTourLink": "Watch the tour!",
  "site.emptyZoneHeading": "Empty Zone",
  "site.deleteZone": "Delete zone",
  "site.deleteLocation": "Delete location",
  "site.deleteZoneMsg": "Zones cannot be deleted while they contain items",
  "site.deleteLocationMsg": "Locations cannot be deleted after they have recorded data",
  "site.deleteZonesAlert": 'Delete zone "{{nodeName}}" from the system.\r\n This action cannot be undone.',
  "site.deleteLocationsAlert": 'Delete location "{{nodeName}}" from the system.\r\n This action cannot be undone.',
  "site.editSelectedItem": "Edit selected item",
  "site.active": "Active",
  "site.inactive": "Inactive",
  "site.linkedDataSource": "Linked data source",
  "site.noLinkedSource": "No linked source",
  "site.noLinkedSourceMsg": "To monitor data at this location, you must link it to one of your data sources by clicking the edit button.",
  "site.alarmSettings": "Alarm setting",
  "site.pauseAlarms": "Pause alarms",
  "site.ThreshholdAlaramSettings": "Threshold alarm settings",
  "site.deviceAlarmSettings": "Device alarm settings",
  "site.online": "Online",
  "site.status": "Status",
  "site.alarms": "Alarms",
  "site.settings": "Settings",
  "site.rights": "Rights",
  "site.statusDetailSettings": "Go to settings to manage location",
  "site.statusLastMeasurement": "Last measurement",
  "site.statusThreshold": "Threshold status",
  "site.statusThresholdNotSet": "No set threshold",
  "site.statusThresholdNoData": "No data",
  "site.statusThresholdUnknown": "Unknown",
  "site.statusThresholdWithinTolerance": "Within tolerance",
  "site.statusDevice": "Device status",
  "site.statusDeviceUnlinked": "Unlinked",
  "site.statusDeviceOk": "Ok",
  "site.statusDeviceMissedConnection": "Missed connection",
  "site.statusDeviceOffline": "Offline",
  "site.statusLocationOk": "Ok",
  "site.statusLocationNoDataSource": "No linked data source",
  "site.statusLocationDeactivated": "Location deactivated",
  "site.settingsLocationNoDataSource": "No data source",
  "site.settingsThresholdAlarmsSet": "Set",
  "site.settingsAlarmsPaused": "Alarms paused",
  "site.settingsDeviceAlarmsSet": "Set",
  "site.settingsDeviceAlarmsNotSet": "No device alarms",
  "site.settingsDeviceAlarmsDefault": "Default",
  "site.celsius": "Celsius (\xB0C)",
  "site.fahrenheit": "Fahrenheit (\xB0F)",
  "site.rh": "%RH",
  "site.percent": "Percent (%)",
  "site.partsPerMillion": "Parts per million (PPM)",
  "site.notifySiteEdited": "Site edited: {{siteName}}",
  "site.notifySiteEditFailed": "Error, the site {{siteName}} could not be edited",
  "site.notifyZoneEdited": "Zone edited: {{zoneName}}",
  "site.notifyZoneEditFailed": "Error, the zone {{zoneName}} could not be edited",
  "site.notifyLocationEdited": "Location edited: {{locationName}}",
  "site.notifyLocationEditFailed": "Error, the location {{locationName}} could not be edited",
  "site.notifySiteCreated": "Site created: {{siteName}}",
  "site.notifySiteCreateFailed": "Error, the site {{siteName}} could not be created",
  "site.notifyZoneCreated": "Zone created: {{zoneName}}",
  "site.notifyZoneCreateFailed": "Error, the zone {{zoneName}} could not be created",
  "site.notifyLocationCreated": "Location created: {{locationName}}",
  "site.notifyLocationCreateFailed": "Error, the location {{locationName}} could not be created",
  "site.notifySiteDeleted": "Site deleted: {{siteName}}",
  "site.notifySiteDeleteFailed": "Error, the site {{siteName}} could not be deleted",
  "site.notifyZoneDeleted": "Zone deleted: {{zoneName}}",
  "site.notifyZoneDeleteFailed": "Error, the zone {{zoneName}} could not be deleted",
  "site.notifyLocationDeleted": "Location deleted: {{locationName}}",
  "site.notifyLocationDeleteFailed": "Error, the location {{locationName}} could not be deleted",
  "site.notifyMoveFailed": "Error the {{type}} {{name}} could not be moved",
  "site.rearrangeSiteMessage": "Arrange site tree. Moving locations may change other user's rights to view them.",
  "site.notifyLocationLinkSuccess": "{{locationName}} linked to data source {{dataSource}}.",
  "site.notifyLocationLinkFailed": "Error linking {{locationName}} linked to data source, please try again.",
  "site.notifyLocationUnlinkSuccess": "{{locationName}} unlinked from data source {{dataSource}}.",
  "site.notifyLocationUnlinkFailed": "Error unlinking {{locationName}} from data source {{dataSource}}, please try again.",
  "linkDataSourceDialog.title": "Edit linked data source",
  "linkDataSourceDialog.blurb": "Select from the available compatible data sources in the list below to start saving measurement data to this location.",
  "linkDataSourceDialog.emptyHeader": "No available data sources.",
  "linkDataSourceDialog.emptyDescription": "All compatible data sources are either currently in use or inactive.",
  "linkDataSourceDialog.errorLoadingResults": "Unable to fetch data sources. Please try again.",
  "linkDataSourceDialog.linkDataSourceMessage": "Data source will be linked to this location",
  "linkDataSourceDialog.initialDataSourceMessage": "Currently linked to this location",
  "linkDataSourceDialog.unlinkDataSourceMessage": "Data source will be unlinked from this location",
  "linkDataSourceConfirmationModal.title": "Confirm new data source",
  "unlinkDataSourceConfirmationModal.title": "Unlink data source",
  "unlinkDataSourceConfirmationModal.toBeLinked": "Data source to be unlinked",
  "linkDataSourceConfirmationModal.message": "Data will start saving to the location on confirm.",
  "unlinkDataSourceConfirmationModal.message": "Data will no longer save to this location on confirm.",
  "groupsRightsDialog.header": "Edit site rights",
  "groupsRightsDialog.note": "Click to select which rights are granted to this group in each part of the system",
  "groupsRights.title": "Maintenance team",
  "groupsRights.hasRights": "Has some rights",
  "groupsRights.noRights": "Has no rights",
  "reports.reportLocations": "Report locations",
  "reports.locations": "locations",
  "reports.select": "Select",
  "reports.nothingSelected": "Nothing Selected",
  "reports.emptyLocationsNote": "To add locations to the report, select some using the button above.",
  "reports.filterBar.report": "Report",
  "reports.filterBar.24hr": "24 hr",
  "reports.filterBar.1week": "1 week",
  "reports.filterBar.1month": "1 month",
  "reports.table.header.location": "Location",
  "reports.table.header.unit": "Unit",
  "reports.table.header.mostRecent": "Most recent",
  "reports.table.header.average": "Average",
  "reports.table.header.minimum": "Minimum",
  "reports.table.header.maximum": "Maximum",
  "reports.graph": "Graph",
  "reports.statistics": "Statistics",
  "reports.selectLocationToAddToReport": "Select location to add to a report",
  "reports.locationsSelected": "locations selected",
  "reports.lowerThanMaxLocationsInfoText": "Graphs can show {{max}} locations at a time. All selected locations will still be part of any report generated.",
  "reports.greaterThanMaxLocationsInfoText": "Graphs can show {{max}} locations at a time, so some locations will be hidden. All selected locations will still be part of any report generated.",
  noResults: "No results",
  "reports.showingNumLocations": "Showing {{visible}} of {{total}} locations",
  "deviceManager.tab.title.status": "Status",
  "deviceManager.tab.title.links": "Links",
  "deviceManager.tab.title.properties": "Properties",
  "deviceManager.heading": "Devices and Hosts",
  "deviceManager.filter.device": "Filter By Device",
  "deviceManager.filter.status": "Filter By Status",
  "deviceManager.filter.sort": "Sort",
  "deviceManager.device": "Device",
  "deviceManager.device_plural": "Devices",
  "deviceManager.filter.option.all": "All",
  "deviceManager.filter.option.connected": "Connected",
  "deviceManager.filter.option.deviceAlarm": "Device alarm",
  "deviceManager.filter.option.newDevice": "New Device",
  "deviceManager.filter.option.offline": "Offline",
  "deviceManager.filter.option.onlyInactive": "Only inactive",
  "deviceManager.filter.option.onlyActive": "Only active",
  "deviceManager.filter.option.retrievingData": "Retrieving data",
  "deviceManager.filter.option.recentlyAdded": "Recently added",
  "deviceManager.filter.option.ascending": "Serial number ascending",
  "deviceManager.filter.option.descending": "Serial number descending",
  "deviceManager.noDevices.list": "When your company purchases {{appName}} compatible devices, they will automatically appear here",
  "deviceManager.noDevices.heading": "No devices yet",
  "deviceManager.errorLoadingResults": "Unable to fetch devices. Please try again.",
  "deviceManager.status.newDevice": "New device",
  temperature: "Temperature",
  humidity: "Humidity",
  carbonDioxide: "Carbon Dioxide",
  "reports.generateReport": "Generate report",
  "reports.generate": "Generate",
  "reports.include": "Include",
  "reports.aboutReporting": "About reporting",
  "reports.title": "Title",
  "reports.maxTitleError": "Must not exceed {{max}} character",
  "reports.selectPlaceholder": "Select...",
  "reports.dateRange": "Date range",
  "reports.notifyWhenReportReady": "Notify me by email when my report is ready",
  "reports.noIntervals": "No intervals",
  "reports.minuteInterval": "{{count}} minute",
  "reports.minuteInterval_plural": "{{count}} minutes",
  "reports.estimatedPageCount": "Estimated page count",
  "reports.pagesCount": "{{num}} pages",
  "reports.locationsSummaryTable": "Locations summary table",
  "reports.graphsByThreshold": "Graphs by threshold",
  "reports.statisticsSummary": "Statistics summary",
  "reports.alarms": "Alarms",
  "reports.dataTable": "Data table",
  "reports.whatIsIncluded": "What is included",
  "reports.isBeingGenerated": "Your report is being generated",
  "reports.linkWillBeEmailed": "A link to download your report will be emailed to you when it is ready.",
  "reports.mayTakeFewMinutes": "It may take a few minutes to arrive.",
  "reports.generalDownloadingError": "An Error happened while downloading your report",
  "infotip.rights.heading": "Apply rights to specific zones by checking or un-checking each right.",
  "infotip.rights.checked": "The right is applied to this zone and all sub-zones. New sub-zones will have this right.",
  "infotip.rights.notChecked": "The right is not applied to this zone or a sub-zone. New sub-zones will not have this right.",
  "infotip.rights.partial": "The right is not applied to this zone, but has been applied to at least one sub-zone. New sub-zones will not have this right.",
  "infotip.rights.inverted": "The right is applied to this zone, but has been removed from one or more sub-zones. New sub-zones will have this right.",
  "infotip.rights.para1": "Locations inherit the rights of their zone.",
  "infotip.cannotRemoveSelfFromAdminPara1": "To prevent creation of systems with no administrators, you cannot remove yourself from the system administrators group.",
  "infotip.cannotRemoveSelfFromAdminPara2": "If you wish to be removed, another member of the System Administrators can remove you.",
  "infotip.emailInput": "Separate email addresses with a comma to invite multiple people at once.",
  "infotip.pin": "A PIN allows you to quickly sign into viewLinc when you receive alarm notifications.",
  "infotip.linkDataSource": "Data sources are the individual measurements coming from a device on a system. A device must be transmitting data to {{appName}} in order to be identified as a data source. Only one data source can be linked to each location.",
  toBeRemoved: "Everything below this are no longer in use but are needed for prod environment until changes are merged",
  "changePassword.confirmNewPasswordLabel": "Confirm new password",
  "groupsRights.note": "Click to select which right are granted to this group in each part of the system",
  "profile.byNumberOfUsers": "By number of users",
  "auth.firstLoginInvalidUserCredentialError": "First login invalid user credentials",
  "mfa.invalidCode": "invalid verification code",
  "mfa.resendFail": "Resending the code failed",
  "site.emptyTree": 'There is nothing in this site yet. Click the "New" button above to start adding zones and locations.',
  "site.characterLengthError": "Too many characters",
  "site.nameConnotmatchSibling": "A zone with that name already exists under {{parentName}}",
  "site.temperature": "Temeprature",
  "site.relativeHumidity": "Relative humidity",
  "site.co2": "CO\u2082",
  "site.celcius": "Celsius (\xB0C)",
  "site.farenheit": "Fahrenheit (\xB0F)",
  "deviceManager.serach.placeholder": "Search",
  "deviceManager.dataSources": "Data sources",
  "deviceManager.devices": "Devices",
  "auth.checkEmailBody": "If the address you entered is associated with your Vaisala viewLinc account, you will receive an email from us with instructions on how to reset your password.",
  "password.passwordHelpTextBlurb": "Use a strong password. Strong passwords include numbers, letters, and special characters. The minimum password length is {{length}} characters.",
  "password.passwordHelpText": "Password must include:",
  "password.passwordHelpCharacterLengthRequirement": "The minimum password length is {{length}} characters.",
  "password.passwordHelpMaxCharacterLengthRequirement": "The maximum password length is {{length}} characters.",
  "password.passwordHelpLowerCaseRequirement": "A lower case letter",
  "password.passwordHelpUpperCaseRequirement": "An upper case letter",
  "password.passwordHelpNumberRequirement": "A number",
  "password.passwordHelpSpecialCharRequirement": "A special character",
  "site.partsPerMilion": "Parts per milion (PPM)",
  "site.statusTreshold": "Treshold status",
  "deviceManager.dataSource": "Data Source",
  "deviceManager.dataSource_plural": "Data Sources",
  "deviceManager.list.dataSource": "Data source",
  "deviceManager.list.dataSource_plural": "Data sources"
};

// ../vlncc-frontend/src/i18n.ts
import Backend from "i18next-chained-backend";
import resourcesToBackend from "i18next-resources-to-backend";

// ../vlncc-frontend/src/constants.tsx
import { IconName } from "@vaisala-rockhopper/components";
import { VaiColor, VaiIcon } from "@vaisala-rockhopper/design-tokens";

// ../vlncc-frontend/src/tests/testids.ts
var TEST_IDS = {
  edit_zone_and_location_dialog_save_button: "edit_zone_and_location_dialog_save_button",
  edit_zone_and_location_dialog_name_field: "edit_zone_and_location_dialog_name_field",
  edit_zone_and_location_dialog_unit_field: "edit_zone_and_location_dialog_unit_field",
  edit_zone_and_location_dialog_decimal_places_field: "edit_zone_and_location_dialog_decimal_places_field",
  edit_zone_and_location_dialog_description_field: "edit_zone_and_location_dialog_description_field",
  edit_zone_and_location_dialog_measurement_type_field: "edit_zone_and_location_dialog_measurement_type_field",
  edit_zone_and_location_dialog_delete_button: "edit_zone_and_location_dialog_delete_button",
  device_manager_device_list: "device-list",
  device_manager_device_list_item: "device-list-item",
  device_manager_device_list_item_nickname: "device-list-item-nickname",
  device_manager_device_list_item_img_wrapper: "device-list-item-img-wrapper",
  device_manager_device_list_item_img: "device-list-item-img",
  device_manager_device_list_item_device_status_icon: "device-list-item-status-icon",
  device_manager_device_list_item_device_status_icon_wrapper: "device-list-item-status-icon-wrapper",
  device_manager_device_list_item_device_or_host_text: "device-list-item-device-or-host-text",
  device_manager_device_list_item_status_label: "device-list-item-status-label",
  location_display: "location-display",
  location_status_value: "status-value",
  location_icon: "location-icon",
  location_icon_unlink: "location-icon-unlink",
  location_icon_link: "location-icon-link",
  site_settings_link_button: "site-settings-link-button",
  site_tree_form_dialog: "site_tree_form_dialog",
  site_tree_form_dialog_name_field: "site_tree_form_dialog_name_field",
  site_tree_form_dialog_description_field: "site_tree_form_dialog_description_field",
  site_tree_form_dialog_unitType_field: "site_tree_form_dialog_unitType_field",
  site_tree_form_dialog_measurementType_field: "site_tree_form_dialog_measurementType_field",
  site_tree_form_dialog_decimal_places_field: "site_tree_form_dialog_decimal_places_field",
  site_tree_form_dialog_save_button: "site_tree_form_dialog_save_button",
  site_tree_form_dialog_delete_button: "site_tree_form_dialog_delete_button",
  site_tree_form_dialog_parent_zone: "site_tree_form_dialog_parent_zone",
  site_tree_form_dialog_parent_zone_name: "site_tree_form_dialog_parent_zone_name",
  events_filter_bar_clear_filters_button: "events_filter_bar_clear_filters_button",
  events_filter_bar_apply_filters_button: "events_filter_bar_apply_filters_button",
  events_filter_bar_search_field_input: "events_filter_bar_search_field_input",
  events_filter_bar_category_field_select: "events_filter_bar_category_field_select",
  events_filter_bar_action_field_select: "events_filter_bar_action_field_select",
  events_filter_bar_source_field_select: "events_filter_bar_source_field_select",
  link_data_source_dialog_location_title: "link-data-source-dialog-location-title",
  link_data_source_dialog_blurb: "link-data-source-dialog-blurb",
  link_data_source_dialog_infotip: "link-data-source-dialog-infotip",
  link_data_source_dialog_search_input: "link-data-source-dialog-search-input",
  link_data_source_dialog_search_input_icon: "link-data-source-dialog-search-input-icon",
  data_source_list_container: "link-data-source-dialog-data-source-list-container",
  data_source_list: "data-source-list",
  data_source_list_item_container: "data-source-list-item-container",
  data_source_list_item_radio: "data-source-list-item-radio",
  data_source_list_item_latest_meas: "data-source-list-item-latest-meas",
  data_source_list_item_symbol: "data-source-list-item-symbol",
  device_icon: "device-icon",
  device_id: "device-id",
  probe_id: "probe-id",
  status_msg_icon: "status-msg-icon",
  list_error_container: "list-error-container",
  list_error_text_container: "list-error-text-container",
  list_error_icon: "list-error-icon",
  list_error_text: "list-error-text",
  list_error_refresh_button_container: "list-error-refresh-button-container",
  list_error_refresh_button: "list-error-refresh-button",
  infotip_popover: "infotip-popover",
  infotip_icon: "infotip-icon",
  measurement_icon: "measurement-icon",
  link_data_source_confirmation_modal_location_title: "link-data-source-confirmation-modal-location-title",
  link_data_source_confirmation_modal_data_source_title: "link-data-source-confirmation-modal-data-source-title",
  link_data_source_confirmation_modal_data_source_old_title: "link-data-source-confirmation-modal-data-source-old-title",
  link_data_source_confirmation_modal_probe_id: "link-data-source-confirmation-modal-probe-id",
  link_data_source_confirmation_modal_device_id: "link-data-source-confirmation-modal-device-id",
  link_data_source_confirmation_modal_old_probe_id: "link-data-source-confirmation-modal-old-probe-id",
  link_data_source_confirmation_modal_old_device_id: "link-data-source-confirmation-modal-old-device-id",
  link_data_source_confirmation_modal_message: "link-data-source-confirmation-modal-message",
  sidebar_help: "sidebar-help",
  sidebar_help_icon: "sidebar-help-icon",
  sidebar_help_drawer: "sidebar-help-drawer",
  sidebar_help_content_wrapper: "sidebar-help-content-wrapper",
  sidebar_help_empty: "sidebar-help-empty",
  sidebar_current_route: "sidebar-current-route",
  user_menu: "user-menu",
  user_menu_item: "user-menu-item",
  tours_dropdown: "tours-dropdown",
  full_page_spinner: "full-page-spinner",
  groups_rights_accordion_$NAME: `groups-rights-accordion-`,
  groups_rights_accordion_title_$NAME: `groups-rights-accordion-title-`,
  groups_rights_accordion_checkbox: "groups_rights_accordion_checkbox",
  groups_add_group_member_button: "groups_add_group_member_button",
  groups_add_group_member_dialog: "groups_add_group_member_dialog",
  groups_add_group_member_dialog_group_name: "groups_add_group_member_dialog_group_name",
  tag_input: "tag_input",
  tag_input_field: "tag_input_field",
  tag_input_list_item: "tag_input_list_item",
  groups_add_group_member_dialog_search_field: "groups_add_group_member_dialog_search_field",
  groups_add_group_member_dialog_save_button: "groups_add_group_member_dialog_save_button",
  groups_add_group_member_dialog_cancel_button: "groups_add_group_member_dialog_cancel_button",
  groups_add_group_member_dialog_users_list_item: "groups_add_group_member_dialog_users_list_item",
  groups_add_group_member_dialog_header: "groups_add_group_member_dialog_header",
  users_add_to_group: "users_add_to_group",
  users_add_to_group_dialog_save: "users_add_to_group_dialog_save",
  users_add_to_group_dialog_cancel: "users_add_to_group_dialog_cancel",
  users_add_to_group_dialog_search_field: "users_add_to_group_dialog_search_field",
  users_add_to_group_dialog_users_list_item: "users_add_to_group_dialog_users_list_item",
  users_add_to_group_dialog_user_name: "users_add_to_group_dialog_user_name",
  users_add_to_group_dialog_users_list_item_group_name: "users_add_to_group_dialog_users_list_item_group_name",
  group_list_item_edit_button: "group_list_item_edit_button",
  group_list_row: "group_list_row",
  group_delete_dialog: "group_delete_dialog",
  group_delete_dialog_confirm: "group_delete_dialog_confirm",
  group_edit_dialog: "group_edit_dialog",
  groups_edit_group_button: "groups_edit_group_button",
  group_edit_dialog_save_buton: "group_edit_dialog_save_buton",
  group_edit_dialog_delete_button: "group_edit_dialog_delete_button"
};

// ../vlncc-frontend/src/constants.tsx
var PRODUCT_NAME = "viewLinc Cloud";
var EnvStage = {
  PROD: "prod",
  STAGING: "staging",
  QA: "qa",
  DEV: "dev",
  SANDBOX: "sandbox"
};
var { ENV_POINT = "" } = "development";
var API_TENANT_MANAGEMENT_BASE_URI = process.env.REACT_APP_VLNCC_TENANT_MANAGEMENT_ENDPOINT;
var API_USER_MANAGEMENT_BASE_URI = process.env.REACT_APP_API_USER_MANAGEMENT_ENDPOINT;
var API_EVENTS_SERVICE_BASE_URI = process.env.REACT_APP_API_EVENTS_SERVICE_ENDPOINT;
var API_SITE_MANAGEMENT_BASE_URI = process.env.REACT_APP_API_SITE_MANAGEMENT_ENDPOINT;
var API_MEASUREMENTS_BASE_URI = process.env.REACT_APP_API_REPORTS_MEASUREMENTS_ENDPOINT;
var API_REPORTS_BASE_URI = process.env.REACT_APP_API_REPORTS_ENDPOINT;
var API_DEVICE_BASE_URI = process.env.REACT_APP_API_DEVICES_ENDPOINT;
var APP_S3_HOST_VIEWLINC = process.env.REACT_APP_STAGE == EnvStage.DEV ? process.env.REACT_APP_S3_HOST_VIEWLINC_DEV : process.env.REACT_APP_STAGE == EnvStage.QA ? process.env.REACT_APP_S3_HOST_VIEWLINC_QA : process.env.REACT_APP_STAGE == EnvStage.PROD ? process.env.REACT_APP_S3_HOST_VIEWLINC_PROD : process.env.REACT_APP_STAGE == EnvStage.STAGING ? process.env.REACT_APP_S3_HOST_VIEWLINC_STAGING : process.env.REACT_APP_S3_HOST_VIEWLINC_SANDBOX;
var APP_Version = process.env.REACT_APP_VLNCC_VERSION;
var NETWORK_ERROR = "NetworkError";
var APP_NAME = "viewLinc";
var APP_NAME_FULL = `${APP_NAME} Cloud`;
var LS_REGION = "region";
var LS_USER_POOL_ID = "userPoolId";
var LS_USER_POOL_WEB_CLIENT_ID = "userPoolWebClientId";
var LS_COMPANY_ALIAS = "companyAlias";
var LS_IS_COMPANY_ACTIVE = "isCompanyActive";
var LS_COMPANY_ONBOARD = "companyOnboard";
var LS_COMPANY_ADDRESS = "companyAddress";
var LS_COMPANY_NAME = "companyName";
var LS_COMPANY_ACCOUNT_ID = "companyAcountId";
var LS_COMPANY_CUSTOMER_ID = "companyCustomerId";
var LS_DATA_RETENTION_MONTHS = "dataRetentionMonths";
var LS_COMPANY_PROFILE_COMPLETION_FLAG = "profileComplitionFlag";
var LS_TIME_ZONE = "timeZone";
var LS_LOCALE = "locale";
var LS_USERNAME = "username";
var DEFAULT_LANGUAGE = "en-US";
var UserSettings = /* @__PURE__ */ ((UserSettings2) => {
  UserSettings2["GROUP_LIST_SORTING"] = "userSettings.groupListSorting";
  UserSettings2["GROUP_LIST_SHOW_INACTIVE"] = "userSettings.groupListShowInactive";
  UserSettings2["USER_LIST_SORTING"] = "userSettings.userListSorting";
  UserSettings2["USER_LIST_SHOW_INACTIVE"] = "userSettings.userListShowInactive";
  return UserSettings2;
})(UserSettings || {});
var API_PROFILE_INCLUDE_GROUP_PARAM = "include_groups=true";
var API_INCLUDE_RIGHT_PARAM = "include_rights=true";
var PASSWORD_MIN_SCORE = 3;
var PASSWORD_MIN_LENGTH = 10;
var PASSWORD_MAX_LENGTH = 256;
var NAME_MAX_LENGTH = 50;
var PIN_MIN_LENGTH = 4;
var PIN_MAX_LENGTH = 6;
var USERNAME_MAX_CHARACTERS_LENGTH = 320;
var COMPANY_NAME_MAX_CHARACTERS_LENGTH = 30;
var COMPANY_NAME_MIN_CHARACTERS_LENGTH = 2;
var GROUP_NAME_MIN_CHARACHTERS_LENGTH = 2;
var GROUP_NAME_MAX_CHARACHTERS_LENGTH = 128;
var GROUP_DESCRIPTION_MAX_CHARACHTERS_LENGTH = 256;
var MFA_LENGTH = 6;
var SITE_NAME_MAX_LENGTH = 128;
var SITE_DESCRIPTION_MAX_LENGTH = 256;
var HUNDRED_PCT = "100%";
var FIELD_VALIDATIONS_CONFIG = {
  COMPANY_NAME: {
    MAX_LENGTH: COMPANY_NAME_MAX_CHARACTERS_LENGTH,
    MIN_LENGTH: COMPANY_NAME_MIN_CHARACTERS_LENGTH
  },
  USER_NAME: {
    MAX_LENGTH: USERNAME_MAX_CHARACTERS_LENGTH
  },
  PASSWORD: {
    MAX_LENGTH: PASSWORD_MAX_LENGTH,
    MIN_LENGTH: PASSWORD_MIN_LENGTH
  }
};
var SIDEBAR_WIDTH = "300px";
var SIDEBAR_ANCHOR = "Right";
var ROOT_LEVEL_NAME = "home";
var FEEDBACK_URL = "https://forms.office.com/Pages/ResponsePage.aspx?id=4JNzbfVBLkybEkwr5dpcV5tk0RK6_QVLs1QSfb2xdUJUMVEzNEdUSlpMWkYwR1A1UjZPWkkxVEJDWS4u";
var IDLE_MINUTES = 15;
var IDLE_TIMEOUT = 1e3 * 60 * IDLE_MINUTES;
var IDLE_TIMER_DEBOUNCING = 500;
var NOTIFICATION_DEFAULT_DURATION = 4e3;
var INVITE_USER_FROM_GROUP = "group";
var INVITE_USER_FROM_USER = "user";
var ADD_GROUP_TO_USER = "addGroup";
var EXTRA_LARGE_SCREEN_SIZE_IN_PX = 1536;
var LARGE_SCREEN_IN_PX = 1200;
var MEDIUM_SCREEN_SIZE_IN_PX = 900;
var SMALL_SCREEN_SIZE_IN_PX = 600;
var SCREEN_WIDTH_BREAK_POINT = /* @__PURE__ */ ((SCREEN_WIDTH_BREAK_POINT2) => {
  SCREEN_WIDTH_BREAK_POINT2[SCREEN_WIDTH_BREAK_POINT2["SM"] = SMALL_SCREEN_SIZE_IN_PX] = "SM";
  SCREEN_WIDTH_BREAK_POINT2[SCREEN_WIDTH_BREAK_POINT2["MD"] = MEDIUM_SCREEN_SIZE_IN_PX] = "MD";
  SCREEN_WIDTH_BREAK_POINT2[SCREEN_WIDTH_BREAK_POINT2["LG"] = LARGE_SCREEN_IN_PX] = "LG";
  SCREEN_WIDTH_BREAK_POINT2[SCREEN_WIDTH_BREAK_POINT2["XL"] = EXTRA_LARGE_SCREEN_SIZE_IN_PX] = "XL";
  return SCREEN_WIDTH_BREAK_POINT2;
})(SCREEN_WIDTH_BREAK_POINT || {});
var DEVICE_TYPE = /* @__PURE__ */ ((DEVICE_TYPE2) => {
  DEVICE_TYPE2[DEVICE_TYPE2["LARGE_DESKTOP"] = EXTRA_LARGE_SCREEN_SIZE_IN_PX] = "LARGE_DESKTOP";
  DEVICE_TYPE2[DEVICE_TYPE2["SMALL_DESKTOP"] = LARGE_SCREEN_IN_PX] = "SMALL_DESKTOP";
  DEVICE_TYPE2[DEVICE_TYPE2["MOBILE_TABS"] = MEDIUM_SCREEN_SIZE_IN_PX] = "MOBILE_TABS";
  DEVICE_TYPE2[DEVICE_TYPE2["MOBILE_PHONE"] = SMALL_SCREEN_SIZE_IN_PX] = "MOBILE_PHONE";
  return DEVICE_TYPE2;
})(DEVICE_TYPE || {});
var EVENTS_TABLE_ROWS_COUNT = 50;
var SITE_ZONES_ACCESS_KEYS = /* @__PURE__ */ ((SITE_ZONES_ACCESS_KEYS2) => {
  SITE_ZONES_ACCESS_KEYS2["SITE"] = "SITE";
  SITE_ZONES_ACCESS_KEYS2["ZONE"] = "ZONE";
  SITE_ZONES_ACCESS_KEYS2["LOC"] = "LOC";
  SITE_ZONES_ACCESS_KEYS2["HAS_RIGHT"] = "HAS_RIGHT";
  SITE_ZONES_ACCESS_KEYS2["MANAGE"] = "MANAGE";
  SITE_ZONES_ACCESS_KEYS2["VIEW_NON_INHERITABLE"] = "VIEW_NON_INHERITABLE";
  SITE_ZONES_ACCESS_KEYS2["VIEW"] = "VIEW";
  SITE_ZONES_ACCESS_KEYS2["ACKNOWLEDGE_ALARMS"] = "ACKNOWLEDGE_ALARMS";
  SITE_ZONES_ACCESS_KEYS2["LINK_ALARMS"] = "LINK_ALARMS";
  SITE_ZONES_ACCESS_KEYS2["COMMENT_DATA"] = "COMMENT_DATA";
  SITE_ZONES_ACCESS_KEYS2["COMMENT_ALARMS"] = "COMMENT_ALARMS";
  SITE_ZONES_ACCESS_KEYS2["PAUSE_ALARMS"] = "PAUSE_ALARMS";
  SITE_ZONES_ACCESS_KEYS2["MANAGE_ALARM_TEMPLATES"] = "MANAGE_ALARM_TEMPLATES";
  SITE_ZONES_ACCESS_KEYS2["MANAGE_DEVICES"] = "MANAGE_DEVICES";
  SITE_ZONES_ACCESS_KEYS2["MANAGE_EVENTS"] = "MANAGE_EVENTS";
  SITE_ZONES_ACCESS_KEYS2["MANAGE_PREFERENCES"] = "MANAGE_PREFERENCES";
  SITE_ZONES_ACCESS_KEYS2["MANAGE_REPORTS"] = "MANAGE_REPORTS";
  SITE_ZONES_ACCESS_KEYS2["MANAGE_SITES"] = "MANAGE_SITES";
  SITE_ZONES_ACCESS_KEYS2["MANAGE_USERS_GROUPS"] = "MANAGE_USERS_GROUPS";
  return SITE_ZONES_ACCESS_KEYS2;
})(SITE_ZONES_ACCESS_KEYS || {});
var DEFAULTCOUNTRYCODE = "ca";
var DEFAULT_ADMIN_ID = "1";
var SITE_KEY = "SITE";
var ZONE_KEY = "ZONE";
var LOCATION_KEY = "LOC";
var PARENT_SITE_KEY = "ST1";
var TEMP_ID = "temperature";
var CO2_ID = "co2";
var HUMIDITY_ID = "humidity";
var SITE_OR_ZONE_SUBSTRING = ["ZN", "LC"];
var STATUS_TYPES = {
  THRESHOLD: "threshold",
  DEVICE: "device",
  MEASUREMENT: "measurement"
};
var DEVICE_STATUS = {
  UNLINKED: "site.statusDeviceUnlinked",
  OK: "site.statusDeviceOk",
  MISSED_CONNECTION: "site.statusDeviceMissedConnection",
  OFFLINE: "site.statusDeviceOffline"
};
var DEVICE_STATE_TRANSLATION_KEYS = {
  ["NewDevice" /* NewDevice */]: "deviceManager.status.newDevice",
  ["Online" /* Online */]: "site.online",
  ["Offline" /* Offline */]: "site.statusDeviceOffline"
};
var DEVICE_STATE_ICON_INFO = {
  ["NewDevice" /* NewDevice */]: [null, null],
  ["Online" /* Online */]: [null, null],
  ["Offline" /* Offline */]: [IconName.AlertAlarm, VaiColor.AlertAlarm]
};
var LOCATION_STATUS = {
  OK: "site.statusLocationOk",
  NO_DATA_SOURCE: "site.statusLocationNoDataSource",
  DEACTIVATED: "site.statusLocationDeactivated"
};
var THRESHOLD_STATUS = {
  NOT_SET: "site.statusThresholdNotSet",
  NO_DATA: "site.statusThresholdNoData",
  UNKNOWN: "site.statusThresholdUnknown",
  WITHIN: "site.statusThresholdWithinTolerance"
};
var MAX_LOCATIONS_SELECTED = 16;
var filterDeviceOptions = [
  { label: "deviceManager.filter.option.all", value: "ALL" /* ALL */ },
  { label: "AP10", value: "AP10" /* AP10 */ },
  { label: "RFL", value: "RFL" /* RFL */ }
];
var filterStatusOptions = [
  { label: "deviceManager.filter.option.all", value: "ALL" /* ALL */ },
  { label: "deviceManager.filter.option.connected", value: "connected" /* CONNECTED */ },
  { label: "deviceManager.filter.option.deviceAlarm", value: "device_alarm" /* DEVICE_ALARM */ },
  { label: "deviceManager.filter.option.newDevice", value: "new_device" /* NEW_DEVICE */ },
  { label: "deviceManager.filter.option.offline", value: "offline" /* OFFLINE */ },
  { label: "deviceManager.filter.option.onlyInactive", value: "inactive" /* INACTIVE */ },
  { label: "deviceManager.filter.option.onlyActive", value: "active" /* ACTIVE */ },
  { label: "deviceManager.filter.option.retrievingData", value: "retrieving_data" /* RETRIEVING_DATA */ }
];
var deviceManagerSortOptions = [
  { label: "deviceManager.filter.option.recentlyAdded", value: "sortByRecently" /* RECENTLY */ },
  { label: "deviceManager.filter.option.ascending", value: "sortBySnoAscending" /* SNO_ASCENDING */ },
  { label: "deviceManager.filter.option.descending", value: "sortBySnoDescending" /* SNO_DESCENDING */ }
];
var CHART_SERIES_COLORS = [
  VaiColor.ChartPrimary1,
  VaiColor.ChartPrimary2,
  VaiColor.ChartPrimary3,
  VaiColor.ChartPrimary4,
  VaiColor.ChartPrimary5,
  VaiColor.ChartPrimary6,
  VaiColor.ChartPrimary7,
  VaiColor.ChartPrimary8,
  VaiColor.ChartPrimary9,
  VaiColor.ChartPrimary10,
  VaiColor.ChartSecondary1,
  VaiColor.ChartSecondary2,
  VaiColor.ChartSecondary3,
  VaiColor.ChartSecondary4,
  VaiColor.ChartSecondary5,
  VaiColor.ChartSecondary6
];
var CHART_AXES_LABELS = {
  ["celcius" /* CELSIUS */]: "\xB0C",
  ["farenheit" /* FAHRENHEIT */]: "F",
  ["rh" /* HUMIDITY */]: "%RH",
  ["ppm" /* CO2_PPM */]: "PPM",
  ["percent" /* CO2_PERCENT */]: "%CO\u2082"
  // [DEVICES_SYMBOL_ID.CO2]: 'CO²'
};
var CHART_TOOLTIP_UNITS = {
  ["celcius" /* CELSIUS */]: "\xB0C",
  ["farenheit" /* FAHRENHEIT */]: "F",
  ["rh" /* HUMIDITY */]: "%",
  ["ppm" /* CO2_PPM */]: "PPM",
  ["percent" /* CO2_PERCENT */]: "%"
};
var CHART_TOOLTIP_GROUPED_TYPE_TEXT = {
  ["celcius" /* CELSIUS */]: "temperature",
  ["farenheit" /* FAHRENHEIT */]: "temperature",
  ["rh" /* HUMIDITY */]: "humidity",
  ["percent" /* CO2_PERCENT */]: "carbonDioxide",
  ["ppm" /* CO2_PPM */]: "carbonDioxide"
};
var MAX_ESTIMATED_PAGES_ALLOWED = 100;
var MAX_ESTIMATED_PAGES_BEFORE_WARNING = 75;
var MIN_TIME_DURATION_IN_MINUTES = 5;
var MAX_TIME_DURATION_IN_YEARS = 1;
var MEAS_ID_TO_NIMBUS_R = {
  ["temperature" /* TEMPERATURE */]: 10,
  ["humidity" /* HUMIDITY */]: 12,
  ["co2" /* CO2 */]: 31
};
var DATA_TA = "data-ta";
var testWrapperClassNames = {
  rc_select_selector: "rc-select-selector",
  vai_icon__$iconName: "vai-icon--",
  inverted_check: "inverted-check",
  partially: "partially",
  rc_select_item_option: "rc-select-item-option",
  vai_select: "vai-select"
};
var testWrapperConstants = {
  classNames: testWrapperClassNames,
  attributeNames: {
    data_ta: DATA_TA,
    aria_expanded: "aria-expanded"
  },
  selectors: {
    button: "button",
    label: "label",
    checkbox: "input[type='checkbox']",
    checkboxTestIdSelector: `[${DATA_TA}="${TEST_IDS.groups_rights_accordion_checkbox}"]`,
    rc_select_selector: `.${testWrapperClassNames.rc_select_selector}`,
    rc_select_item_option: `.${testWrapperClassNames.rc_select_item_option}`,
    vai_select: `.${testWrapperClassNames.vai_select}`,
    partially: `.${testWrapperClassNames.partially}`,
    inverted_check: `.${testWrapperClassNames.inverted_check}`,
    iconsWithNames: "[class*=vai-icon--]",
    vai_icon__$name: `.${testWrapperClassNames.vai_icon__$iconName}`,
    vai_icon__chveron_down: `.${testWrapperClassNames.vai_icon__$iconName}${VaiIcon.ChevronDown}`,
    vai_icon__chveron_right: `.${testWrapperClassNames.vai_icon__$iconName}${VaiIcon.ChevronRight}`,
    vai_icon__edit: `.${testWrapperClassNames.vai_icon__$iconName}${VaiIcon.Edit}`
  }
};

// ../vlncc-frontend/src/i18n.ts
import FsBackend from "i18next-fs-backend";
var APP_S3_HOST_VIEWLINC2 = "https://language-localization-translations-destination-460561121586.s3.us-west-2.amazonaws.com";
var EN = "en";
var EN_BE = "enBE";
var BE_TRANSLATIONS = "backendTranslations";
var Languages = /* @__PURE__ */ ((Languages5) => {
  Languages5["dede"] = "de-DE";
  Languages5["en"] = "en-US";
  Languages5["esXN"] = "es-XN";
  Languages5["frfr"] = "fr-FR";
  Languages5["itIT"] = "it-IT";
  Languages5["ptBR"] = "pt-BR";
  Languages5["fiFI"] = "fi-FI";
  Languages5["svSE"] = "sv-SE";
  Languages5["zhcn"] = "zh-CN";
  Languages5["jajp"] = "ja-JP";
  return Languages5;
})(Languages || {});
var TranslationsFileNames = /* @__PURE__ */ ((TranslationsFileNames2) => {
  TranslationsFileNames2["de-DE"] = "de-de";
  TranslationsFileNames2["fr-FR"] = "fr-fr";
  TranslationsFileNames2["ja-JP"] = "ja-jp";
  TranslationsFileNames2["zh-CN"] = "zh-cn";
  return TranslationsFileNames2;
})(TranslationsFileNames || {});
var resources = {
  ["en-US" /* en */]: {
    translation: en_default
  }
};
var isValidLanguage = /* @__PURE__ */ __name((lng) => {
  return Object.values(Languages).includes(lng);
}, "isValidLanguage");
var customBackend = {
  type: "backend",
  init: () => {
    return;
  },
  async read(language, _namespace, callback) {
    let translations = {};
    try {
      if (language === "en-US" /* en */) {
        const enTranslationsBe = await fetchLanguage(EN_BE);
        i18n.addResourceBundle("en-US" /* en */, BE_TRANSLATIONS, enTranslationsBe);
        const enTranslations = await fetchLanguage(EN);
        translations = enTranslations;
      } else {
        const otherTranslations = await fetchLanguage(TranslationsFileNames[language] || language);
        translations = otherTranslations;
      }
      callback(null, translations);
    } catch (err) {
      console.error(err);
      callback(err, null);
    }
  }
};
var getInitialLanguage = /* @__PURE__ */ __name(() => {
  const userPreferredLng = localStorage.getItem(LS_LOCALE);
  if (userPreferredLng && isValidLanguage(userPreferredLng)) {
    return userPreferredLng;
  } else {
    return DEFAULT_LANGUAGE;
  }
}, "getInitialLanguage");
i18n.use(Backend).use(initReactI18next).init({
  lng: getInitialLanguage(),
  fallbackLng: DEFAULT_LANGUAGE,
  fallbackNS: BE_TRANSLATIONS,
  react: { useSuspense: true },
  cleanCode: true,
  load: "currentOnly",
  supportedLngs: Object.values(Languages),
  debug: process.env.REACT_APP_STAGE == EnvStage.DEV,
  // debug messages, shows missing keys etc
  // keySeparator: ".", // we use nested keys in form messages.welcome
  backend: {
    backends: [customBackend, resourcesToBackend(resources), FsBackend],
    backendOptions: [
      {
        // placeholder
      },
      {
        loadPath: "./i18n/en.json"
      }
    ]
  },
  interpolation: {
    escapeValue: false
    // react already safes from xss
  }
});
var i18n_default = i18n;
async function fetchLanguage(filename) {
  const folder = [EN, EN_BE].includes(filename) ? "templates" : "translations";
  return await fetch(`${APP_S3_HOST_VIEWLINC2}/${folder}/${filename}.json`).then((res) => res.json()).then((data) => data).catch((err) => {
    throw err;
  });
}
__name(fetchLanguage, "fetchLanguage");

// ../vlncc-frontend/src/store/index.ts
import { configureStore, combineReducers } from "@reduxjs/toolkit";

// ../vlncc-frontend/src/store/general.ts
import { ApplicationTheme } from "@vaisala-rockhopper/components";
var GeneralActionType = {
  CHANGE_LANGUAGE: "GENERAL::CHANGE_LANGUAGE",
  CHANGE_THEME: "GENERAL::CHANGE_THEME"
};
var theme = localStorage.getItem("theme") || ApplicationTheme.Light;
var initialState = {
  theme,
  navigationCollapsed: false,
  language: i18n_default.language
};
var { Light, Dark } = ApplicationTheme;
function generalReducer(state = initialState, action) {
  switch (action.type) {
    case GeneralActionType.CHANGE_LANGUAGE:
      return { ...state, language: action.payload };
    case GeneralActionType.CHANGE_THEME:
      return { ...state, theme: state.theme === Light ? Dark : Light };
    default:
      return state;
  }
}
__name(generalReducer, "generalReducer");
var changeLanguage = /* @__PURE__ */ __name((language) => async (dispatch) => {
  localStorage.setItem(LS_LOCALE, language);
  await i18n_default.changeLanguage(language);
  await dispatch({ type: GeneralActionType.CHANGE_LANGUAGE, payload: language });
}, "changeLanguage");
var changeTheme = /* @__PURE__ */ __name(() => (dispatch) => dispatch({ type: GeneralActionType.CHANGE_THEME }), "changeTheme");
var actionCreators = { changeLanguage, changeTheme };
var selectLanguage = /* @__PURE__ */ __name((state) => state.general.language, "selectLanguage");

// ../vlncc-frontend/src/store/actions/profile.ts
import { Buffer as Buffer2 } from "buffer";
import { Auth as Auth3 } from "aws-amplify";

// ../vlncc-frontend/src/store/actions/actionTypes.ts
var LOGIN = "AUTH::LOGIN";
var LOGIN_ERROR = "AUTH::LOGIN_ERROR";
var LOGIN_SUCCESS = "AUTH::LOGIN_SUCCESS";
var LOGOUT = "AUTH::LOGOUT";
var CHANGING_PASSWORD_START = "AUTH::CHANGING_PASSWORD_START";
var CHANGING_PASSWORD = "AUTH::CHANGING_PASSWORD";
var CHANGING_PASSWORD_SUCCESS = "AUTH::CHANGING_PASSWORD_SUCCESS";
var CHANGING_PASSWORD_FAIL = "AUTH::CHANGING_PASSWORD_FAILED";
var CHANGING_PASSWORD_COMPLETED = "AUTH::CHANGING_PASSWORD_COMPLETED";
var SENDING_RESET_CODE_INIT = "AUTH::SENDING_RESET_CODE_INIT";
var SENDING_RESET_CODE = "AUTH::SENDING_RESET_CODE";
var SENDING_RESET_CODE_SUCCESS = "AUTH::SENDING_RESET_CODE_SUCCESS";
var SENDING_RESET_CODE_FAIL = "AUTH::SENDING_RESET_CODE_FAIL";
var RESETTING_PASSWORD = "AUTH::RESETTING_PASSWORD";
var RESETTING_PASSWORD_SUCCESS = "AUTH::RESETTING_PASSWORD_SUCCESS";
var RESETTING_PASSWORD_FAIL = "AUTH::RESETTING_PASSWORD_FAIL";
var PASSWORD_POLICY_START = "AUTH::PASSWORD_POLICY_START";
var PASSWORD_POLICY_SUCCESS = "AUTH::PASSWORD_POLICY_SUCCESS";
var PASSWORD_POLICY_FAIL = "AUTH::PASSWORD_POLICY_FAIL";
var SIGNUP_START = "AUTH::SIGNUP_START";
var SETUP_PASSWORD_START = "AUTH::SETUP_PASSWORD_START";
var SETUP_PASSWORD_SUCCESS_WITH_PROFILE_COMPLETED = "AUTH::SETUP_PASSWORD_SUCCESS_WITH_PROFILE_COMPLETED";
var SETUP_PASSWORD_SUCCESS_WITHOUT_PROFILE_COMPLETED = "AUTH::SETUP_PASSWORD_SUCCESS_WITHOUT_PROFILE_COMPLETED";
var SETUP_PASSWORD_FAIL = "AUTH::SETUP_PASSWORD_FAIL";
var SETUP_PROFILE_SUCCESS = "AUTH::SETUP_PROFILE_SUCCESS";
var LOADING_TENANT_INFO_FAIL = "AUTH::LOADING_TENANT_INFO_FAIL";
var LOADING_TENANT_INFO_SUCCESS = "AUTH::LOADING_TENANT_INFO_SUCCESS";
var MFA_START = "AUTH::MFA_START";
var MFA_PREP = "AUTH::MFA_PREP";
var MFA_SUCCESS = "AUTH::MFA_SUCCESS";
var MFA_FAIL = "AUTH::MFA_FAIL";
var MFA_END = "AUTH::MFA_END";
var RESEND_MFA_FAIL = "AUTH::RESEND_MFA_FAIL";
var USER_PROFILE_SETUP = "AUTH::USER_PROFILE_SETUP";
var SEND_RESET_PASSWORD_EMAIL_SUCCESS = "AUTH::SEND_RESET_PASSWORD_EMAIL_SUCCESS";
var SEND_RESET_PASSWORD_EMAIL_FAIL = "AUTH::SEND_RESET_PASSWORD_EMAIL_FAIL";
var SET_RESETTING_PASSWORD_ERROR = "AUTH::SET_RESETTING_PASSWORD_ERROR";
var SET_AUTH_ERROR = "AUTH::SET_AUTH_ERROR";
var GET_USER_LIST_START = "PROFILE::GET_USER_LIST_START";
var GET_USER_LIST_SUCCESS = "PROFILE::GET_USER_LIST_SUCCESS";
var GET_USER_LIST_FAIL = "PROFILE::GET_USER_LIST_FAIL";
var GET_USER_PROFILE_START = "PROFILE::GET_USER_PROFILE_START";
var GET_USER_PROFILE_SUCCESS = "PROFILE::GET_USER_PROFILE_SUCCESS";
var GET_USER_PROFILE_FAIL = "PROFILE::GET_USER_PROFILE_FAIL";
var GET_MY_USER_PROFILE_ON_INIT = "PROFILE::GET_USER_PROFILE_ON_INIT";
var GET_MY_USER_PROFILE_ON_INIT_SUCCESS = "PROFILE::GET_USER_PROFILE_ON_INIT_SUCCESS";
var GET_MY_USER_PROFILE_ON_INIT_FAIL = "PROFILE::GET_USER_PROFILE_ON_INIT_FAIL";
var GET_MY_USER_PROFILE_START = "PROFILE::GET_MY_USER_PROFILE_START";
var GET_MY_USER_PROFILE_SUCCESS = "PROFILE::GET_MY_USER_PROFILE_SUCCESS";
var GET_MY_USER_PROFILE_FAIL = "PROFILE::GET_USER_MY_PROFILE_FAIL";
var TOGGLE_USER_ACTIVATION_SUCCESS = "PROFILE::TOGGLE_USER_ACTIVATION_SUCCESS";
var TOGGLE_USER_ACTIVATION_FAIL = "PROFILE::TOGGLE_USER_ACTIVATION_FAIL";
var EDIT_PROFILE_SUCCESS = "PROFILE::EDIT_PROFILE_SUCCESS";
var EDIT_PROFILE_FAIL = "PROFILE::EDIT_PROFILE_FAIL";
var GET_GROUP_LIST_START = "PROFILE::GET_GROUP_LIST_START";
var GET_GROUP_LIST_SUCCESS = "PROFILE::GET_GROUP_LIST_SUCCESS";
var GET_GROUP_LIST_FAIL = "PROFILE::GET_GROUP_LIST_FAIL";
var INVITE_USERS_SUCCESS = "PROFILE::INVITE_USERS_SUCCESS";
var INVITE_USERS_FAIL = "PROFILE::INVITE_USERS_FAIL";
var ADD_GROUP_MEMBERS_SUCCESS = "PROFILE::ADD_GROUP_MEMBERS_SUCCESS";
var DELETE_USER_SUCCESS = "PROFILE::DELETE_USER_SUCCESS";
var DELETE_USER_FAIL = "PROFILE::DELETE_USER_FAIL";
var CREATE_GROUPS_SUCCESS = "PROFILE::CREATE_GROUPS_SUCCESS";
var CREATE_GROUPS_FAIL = "PROFILE::CREATE_GROUPS_FAIL";
var GET_GROUP_DETAILS_START = "PROFILE::GET_GROUP_DETAILS_START";
var GET_GROUP_DETAILS_SUCCESS = "PROFILE::GET_GROUP_DETAILS_SUCCESS";
var GET_GROUP_DETAILS_FAIL = "PROFILE::GET_GROUP_DETAILS_FAIL";
var EDIT_GROUP_SUCCESS = "PROFILE::EDIT_GROUP_SUCCESS";
var EDIT_GROUP_FAIL = "PROFILE::EDIT_GROUP_FAIL";
var DELETE_GROUP_SUCCESS = "PROFILE::DELETE_GROUP_SUCCESS";
var DELETE_GROUP_FAIL = "PROFILE::DELETE_GROUP_FAIL";
var TOGGLE_GROUP_ACTIVATION_SUCCESS = "PROFILE::TOGGLE_GROUP_ACTIVATION_SUCCESS";
var TOGGLE_GROUP_ACTIVATION_FAIL = "PROFILE::TOGGLE_GROUP_ACTIVATION_FAIL";
var DELETE_GROUP_USERS_SUCCESS = "PROFILE::DELETE_USERS_FROM_GROUP_SUCCESS";
var DELETE_GROUP_USERS_FAIL = "PROFILE::DELETE_USERS_FROM_GROUP_FAIL";
var GET_EVENT_LIST_START = "EVENT::GET_EVENT_LIST_START";
var GET_EVENT_LIST_SUCCESS = "EVENT::GET_EVENT_LIST_SUCCESS";
var GET_EVENT_LIST_FAIL = "EVENT::GET_EVENT_LIST_FAIL";
var GET_EVENT_LIST_TOTAL_COUNT = "EVENT::GET_EVENT_LIST_TOTAL_COUNT";
var GET_EVENT_DETAIL_START = "EVENT::GET_EVENT_DETAIL_START";
var GET_EVENT_DETAIL_SUCCESS = "EVENT::GET_EVENT_DETAIL_SUCCESS";
var GET_EVENT_DETAIL_FAIL = "EVENT::GET_EVENT_DETAIL_FAIL";
var SET_REPORT_API_LOADING = "REPORT::SET_REPORT_API_LOADING";
var SET_REPORT_INTERVAL_DATE = "REPORT::SET_INTERVAL_DATE";
var SET_REPORT_LOCATIONS = "REPORT::SET_LOCATIONS";
var SET_REPORT_SELECTED_FORMATTED_LOCATIONS = "REPORT::SET_SELECTED_FORMATTED_LOCATIONS";
var SET_REPORT_SELECTED_LOCATIONS_CUSTOM_PROPS = "REPORT::SET_SELECTED_LOCATIONS_CUSTOM_PROPS";
var SET_REPORT_SELECTED_LOCATIONS_NUM = "REPORT::SET_SELECTED_LOCATIONS_NUM";
var SET_REPORT_SELECTED_LOCATIONS_IDS = "REPORT::SET_SELECTED_LOCATIONS_IDS";
var SET_REPORT_GRAPHS_NUM = "REPORT::SET_GRAPHS_NUM";
var SET_REPORT_VISIBLE_LOCATIONS = "REPORT::SET_VISIBLE_LOCATIONS";
var SET_REPORT_ASSIGNED_CHART_COLORS = "REPORT::SET_ASSIGNED_CHART_COLORS";
var RESET_REPORTS_STATE = "REPORT::RESET_REPORTS_STATE";

// ../vlncc-frontend/src/utils/Api.ts
import { Amplify, Auth } from "aws-amplify";
var Api = class {
  static async setupAmplify(config) {
    return Amplify.configure({
      Auth: {
        mandatorySignIn: false,
        region: config.region,
        userPoolId: config.pool_id,
        userPoolWebClientId: config.pool_client_id
      }
    });
  }
  static async getHeaders() {
    const currentCredentials = await Auth.currentSession();
    const headers = {
      Accept: "application/json",
      Authorization: currentCredentials.getIdToken().getJwtToken(),
      "Content-Type": "application/json",
      "Accept-Encoding": "gzip, deflate, br"
    };
    return headers;
  }
  static async getUnauthorized(api, uri) {
    const url = API_TENANT_MANAGEMENT_BASE_URI + uri;
    const response = await fetch(url);
    return response;
  }
  static async get(api, uri) {
    const headers = await Api.getHeaders();
    let baseUrl2 = "";
    if (api == "tenant" /* tenant */) {
      baseUrl2 = API_TENANT_MANAGEMENT_BASE_URI;
    } else if (api == "user" /* user */) {
      baseUrl2 = API_USER_MANAGEMENT_BASE_URI;
    } else if (api == "events" /* events */) {
      baseUrl2 = API_EVENTS_SERVICE_BASE_URI;
    } else if (api == "site" /* site */) {
      baseUrl2 = API_SITE_MANAGEMENT_BASE_URI;
    }
    const url = baseUrl2 + uri;
    const response = await fetch(url, {
      method: "GET",
      headers
    });
    return response;
  }
  static async post(api, uri, body) {
    const headers = await Api.getHeaders();
    let baseUrl2 = "";
    if (api == "user" /* user */) {
      baseUrl2 = API_USER_MANAGEMENT_BASE_URI;
    } else if (api == "site" /* site */) {
      baseUrl2 = API_SITE_MANAGEMENT_BASE_URI;
    }
    const url = baseUrl2 + uri;
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    });
    return response;
  }
  static async patch(api, uri, body) {
    const headers = await Api.getHeaders();
    const url = API_USER_MANAGEMENT_BASE_URI + uri;
    const response = await fetch(url, {
      method: "PATCH",
      headers,
      body: JSON.stringify(body)
    });
    return response;
  }
  static async put(api, uri, body) {
    let baseUrl2 = "";
    if (api == "user" /* user */) {
      baseUrl2 = API_USER_MANAGEMENT_BASE_URI;
    } else if (api == "site" /* site */) {
      baseUrl2 = API_SITE_MANAGEMENT_BASE_URI;
    }
    const url = baseUrl2 + uri;
    const headers = await Api.getHeaders();
    const response = await fetch(url, {
      method: "PUT",
      headers,
      body: JSON.stringify(body)
    });
    return response;
  }
  static async delete(api, uri) {
    let baseUrl2 = "";
    if (api == "user" /* user */) {
      baseUrl2 = API_USER_MANAGEMENT_BASE_URI;
    } else if (api == "site" /* site */) {
      baseUrl2 = API_SITE_MANAGEMENT_BASE_URI;
    }
    const url = baseUrl2 + uri;
    const headers = await Api.getHeaders();
    const response = await fetch(url, {
      method: "DELETE",
      headers
    });
    return response;
  }
};
__name(Api, "Api");

// ../vlncc-frontend/src/utils/common.ts
import * as qs from "qs";
import { getMinutes, getHours, format, addMinutes, isBefore, isAfter, set } from "date-fns";
import { Auth as Auth2 } from "aws-amplify";
import { zxcvbn, zxcvbnOptions } from "@zxcvbn-ts/core";
import { PasswordStrength } from "@vaisala-rockhopper/components";
import { VaiIcon as VaiIcon2 } from "@vaisala-rockhopper/design-tokens";
import { sortBy } from "lodash";

// ../vlncc-frontend/src/profile/user.ts
var UserSortValue = /* @__PURE__ */ ((UserSortValue2) => {
  UserSortValue2["byName"] = "byName";
  UserSortValue2["byMostRecentChanges"] = "byMostRecentChanges";
  UserSortValue2["byNumberOfGroupsAsc"] = "byNumberOfGroupsAsc";
  UserSortValue2["byNumberOfGroupsDesc"] = "byNumberOfGroupsDesc";
  return UserSortValue2;
})(UserSortValue || {});

// ../vlncc-frontend/src/profile/group.ts
var GroupSortValue = /* @__PURE__ */ ((GroupSortValue2) => {
  GroupSortValue2["byName"] = "byName";
  GroupSortValue2["byMostRecentChanges"] = "byMostRecentChanges";
  GroupSortValue2["byNumberOfUsersAsc"] = "byNumberOfUsersAsc";
  GroupSortValue2["byNumberOfUsersDesc"] = "byNumberOfUsersDesc";
  return GroupSortValue2;
})(GroupSortValue || {});

// ../vlncc-frontend/src/utils/groupRights.ts
import { isEmpty, update, map, forEach, cloneDeep, reduce, includes } from "lodash";

// ../vlncc-frontend/src/rightsConstants.ts
var RIGHTS_MASK = {
  /**
   * ZONE/LOCATION Rights
   * These are similar to 'Permissions' in viewLinc 5.x
   */
  // This is a special VIEW right that allows viewing the site/zone but does not
  // propagate to newly created child zones.
  VIEW_NON_INHERITABLE: 1,
  // System Wide = view all sites
  // Site Wide = view zones
  // Zone Wide = view zones
  VIEW: 2,
  // System Wide = part of 'Manage All Sites' concept
  // Site Wide = acknowledge alarms
  // Zone Wide = acknowledge alarms
  ACKNOWLEDGE_ALARMS: 4,
  // System Wide = part of 'Manage All Sites' concept
  // Site Wide = pause alarms
  // Zone Wide = pause alarms
  PAUSE_ALARMS: 8,
  // System Wide = part of 'Manage All Sites' concept
  // Site Wide = link alarm templates
  // Zone Wide = link alarm templates
  LINK_ALARMS: 16,
  // System Wide = part of 'Manage All Sites' concept
  // Site Wide = comment on alarm and data
  // Zone Wide = comment on alarm and data
  COMMENT_ALARMS: 32,
  // System Wide = part of 'Manage All Sites' concept
  // Site Wide = comment on alarm and data
  // Zone Wide = comment on alarm and data
  COMMENT_DATA: 64,
  /**
   * SYSTEM and SITE Rights
   * These are similar to 'Rights' in viewLinc 5.x
   */
  // System Wide = part of 'Manage All Sites' concept
  // Zone Wide = manage site properties, zones and locations
  MANAGE_SITES: 128,
  // System Wide = manage all devices
  // Zone Wide = manage devices
  MANAGE_DEVICES: 256,
  // System Wide = manage all alarm templates
  // Zone Wide = manage alarm templates
  MANAGE_ALARM_TEMPLATES: 512,
  // System Wide = manage all users and groups
  // Zone Wide = manage users and groups
  MANAGE_USERS_GROUPS: 1024,
  // System Wide = view all events
  // Zone Wide = view events
  MANAGE_EVENTS: 2048,
  // System Wide = manage system preferences
  // Zone Wide = manage system preferences
  MANAGE_PREFERENCES: 4096,
  // System Wide = manage all reports
  // Zone Wide = manage reports
  MANAGE_REPORTS: 8192
};

// ../vlncc-frontend/src/utils/groupRights.ts
var camelCaseNotation = /* @__PURE__ */ __name((str) => {
  while (str.includes("_")) {
    const index = str.indexOf("_");
    str = str.substring(0, index) + str.charAt(index + 1).toUpperCase() + str.substring(index + 2);
  }
  return str;
}, "camelCaseNotation");
var calculateRights = /* @__PURE__ */ __name((right, type) => {
  const rights = { ["HAS_RIGHT" /* HAS_RIGHT */]: 0 };
  for (const key of Object.keys(RIGHTS_MASK)) {
    if (type === "ZONE" /* ZONE */ && !key.includes("MANAGE" /* MANAGE */) || type === "SITE" /* SITE */) {
      if (RIGHTS_MASK[key] & right) {
        rights[key] = 1;
        rights["HAS_RIGHT" /* HAS_RIGHT */] = 1;
      } else {
        rights[key] = 0;
      }
    }
  }
  return rights;
}, "calculateRights");
var getBitwiseNumber = /* @__PURE__ */ __name((nodeId, rights) => {
  if (rights === null || typeof rights === "undefined") {
    return 0;
  } else if (Object.prototype.hasOwnProperty.call(rights, "*")) {
    return rights["*"];
  } else if (Object.prototype.hasOwnProperty.call(rights, nodeId)) {
    return rights[nodeId];
  } else {
    return 0;
  }
}, "getBitwiseNumber");
var convertRightsObjToArray = /* @__PURE__ */ __name((rights) => {
  const convertedRights = [];
  for (const [key, value] of Object.entries(rights)) {
    convertedRights.push({ key, value, id: camelCaseNotation(key.toLowerCase()) });
  }
  return convertedRights;
}, "convertRightsObjToArray");
var checkSitesRights = /* @__PURE__ */ __name((node_id, rights, type) => {
  const num = getBitwiseNumber(node_id, rights);
  return convertRightsObjToArray(calculateRights(num, SITE_ZONES_ACCESS_KEYS[type]));
}, "checkSitesRights");
var zoneNodeRights = /* @__PURE__ */ __name((nodeId, groupRights, type) => {
  const rights = checkSitesRights(nodeId, groupRights, type);
  return rights;
}, "zoneNodeRights");
var checkAndUpdateParentRights = /* @__PURE__ */ __name((parentNodeRights, node) => {
  const updatedRights = map(parentNodeRights, (right, index) => {
    if (!includes(
      ["HAS_RIGHT" /* HAS_RIGHT */, "VIEW_NON_INHERITABLE" /* VIEW_NON_INHERITABLE */],
      right["key"]
    ) && !right.key.includes("MANAGE" /* MANAGE */)) {
      if (right.value === 1 /* FULLY_CHECKED */ && node.rights[index].value === 0 /* NOT_CHECKED */) {
        right.value = 3 /* INVERTED_CHECKED */;
      }
      if (right.value === 0 /* NOT_CHECKED */ && node.rights[index].value === 1 /* FULLY_CHECKED */) {
        right.value = 2 /* PARTIALLY_CHECKED */;
      }
    }
    return right;
  });
  return updatedRights;
}, "checkAndUpdateParentRights");
var validateNodesAccess = /* @__PURE__ */ __name((node, rights, parentNode = {}) => {
  node.rights = zoneNodeRights(node.node_id, rights, node.type);
  if (!isEmpty(parentNode)) {
    parentNode["rights"] = checkAndUpdateParentRights(parentNode["rights"], node);
  }
  if (node.children) {
    node.children.forEach((zone) => {
      if (zone.type !== "LOC" /* LOC */) {
        validateNodesAccess(zone, rights, node);
      }
    });
  }
  return node;
}, "validateNodesAccess");
var updateNestedParent = /* @__PURE__ */ __name((clonedGroupSites, path) => {
  const updatedValues = update(cloneDeep(clonedGroupSites), path, (zone) => {
    if (zone.children) {
      const checkBoxStatus = reduce(
        cloneDeep(zone.rights),
        (mem, right) => {
          if (!mem[right.key] && right.key !== "VIEW_NON_INHERITABLE" /* VIEW_NON_INHERITABLE */) {
            mem[right.key] = includes([3 /* INVERTED_CHECKED */, 1 /* FULLY_CHECKED */], right.value) ? 1 /* FULLY_CHECKED */ : 0 /* NOT_CHECKED */;
          }
          return mem;
        },
        {}
      );
      zone.children.forEach((childZone) => {
        if (childZone.type !== "LOC" /* LOC */) {
          forEach(childZone.rights, (right) => {
            if (right.key !== "VIEW_NON_INHERITABLE" /* VIEW_NON_INHERITABLE */ && checkBoxStatus[right.key] === 1 /* FULLY_CHECKED */ && (right.value === 0 /* NOT_CHECKED */ || right.value === 2 /* PARTIALLY_CHECKED */ || right.value === 3 /* INVERTED_CHECKED */)) {
              checkBoxStatus[right.key] = 3 /* INVERTED_CHECKED */;
            }
            if (right.key !== "VIEW_NON_INHERITABLE" /* VIEW_NON_INHERITABLE */ && checkBoxStatus[right.key] === 0 /* NOT_CHECKED */ && (right.value === 1 /* FULLY_CHECKED */ || right.value === 3 /* INVERTED_CHECKED */ || right.value === 2 /* PARTIALLY_CHECKED */)) {
              checkBoxStatus[right.key] = 2 /* PARTIALLY_CHECKED */;
            }
          });
        }
      });
      zone.rights = map(cloneDeep(zone.rights), (right) => {
        if (typeof checkBoxStatus[right.key] !== "undefined") {
          right.value = checkBoxStatus[right.key];
        } else {
          const viewValue = checkBoxStatus["VIEW" /* VIEW */];
          const nonInheritableRight = right;
          if (includes([2 /* PARTIALLY_CHECKED */], viewValue)) {
            nonInheritableRight.value = 1 /* FULLY_CHECKED */;
          } else {
            nonInheritableRight.value = 0 /* NOT_CHECKED */;
          }
        }
        return right;
      });
    }
    return zone;
  });
  return updatedValues;
}, "updateNestedParent");
var updateParentNodes = /* @__PURE__ */ __name((clonedGroupSites, path) => {
  while (path.splice(-2).length > 1) {
    clonedGroupSites = updateNestedParent(clonedGroupSites, path);
  }
  return clonedGroupSites;
}, "updateParentNodes");
var updateZoneRights = /* @__PURE__ */ __name((rights, id, value) => {
  let updatedRightsStatus;
  if (!value && id === "view") {
    updatedRightsStatus = map(rights, (right) => {
      right.value = value;
      return right;
    });
  } else {
    updatedRightsStatus = map(rights, (right) => {
      if (value && (right.key === "HAS_RIGHT" /* HAS_RIGHT */ || right.key === "VIEW" /* VIEW */) && right.key !== "VIEW_NON_INHERITABLE" /* VIEW_NON_INHERITABLE */) {
        right.value = value;
      }
      if (right.id === id) {
        right.value = value;
      }
      return right;
    });
  }
  return updatedRightsStatus;
}, "updateZoneRights");
var updateZone = /* @__PURE__ */ __name((zone, id, value) => {
  zone.rights = updateZoneRights(zone.rights, id, value);
  if (zone.children?.length > 0) {
    forEach(zone.children, (childZone) => {
      if (childZone.type !== "LOC" /* LOC */) {
        updateZone(childZone, id, value);
      }
    });
  }
  return zone;
}, "updateZone");
var updateChildrenNodes = /* @__PURE__ */ __name((clonedGroupSites, path, id, value) => {
  const updatedValues = update(clonedGroupSites, path, (zone) => {
    return updateZone(zone, id, value);
  });
  return updatedValues;
}, "updateChildrenNodes");
var updateGroupSiteRights = /* @__PURE__ */ __name((clonedGroupSites, path, id, value) => {
  clonedGroupSites = updateChildrenNodes(clonedGroupSites, path, id, value);
  if (path.length > 1) {
    clonedGroupSites = updateParentNodes(clonedGroupSites, path);
  }
  return clonedGroupSites;
}, "updateGroupSiteRights");
var calculateRightsValue = /* @__PURE__ */ __name((rights) => {
  let calculatedRightValue = 0;
  forEach(rights, (right) => {
    if (right.key !== "HAS_RIGHT" /* HAS_RIGHT */ && includes([1 /* FULLY_CHECKED */, 3 /* INVERTED_CHECKED */], right.value)) {
      calculatedRightValue = RIGHTS_MASK[right.key] | calculatedRightValue;
    } else if (right.key === "VIEW" /* VIEW */ && includes([2 /* PARTIALLY_CHECKED */, 3 /* INVERTED_CHECKED */], right.value)) {
      calculatedRightValue = RIGHTS_MASK["VIEW_NON_INHERITABLE" /* VIEW_NON_INHERITABLE */] | calculatedRightValue;
    }
  });
  return calculatedRightValue;
}, "calculateRightsValue");
var getRights = /* @__PURE__ */ __name((node, rights, exclude_zeros = false) => {
  const nodeHasRights = node.rights?.length > 0 ? true : false;
  if (nodeHasRights) {
    const rightsValue = calculateRightsValue(node.rights);
    if (exclude_zeros && rightsValue === 0) {
      delete rights[node.node_id];
    } else {
      rights[node.node_id] = rightsValue;
    }
  }
  if (node.children?.length > 0) {
    forEach(node.children, (childNode) => {
      if (childNode.type !== "LOC" /* LOC */) {
        getRights(childNode, rights, exclude_zeros);
      }
    });
  }
  return rights;
}, "getRights");
var calculateNodeBitwiseNumber = /* @__PURE__ */ __name((clonedGroupSites, exclude_zeros = false) => {
  return getRights(clonedGroupSites, {}, exclude_zeros);
}, "calculateNodeBitwiseNumber");
var thingHasRights = /* @__PURE__ */ __name((rightsToCheck, thingRights) => {
  for (let i = 0; i < rightsToCheck.length; i++) {
    const right = rightsToCheck[i];
    if ((right & thingRights) == right) {
      continue;
    }
    return false;
  }
  return true;
}, "thingHasRights");

// ../vlncc-frontend/src/utils/common.ts
import RFL100_no_cable from "../assets/images/RFL100_no_cable.png";
import CA10_small_antenna from "../assets/images/CA10_small_antenna.png";
var roundToMultipleOfFive = /* @__PURE__ */ __name((x) => {
  if (typeof x !== "number") {
    throw new TypeError(`Expected argument to be a number. But received ${typeof x}`);
  }
  return Math.ceil(x / 5) * 5;
}, "roundToMultipleOfFive");
var loadZxcvbnOptions = /* @__PURE__ */ __name(async (language) => {
  const zxcvbnCommonPackage = await import("@zxcvbn-ts/language-common");
  let languagePack;
  switch (language) {
    case "en-US" /* en */:
      languagePack = await import("@zxcvbn-ts/language-en");
      break;
    case "fr-FR" /* frfr */:
      languagePack = await import("@zxcvbn-ts/language-fr");
      break;
    case "de-DE" /* dede */:
      languagePack = await import("@zxcvbn-ts/language-de");
      break;
    case "es-XN" /* esXN */:
      languagePack = await import("@zxcvbn-ts/language-es-es");
      break;
    case "it-IT" /* itIT */:
      languagePack = await import("@zxcvbn-ts/language-it");
      break;
    case "ja-JP" /* jajp */:
      languagePack = await import("@zxcvbn-ts/language-ja");
      break;
    case "fi-FI" /* fiFI */:
      languagePack = await import("@zxcvbn-ts/language-fi");
      break;
    case "pt-BR" /* ptBR */:
      languagePack = await import("@zxcvbn-ts/language-pt-br");
      break;
    default:
      console.debug(
        `language pack for ${language} is missing for zxcvbn library. See the README for instructions to add it.`
      );
      languagePack = await import("@zxcvbn-ts/language-en");
      break;
  }
  return {
    dictionary: {
      ...zxcvbnCommonPackage.default.dictionary,
      ...languagePack.default.dictionary
    },
    graphs: zxcvbnCommonPackage.default.adjacencyGraphs,
    translations: languagePack.default.translations
  };
}, "loadZxcvbnOptions");
var passwordBlackList = ["vaisala", "viewlinc", "viewlinccloud"];
async function strengthFinder(password, userInputs, policy, t, options, language) {
  const result = {
    score: 1,
    feedback: "",
    strength: PasswordStrength.Weak,
    parametricError: 0
  };
  if (password.length === 0) {
    result.score = void 0;
    result.strength = void 0;
    result.feedback = "";
    return result;
  }
  if (password.startsWith(" ")) {
    result.score = 1;
    result.strength = PasswordStrength.Weak;
    result.feedback = "password.cannotStartWithSpace";
    return result;
  }
  if (password.endsWith(" ")) {
    result.score = 1;
    result.strength = PasswordStrength.Weak;
    result.feedback = "password.cannotEndWithSpace";
    return result;
  }
  if (password.length < policy.minimumLength) {
    result.score = 1;
    result.strength = PasswordStrength.Weak;
    result.feedback = "password.passwordHelperCharacterLengthRequirement";
    result.parametricError = policy.minimumLength;
    return result;
  }
  if (policy.isLowerCaseRequired && !password.match(/[a-z]/)) {
    result.score = 1;
    result.strength = PasswordStrength.Weak;
    result.feedback = "password.mustHaveLowerCase";
    return result;
  }
  if (policy.isUpperCaseRequired && !password.match(/[A-Z]/)) {
    result.score = 1;
    result.strength = PasswordStrength.Weak;
    result.feedback = "password.mustHaveUpperCase";
    return result;
  }
  if (policy.isNumberRequired && !password.match(/[0-9]/)) {
    result.score = 1;
    result.strength = PasswordStrength.Weak;
    result.feedback = "password.mustHaveNumber";
    return result;
  }
  if (policy.isSpecialCharRequired && !password.match(/[^A-Z a-z0-9]/)) {
    result.score = 1;
    result.strength = PasswordStrength.Weak;
    result.feedback = "password.mustHaveSymbol";
    return result;
  }
  const blacklist = [...passwordBlackList, ...userInputs];
  for (const item of blacklist) {
    if (password.toLocaleLowerCase().includes(item.toLocaleLowerCase())) {
      result.score = 1;
      result.strength = PasswordStrength.Weak;
      result.feedback = "password.containsReservedWords";
      return result;
    }
  }
  if (typeof options === "undefined" || options == null) {
    options = await loadZxcvbnOptions(language);
  }
  zxcvbnOptions.setOptions(options);
  const strengthObject = zxcvbn(password, passwordBlackList);
  result.score = strengthObject.score;
  if (strengthObject?.feedback?.warning) {
    result.feedback = strengthObject.feedback.warning;
    result.parametricError = 0;
  } else if (strengthObject?.feedback?.suggestions?.length > 0) {
    result.feedback = strengthObject.feedback.suggestions[0];
    result.parametricError = 0;
  }
  switch (strengthObject.score) {
    case 0:
      result.strength = PasswordStrength.Weak;
      break;
    case 1:
      result.strength = PasswordStrength.Weak;
      break;
    case 2:
      result.strength = PasswordStrength.Fair;
      break;
    case 3:
      result.strength = PasswordStrength.Good;
      break;
    case 4:
      result.strength = PasswordStrength.Strong;
      break;
    default:
      result.strength = PasswordStrength.Weak;
      break;
  }
  return result;
}
__name(strengthFinder, "strengthFinder");
var setErrorFromScore = /* @__PURE__ */ __name((errorSetter, passStrength, errorText, setParametricError) => {
  if (passStrength.score < PASSWORD_MIN_SCORE) {
    if (passStrength.feedback) {
      errorSetter(passStrength.feedback);
    } else {
      errorSetter(errorText);
    }
    setParametricError(passStrength.parametricError);
  }
}, "setErrorFromScore");
var decodeURI2 = /* @__PURE__ */ __name((uri) => {
  const map2 = { amp: "&", lt: "<", gt: ">", quot: '"', "#039": "'", "#034": "'" };
  return decodeURIComponent(uri).replace(/&([^;]+);/g, (m, c) => map2[c]);
}, "decodeURI");
var checkPlusForPhoneNumber = /* @__PURE__ */ __name((phoneNumber) => {
  if (phoneNumber.startsWith("+")) {
    return phoneNumber;
  } else {
    return "+" + phoneNumber;
  }
}, "checkPlusForPhoneNumber");
var splitArray = /* @__PURE__ */ __name((f, xs) => {
  return xs.reduce(
    ([T, F], x, i, arr) => {
      if (f(x, i, arr) === false)
        return [T, [...F, x]];
      else
        return [[...T, x], F];
    },
    [[], []]
  );
}, "splitArray");
var getConstantFromLocalStorage = /* @__PURE__ */ __name((constant, default_) => {
  const constantValue = localStorage.getItem(constant);
  if (constantValue !== null && typeof constantValue !== "undefined") {
    return constantValue;
  } else {
    return default_ == null ? void 0 : default_;
  }
}, "getConstantFromLocalStorage");
var getDeviceType = /* @__PURE__ */ __name((width) => {
  if (width >= SCREEN_WIDTH_BREAK_POINT.XL) {
    return DEVICE_TYPE[SCREEN_WIDTH_BREAK_POINT.XL];
  } else if (width < SCREEN_WIDTH_BREAK_POINT.XL && width >= SCREEN_WIDTH_BREAK_POINT.LG) {
    return DEVICE_TYPE[SCREEN_WIDTH_BREAK_POINT.LG];
  } else if (width < SCREEN_WIDTH_BREAK_POINT.LG && width >= SCREEN_WIDTH_BREAK_POINT.MD) {
    return DEVICE_TYPE[SCREEN_WIDTH_BREAK_POINT.MD];
  } else {
    return DEVICE_TYPE[SCREEN_WIDTH_BREAK_POINT.SM];
  }
}, "getDeviceType");
var DEFAULT_TIME_ZONE = "UTC";
var getTime = /* @__PURE__ */ __name(async (timeZone = DEFAULT_TIME_ZONE) => {
  const time = new Intl.DateTimeFormat("default", {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
    timeZone
  }).format();
  const date = /* @__PURE__ */ new Date();
  return {
    date,
    time,
    zone: timeZone?.replace(/_/g, " ")
  };
}, "getTime");
var siteTreeConvertor = /* @__PURE__ */ __name((obj, result, siteId, selectedNodeId, parentType) => {
  let arr = [];
  const newObj = {
    id: "",
    parent: "",
    text: "",
    data: {},
    states: selectedNodeId === obj["node_id"] ? ["selected"] : [],
    droppable: true,
    icon: "",
    type: "",
    description: "",
    actions: selectedNodeId === obj["node_id"] ? ["edit"] : [],
    childrenCount: 0,
    position: 0,
    meas_id: "",
    symbol_id: "",
    decimal_places: 0,
    children: [],
    timestamp: null,
    parentType,
    device: {}
  };
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (key !== "children") {
        switch (key) {
          case "name":
            newObj.text = obj[key];
            break;
          case "node_id":
            newObj.id = obj[key];
            break;
          case "description":
            newObj.description = obj[key];
            break;
          case "type":
            newObj.type = obj[key];
            break;
          case "parent_id":
            if (obj["node_id"] == siteId) {
              newObj.parent = null;
              newObj.icon = VaiIcon2.MapMarkerHexagon;
            } else {
              newObj.parent = obj[key];
            }
            break;
          case "position":
            newObj.position = obj[key];
            break;
          case "meas_id":
            newObj.meas_id = obj[key];
            if (obj["meas_id"] == TEMP_ID) {
              newObj.icon = VaiIcon2.Thermometer;
            } else if (obj["meas_id"] == HUMIDITY_ID) {
              newObj.icon = VaiIcon2.Humidity;
            } else if (obj["meas_id"] == CO2_ID) {
              newObj.icon = VaiIcon2.Dust;
            }
            break;
          case "decimal_places":
            newObj.decimal_places = obj[key];
            break;
          case "symbol_id":
            newObj.symbol_id = obj[key];
            break;
          case "timestamp":
            newObj.timestamp = obj[key];
            break;
          case "device":
            newObj.device = obj[key];
            if (newObj.device === null) {
              newObj.actions.push("unlink");
            }
            break;
        }
      } else {
        arr = sortBy(obj[key], (children) => {
          return children.position;
        });
        newObj.childrenCount = arr.length;
        newObj.children = arr;
      }
    }
  }
  result.push(newObj);
  if (arr.length) {
    for (let i = 0; i < arr.length; i++) {
      siteTreeConvertor(arr[i], result, siteId, selectedNodeId, newObj.type);
    }
  }
  return [result];
}, "siteTreeConvertor");
var timestampToTimeString = /* @__PURE__ */ __name((timestamp) => {
  const timeZone = getConstantFromLocalStorage(LS_TIME_ZONE);
  const dt = new Date(timestamp);
  const dtWithTimeZone = new Date(
    dt.toLocaleString("en-US", {
      timeZone
    })
  );
  return format(dtWithTimeZone, "yyyy-MM-dd HH:mm:ss");
}, "timestampToTimeString");
var getUserNameForAPI = /* @__PURE__ */ __name(async () => {
  const currentCredentials = await Auth2.currentSession();
  const username = currentCredentials?.getIdToken().payload.email || "";
  return btoa(username);
}, "getUserNameForAPI");
var generateTimeOptions = /* @__PURE__ */ __name((maxTime = null, minTime = null, timeStep = 5) => {
  let startTime = /* @__PURE__ */ new Date("2010-01-01 00:00");
  const endTime = /* @__PURE__ */ new Date("2010-01-01 23:55");
  const timeOptions = [];
  maxTime = /* @__PURE__ */ new Date(`2010-01-01 ${maxTime}`);
  minTime = /* @__PURE__ */ new Date(`2010-01-01 ${minTime}`);
  while (!isAfter(startTime, endTime)) {
    if (maxTime && isAfter(startTime, maxTime)) {
      timeOptions.push({
        value: format(startTime, "HH:mm"),
        disabled: true
      });
    } else if (minTime && isBefore(startTime, minTime)) {
      timeOptions.push({
        value: format(startTime, "HH:mm"),
        disabled: true
      });
    } else {
      timeOptions.push({
        value: format(startTime, "HH:mm"),
        disabled: false
      });
    }
    startTime = addMinutes(startTime, timeStep);
  }
  return timeOptions;
}, "generateTimeOptions");
var modifyResponseData = /* @__PURE__ */ __name((data, formattedLocations = {}, resultObj = {}, hierarchy = []) => {
  resultObj = JSON.parse(JSON.stringify(resultObj));
  [...data].sort((a, b) => a.created - b.created).forEach((node) => {
    resultObj[node.node_id] = {
      ...node,
      children: {},
      hierarchy: [...hierarchy, node.node_id],
      ...formattedLocations[node.node_id] ? {
        selected: formattedLocations[node.node_id].selected,
        partialSelected: formattedLocations[node.node_id].partialSelected,
        show: formattedLocations[node.node_id].show
        // showThreshold: formattedLocations[node.node_id].showThreshold,
        // visibleOnGraph: formattedLocations[node.node_id].visibleOnGraph,
        // measurement_points: formattedLocations[node.node_id].measurement_points,
        // threshold_values: formattedLocations[node.node_id].threshold_values,
        // maximum: formattedLocations[node.node_id].maximum,
        // minimum: formattedLocations[node.node_id].minimum,
        // average: formattedLocations[node.node_id].average,
        // most_recent: formattedLocations[node.node_id].most_recent
      } : {
        selected: false,
        partialSelected: false,
        show: true
        // showThreshold: false,
        // visibleOnGraph: true,
        // measurement_points: [],
        // threshold_values: []
      }
    };
    resultObj[node.node_id].children = node.children && node.children.length > 0 ? {
      ...modifyResponseData(
        node.children,
        formattedLocations[node.node_id]?.children || {},
        resultObj[node.node_id].children,
        [...hierarchy, node.node_id]
      )
    } : {};
  });
  return resultObj;
}, "modifyResponseData");
var areChildrenFiltered = /* @__PURE__ */ __name((text, node) => {
  let result = false;
  Object.values(node.children).forEach((n) => {
    result = result ? true : n.name.toLowerCase().includes(text);
    if (!result && Object.keys(n.children).length > 0) {
      result = areChildrenFiltered(text, n);
    }
  });
  return result;
}, "areChildrenFiltered");
var filterLocationsTree = /* @__PURE__ */ __name((text, node = {}, parent_node = {}, only_locations = false) => {
  const locationsClone2 = Object.keys(node).length > 0 ? node : JSON.parse(JSON.stringify(parent_node));
  Object.values(locationsClone2).forEach((node2) => {
    if (node2.type !== SITE_KEY || only_locations && node2.type === LOCATION_KEY) {
      node2.show = node2.name.toLowerCase().includes(text) || areChildrenFiltered(text, node2);
    }
    if (Object.keys(node2.children).length > 0) {
      filterLocationsTree(text, node2.children, parent_node, only_locations);
    }
  });
  return locationsClone2;
}, "filterLocationsTree");
var sortLocationsOnTopOfZones = /* @__PURE__ */ __name((data) => {
  return Object.values(data).sort((a, b) => {
    if (a.type === LOCATION_KEY && b.type === ZONE_KEY)
      return -1;
    if (a.type === ZONE_KEY && b.type === LOCATION_KEY)
      return 1;
    return 0;
  });
}, "sortLocationsOnTopOfZones");
var getInitialAssignedChartColors = /* @__PURE__ */ __name(() => {
  const initialColors = {};
  CHART_SERIES_COLORS.forEach((color) => initialColors[color] = null);
  return initialColors;
}, "getInitialAssignedChartColors");
var getAssignedChartColor = /* @__PURE__ */ __name((id, assignedColors) => {
  let assignedColor;
  for (const [key, value] of Object.entries(assignedColors)) {
    if (value === id) {
      assignedColor = key;
      break;
    }
  }
  return assignedColor;
}, "getAssignedChartColor");
var getVisibleLocationsNumber = /* @__PURE__ */ __name((visibleLocations) => {
  return Object.values(visibleLocations).filter((loc) => loc.visible).length;
}, "getVisibleLocationsNumber");
var getNearestEnabledTimeOption = /* @__PURE__ */ __name((time, step = 5) => {
  if (time) {
    const timeParts = time.split(":");
    let minutes = +timeParts[1];
    while (minutes % step !== 0) {
      minutes--;
    }
    timeParts[1] = minutes < 10 ? `0${minutes}` : minutes;
    return timeParts.join(":");
  }
  return time;
}, "getNearestEnabledTimeOption");
function getStyleValues(element) {
  const style = window.getComputedStyle(element);
  return {
    getMarginLeft: function() {
      return parseInt(style.marginLeft);
    },
    getMarginTop: function() {
      return parseInt(style.marginTop);
    },
    getMarginRight: function() {
      return parseInt(style.marginRight);
    },
    getMarginBottom: function() {
      return parseInt(style.marginBottom);
    },
    getPaddingLeft: function() {
      return parseInt(style.paddingLeft);
    },
    getPaddingTop: function() {
      return parseInt(style.paddingTop);
    },
    getPaddingRight: function() {
      return parseInt(style.paddingRight);
    },
    getPaddingBottom: function() {
      return parseInt(style.paddingBottom);
    }
  };
}
__name(getStyleValues, "getStyleValues");
var getErrorClass = /* @__PURE__ */ __name((error, defaultClass = "includes-error") => error ? defaultClass : "", "getErrorClass");
var isProd = /* @__PURE__ */ __name(() => {
  return process.env.REACT_APP_STAGE === EnvStage.PROD;
}, "isProd");
var getHoursMinutes = /* @__PURE__ */ __name((date) => {
  let minutes = getMinutes(date);
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${getHours(date)}:${minutes}`;
}, "getHoursMinutes");
var setDateHoursMinutesFromTime = /* @__PURE__ */ __name((date, time) => {
  const [hours, minutes] = time.split(":");
  return set(date, { hours: Number(hours), minutes: Number(minutes) });
}, "setDateHoursMinutesFromTime");
var getTodayWithNearestAvailableTime = /* @__PURE__ */ __name(() => {
  let today2 = /* @__PURE__ */ new Date();
  const todayDatetime = getHoursMinutes(today2);
  const newDatetime = getNearestEnabledTimeOption(todayDatetime);
  if (todayDatetime !== newDatetime) {
    today2 = setDateHoursMinutesFromTime(today2, newDatetime);
  }
  return today2;
}, "getTodayWithNearestAvailableTime");
var sortUsersByName = /* @__PURE__ */ __name((users) => {
  const [usersWithName, usersWithoutName] = splitArray(
    (x) => x.first_name.length > 0,
    users
  );
  usersWithName.sort(
    (a, b) => (a.first_name + " " + a.last_name).localeCompare(b.first_name + " " + b.last_name)
  );
  usersWithoutName.sort((a, b) => a.user_name.localeCompare(b.user_name));
  usersWithName.push(...usersWithoutName);
  return usersWithName;
}, "sortUsersByName");
var parseOrDefault = /* @__PURE__ */ __name((value, default_) => {
  if (value != null) {
    try {
      return JSON.parse(value);
    } catch (error) {
      return value;
    }
  }
  return default_;
}, "parseOrDefault");
var getUserSettingKey = /* @__PURE__ */ __name((username, constant) => {
  return `${username}.${constant}`;
}, "getUserSettingKey");
var getUserSetting = /* @__PURE__ */ __name((username, constant, default_) => {
  return getConstantFromLocalStorage(getUserSettingKey(username, constant), default_);
}, "getUserSetting");
var setUserSetting = /* @__PURE__ */ __name((username, constant, value) => {
  localStorage.setItem(getUserSettingKey(username, constant), value);
}, "setUserSetting");
var clearUserSettings = /* @__PURE__ */ __name((username) => {
  Object.values(UserSettings).forEach((val) => {
    localStorage.removeItem(getUserSettingKey(username, val));
  });
}, "clearUserSettings");
var sortValueOrDefault = /* @__PURE__ */ __name((username, setting, default_, comparer) => {
  let sorting = userSettings.get(username, setting, default_);
  if (sorting != null) {
    if (!comparer.find((x) => x === sorting)) {
      sorting = default_;
    }
  }
  return sorting || default_;
}, "sortValueOrDefault");
var userSettings = {
  getKey: getUserSettingKey,
  get: getUserSetting,
  set: setUserSetting,
  clear: clearUserSettings,
  sortValueOrDefault
};
var sortGroups = /* @__PURE__ */ __name((groups, selectedValue) => {
  switch (selectedValue) {
    case "byName" /* byName */:
      groups.sort((a, b) => a.group_name.localeCompare(b.group_name));
      break;
    case "byMostRecentChanges" /* byMostRecentChanges */:
      groups.sort((a, b) => b.changed - a.changed);
      break;
    case "byNumberOfUsersAsc" /* byNumberOfUsersAsc */:
      groups.sort((a, b) => a.users.length - b.users.length);
      break;
    case "byNumberOfUsersDesc" /* byNumberOfUsersDesc */:
      groups.sort((a, b) => b.users.length - a.users.length);
      break;
  }
  return groups;
}, "sortGroups");
var sortUsers = /* @__PURE__ */ __name((users, selectedValue) => {
  let sortedUsers = [...users];
  switch (selectedValue) {
    case "byName" /* byName */: {
      sortedUsers = sortUsersByName(sortedUsers);
      break;
    }
    case "byMostRecentChanges" /* byMostRecentChanges */:
      sortedUsers.sort((a, b) => b.changed - a.changed);
      break;
    case "byNumberOfGroupsAsc" /* byNumberOfGroupsAsc */:
      sortedUsers.sort((a, b) => a.groups.length - b.groups.length);
      break;
    case "byNumberOfGroupsDesc" /* byNumberOfGroupsDesc */:
      sortedUsers.sort((a, b) => b.groups.length - a.groups.length);
      break;
  }
  return sortedUsers;
}, "sortUsers");
var isAdminGroup = /* @__PURE__ */ __name((group) => {
  if (group == null) {
    return false;
  }
  return group.group_id === DEFAULT_ADMIN_ID;
}, "isAdminGroup");
var getDeviceOrProbeCount = /* @__PURE__ */ __name((device) => {
  return device.items?.length || 0;
}, "getDeviceOrProbeCount");
var getDeviceOrHostText = /* @__PURE__ */ __name((device, t) => {
  let count = 0;
  let key;
  count = getDeviceOrProbeCount(device);
  if (device.is_logger) {
    key = "general.dataSource";
  } else {
    key = "deviceManager.device";
  }
  return `${count} ${t(key, { count })}`;
}, "getDeviceOrHostText");
var setAdditionalUserFields = /* @__PURE__ */ __name((user) => {
  user.company_alias = localStorage.getItem(LS_COMPANY_ALIAS);
  if (user.rights) {
    const siteRights = user.rights[PARENT_SITE_KEY] || user.rights["*"] || null;
    user.canManageSites = thingHasRights([RIGHTS_MASK.MANAGE_SITES], siteRights);
    user.canManageUsersAndGroups = thingHasRights([RIGHTS_MASK.MANAGE_USERS_GROUPS], siteRights);
    user.canManageDevices = thingHasRights([RIGHTS_MASK.MANAGE_DEVICES], siteRights);
    user.canManageReports = thingHasRights([RIGHTS_MASK.MANAGE_REPORTS], siteRights);
    user.canManageEvents = thingHasRights([RIGHTS_MASK.MANAGE_EVENTS], siteRights);
    user.canPauseAlarms = thingHasRights([RIGHTS_MASK.PAUSE_ALARMS], siteRights);
    user.canManageAlarms = thingHasRights([RIGHTS_MASK.MANAGE_ALARM_TEMPLATES], siteRights);
  }
}, "setAdditionalUserFields");
var LANGUAGE_TEXT = {
  ["de-DE" /* dede */]: "Deutsch",
  ["en-US" /* en */]: "English",
  ["es-XN" /* esXN */]: "Espa\xF1ol",
  ["fr-FR" /* frfr */]: "Fran\xE7ais",
  ["it-IT" /* itIT */]: "Italiano",
  ["pt-BR" /* ptBR */]: "Portugu\xEAs",
  ["fi-FI" /* fiFI */]: "Suomi",
  ["sv-SE" /* svSE */]: "Svenska",
  ["zh-CN" /* zhcn */]: "\u4E2D\u6587",
  ["ja-JP" /* jajp */]: "\u65E5\u672C\u8A9E"
};
var isEmptyObject = /* @__PURE__ */ __name((obj) => {
  return JSON.stringify(obj) === JSON.stringify({});
}, "isEmptyObject");
var replaceTemplateValues = /* @__PURE__ */ __name((uri, data) => {
  Object.entries(data).map(([key, value]) => {
    uri = uri.replace(`{${key}}`, value);
  });
  return uri;
}, "replaceTemplateValues");
var getDeviceImage = /* @__PURE__ */ __name((deviceModel) => {
  switch (deviceModel.toUpperCase()) {
    case "RFL100" /* RFL100 */:
      return RFL100_no_cable;
    default:
      return CA10_small_antenna;
  }
}, "getDeviceImage");
var buildDeviceId = /* @__PURE__ */ __name((identifier, serialNumber) => {
  return [identifier, serialNumber].join("-");
}, "buildDeviceId");
var buildDataSource = /* @__PURE__ */ __name((dataSource) => {
  return encodeURIComponent(
    `\\\\${dataSource.device_model.toUpperCase()}\\${dataSource.device_sn.toUpperCase()}\\${dataSource.probe_model.toUpperCase()}\\${dataSource.probe_sn.toUpperCase()}\\${dataSource.meas_group}\\${dataSource.meas_id}`
  );
}, "buildDataSource");

// ../vlncc-frontend/src/utils/errorHandler.ts
function isErrorWithMessage(error) {
  return typeof error === "object" && "message" in error;
}
__name(isErrorWithMessage, "isErrorWithMessage");
function getErrorMessage(error) {
  if (isErrorWithMessage(error))
    return error.message;
  return String(error);
}
__name(getErrorMessage, "getErrorMessage");
var reportError = /* @__PURE__ */ __name((error, message = "Unexpected error") => {
  if (true) {
    console.error(message, getErrorMessage(error));
  }
  return new Error(error);
}, "reportError");

// ../vlncc-frontend/src/store/notifications.ts
import { createSlice, nanoid } from "@reduxjs/toolkit";
import { NotificationType } from "@vaisala-rockhopper/components";
var initialState2 = [];
var notifications = createSlice({
  name: "Notifications",
  initialState: initialState2,
  reducers: {
    addNotification: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (payload) => {
        if (!payload.duration && payload.type !== NotificationType.Alarm) {
          payload.duration = NOTIFICATION_DEFAULT_DURATION;
        }
        const id = nanoid();
        return { payload: { id, ...payload } };
      }
    },
    removeNotification: (state, action) => {
      return state = state.filter((notification) => notification.id !== action.payload);
    },
    clearNotifications: (state) => state = initialState2
  }
});
var { addNotification, removeNotification, clearNotifications } = notifications.actions;
var selectNotifications = /* @__PURE__ */ __name((state) => state.notifications, "selectNotifications");
var notifications_default = notifications.reducer;

// ../vlncc-frontend/src/store/actions/profile.ts
import { NotificationType as NotificationType2 } from "@vaisala-rockhopper/components";
var getUsers = /* @__PURE__ */ __name(() => async (dispatch) => {
  dispatch({ type: GET_USER_LIST_START });
  try {
    const customerId = getConstantFromLocalStorage(LS_COMPANY_CUSTOMER_ID);
    if (customerId) {
      const uri = "/tenant/{customer_id}/users" /* userList */.replace("{customer_id}", customerId);
      const response = await Api.get("user" /* user */, uri);
      const userList = await response.json();
      dispatch({ type: GET_USER_LIST_SUCCESS, users: sortUsersByName(userList.users) });
    } else {
      dispatch({ type: GET_USER_LIST_FAIL, error: 3 /* customerIdError */ });
    }
  } catch (error) {
    reportError(error, "Error getting users:");
    if (error.code === NETWORK_ERROR) {
      dispatch({ type: GET_USER_LIST_FAIL, error: 0 /* networkError */ });
    } else {
      dispatch({ type: GET_USER_LIST_FAIL, error: 1 /* usersNotFound */ });
    }
  }
}, "getUsers");
var getUserProfile = /* @__PURE__ */ __name((userName, includeRights = false) => async (dispatch) => {
  dispatch({ type: GET_USER_PROFILE_START });
  try {
    const customerId = getConstantFromLocalStorage(LS_COMPANY_CUSTOMER_ID);
    if (customerId) {
      let uri = "";
      const params = [API_PROFILE_INCLUDE_GROUP_PARAM];
      if (includeRights) {
        params.push(API_INCLUDE_RIGHT_PARAM);
      }
      uri = "/tenant/{customer_id}/users/{user_name}" /* userProfile */.replace("{customer_id}", customerId).replace("{user_name}", btoa(userName)) + "?" + params.join("&");
      const response = await Api.get("user" /* user */, uri);
      const userProfile = await response.json();
      userProfile.company_alias = localStorage.getItem(LS_COMPANY_ALIAS);
      dispatch({ type: GET_USER_PROFILE_SUCCESS, userProfile });
    } else {
      dispatch({ type: GET_USER_PROFILE_FAIL, error: 3 /* customerIdError */ });
    }
  } catch (error) {
    reportError(error, "Error getting user profile:");
    if (error.code === NETWORK_ERROR) {
      dispatch({ type: GET_USER_PROFILE_FAIL, error: 0 /* networkError */ });
    } else {
      dispatch({ type: GET_USER_PROFILE_FAIL, error: 1 /* usersNotFound */ });
    }
  }
}, "getUserProfile");
var initProfile = /* @__PURE__ */ __name(() => async (dispatch) => {
  const currentCredentials = await Auth3.currentSession();
  const userName = currentCredentials.getIdToken().payload.email;
  dispatch({ type: GET_MY_USER_PROFILE_ON_INIT });
  try {
    const customerId = getConstantFromLocalStorage(LS_COMPANY_CUSTOMER_ID);
    const params = [API_PROFILE_INCLUDE_GROUP_PARAM, API_INCLUDE_RIGHT_PARAM];
    if (customerId) {
      const uri = "/tenant/{customer_id}/users/{user_name}" /* userProfile */.replace("{customer_id}", customerId).replace("{user_name}", btoa(userName)) + "?" + params.join("&");
      const response = await Api.get("user" /* user */, uri);
      const currentUser = await response.json();
      setAdditionalUserFields(currentUser);
      const type = GET_MY_USER_PROFILE_ON_INIT_SUCCESS;
      dispatch({ type, currentUser });
    } else {
      dispatch({ type: GET_MY_USER_PROFILE_ON_INIT_FAIL, error: 3 /* customerIdError */ });
    }
  } catch (error) {
    reportError(error, "Error getting current user's profile:");
    if (error.code === NETWORK_ERROR) {
      dispatch({ type: GET_MY_USER_PROFILE_ON_INIT_FAIL, error: 0 /* networkError */ });
    } else {
      dispatch({ type: GET_MY_USER_PROFILE_ON_INIT_FAIL, error: 1 /* usersNotFound */ });
    }
  }
}, "initProfile");
var getMyProfile = /* @__PURE__ */ __name((includeRights = false) => async (dispatch) => {
  const currentCredentials = await Auth3.currentSession();
  const userName = currentCredentials.getIdToken().payload.email;
  dispatch({ type: GET_MY_USER_PROFILE_START });
  try {
    const customerId = getConstantFromLocalStorage(LS_COMPANY_CUSTOMER_ID);
    const params = [API_PROFILE_INCLUDE_GROUP_PARAM];
    if (customerId) {
      if (includeRights) {
        params.push(API_INCLUDE_RIGHT_PARAM);
      }
      const uri = "/tenant/{customer_id}/users/{user_name}" /* userProfile */.replace("{customer_id}", customerId).replace("{user_name}", btoa(userName)) + "?" + params.join("&");
      const response = await Api.get("user" /* user */, uri);
      const myProfile = await response.json();
      setAdditionalUserFields(myProfile);
      const type = GET_MY_USER_PROFILE_SUCCESS;
      dispatch({ type, myProfile });
    } else {
      dispatch({ type: GET_MY_USER_PROFILE_FAIL, error: 3 /* customerIdError */ });
    }
  } catch (error) {
    reportError(error, "Error getting my profile:");
    if (error.code === NETWORK_ERROR) {
      dispatch({ type: GET_MY_USER_PROFILE_FAIL, error: 0 /* networkError */ });
    } else {
      dispatch({ type: GET_MY_USER_PROFILE_FAIL, error: 1 /* usersNotFound */ });
    }
  }
}, "getMyProfile");
var toggleUserActivation = /* @__PURE__ */ __name((isActive, userName) => async (dispatch) => {
  try {
    const customerId = getConstantFromLocalStorage(LS_COMPANY_CUSTOMER_ID);
    if (customerId) {
      const uri = "/tenant/{customer_id}/users/activate/{user_name}" /* userActivation */.replace("{user_name}", Buffer2.from(userName).toString("base64")).replace("{customer_id}", customerId);
      const body = { active: isActive };
      await Api.patch("user" /* user */, uri, body);
      dispatch({ type: TOGGLE_USER_ACTIVATION_SUCCESS });
    } else {
      dispatch({ type: TOGGLE_USER_ACTIVATION_FAIL, error: 3 /* customerIdError */ });
    }
  } catch (error) {
    reportError(error, "Error toggling user activation(deactivation):");
    dispatch({ type: TOGGLE_USER_ACTIVATION_FAIL, error: error.code });
  }
}, "toggleUserActivation");
var toggleGroupActivation = /* @__PURE__ */ __name((isActive, groupId, groupName) => async (dispatch) => {
  try {
    const customerId = getConstantFromLocalStorage(LS_COMPANY_CUSTOMER_ID);
    if (customerId) {
      const uri = "/tenant/{customer_id}/groups/activate/{group_id}" /* groupActivation */.replace("{group_id}", groupId).replace("{customer_id}", customerId);
      const body = { active: isActive };
      await Api.patch("user" /* user */, uri, body);
      dispatch({ type: TOGGLE_GROUP_ACTIVATION_SUCCESS });
      if (isActive) {
        dispatch(
          addNotification({
            type: NotificationType2.Ok,
            content: i18n_default.t("profile.NotifyGroupActivated", { groupName })
          })
        );
      } else {
        dispatch(
          addNotification({
            type: NotificationType2.Ok,
            content: i18n_default.t("profile.NotifyGroupDeactivated", { groupName })
          })
        );
      }
    } else {
      dispatch({ type: TOGGLE_GROUP_ACTIVATION_FAIL, error: 3 /* customerIdError */ });
      dispatch(
        addNotification({
          type: NotificationType2.Alarm,
          content: i18n_default.t("profile.NotifyActivationFailed")
        })
      );
    }
  } catch (error) {
    reportError(error, "Error toggling group activation(deavtivation):");
    dispatch({ type: TOGGLE_GROUP_ACTIVATION_FAIL, error: error.code });
  }
}, "toggleGroupActivation");
var editProfile = /* @__PURE__ */ __name((userProfile) => async (dispatch) => {
  const body = {
    pin: userProfile.pin,
    phone: userProfile.phone,
    tz: userProfile.tz,
    picture: userProfile.picture,
    last_name: userProfile.last_name,
    locale: userProfile.locale,
    first_name: userProfile.first_name,
    email: userProfile.user_name
  };
  try {
    const customerId = getConstantFromLocalStorage(LS_COMPANY_CUSTOMER_ID);
    if (customerId) {
      const uri = "/tenant/{customer_id}/users/{user_name}" /* setUpProfile */.replace("{user_name}", Buffer2.from(userProfile.user_name).toString("base64")).replace("{customer_id}", customerId);
      const response = await Api.put("user" /* user */, uri, body).then((res) => res.json());
      if (response.success) {
        if (localStorage.getItem(LS_USERNAME) == body.email && localStorage.getItem(LS_LOCALE) != body.locale) {
          dispatch(changeLanguage(body.locale));
        }
        dispatch({ type: EDIT_PROFILE_SUCCESS, payload: body });
      }
    } else {
      dispatch({ type: EDIT_PROFILE_FAIL, error: 3 /* customerIdError */ });
    }
  } catch (error) {
    reportError(error, "Error editing profile:");
    dispatch({ type: EDIT_PROFILE_FAIL, error: error.code });
  }
}, "editProfile");
var getGroups = /* @__PURE__ */ __name(() => async (dispatch) => {
  dispatch({ type: GET_GROUP_LIST_START });
  try {
    const customerId = getConstantFromLocalStorage(LS_COMPANY_CUSTOMER_ID);
    if (customerId) {
      const uri = "/tenant/{customer_id}/groups" /* companyGroups */.replace("{customer_id}", customerId);
      const response = await Api.get("user" /* user */, uri);
      const groupList = await response.json();
      dispatch({ type: GET_GROUP_LIST_SUCCESS, groups: groupList.groups });
    } else {
      dispatch({ type: GET_GROUP_LIST_FAIL, error: 3 /* customerIdError */ });
    }
  } catch (error) {
    reportError(error, "Error getting groups:");
    dispatch({ type: GET_GROUP_LIST_FAIL, error: error.code });
  }
}, "getGroups");
var inviteUsers = /* @__PURE__ */ __name((invitedUsers, dispatcher, name) => async (dispatch) => {
  try {
    const customerId = getConstantFromLocalStorage(LS_COMPANY_CUSTOMER_ID);
    if (customerId) {
      const uri = "/tenant/{customer_id}/users/invite" /* inviteUsers */.replace("{customer_id}", customerId);
      const response = await Api.post("user" /* user */, uri, invitedUsers);
      const invitationResult = await response.json();
      if (dispatcher === INVITE_USER_FROM_USER) {
        if (invitationResult?.rejected.length > 0) {
          dispatch(
            addNotification({
              type: NotificationType2.Alarm,
              content: i18n_default.t("profile.NotifyInvitationsRejected", { amount: invitationResult.rejected.length })
            })
          );
          return invitationResult.rejected;
        } else {
          dispatch({ type: INVITE_USERS_SUCCESS });
          dispatch(
            addNotification({
              type: NotificationType2.Ok,
              content: i18n_default.t("profile.NotifyInvitationsSent", { amount: invitationResult.accepted.length })
            })
          );
          return [];
        }
      } else if (dispatcher === INVITE_USER_FROM_GROUP) {
        dispatch({ type: ADD_GROUP_MEMBERS_SUCCESS });
        return [];
      } else if (dispatcher === ADD_GROUP_TO_USER) {
        if (invitationResult?.rejected.length > 0) {
          dispatch(
            addNotification({
              type: NotificationType2.Alarm,
              content: i18n_default.t("profile.NotifyInvitationsRejected", { amount: invitationResult.rejected.length })
            })
          );
          return invitationResult.rejected;
        } else {
          dispatch({ type: INVITE_USERS_SUCCESS });
          dispatch(
            addNotification({
              type: NotificationType2.Ok,
              content: i18n_default.t("addGroupsToUser.NotifyInvitationSent", { name })
            })
          );
          return [];
        }
      }
    } else {
      dispatch({ type: INVITE_USERS_FAIL, error: 3 /* customerIdError */ });
      dispatch(
        addNotification({
          type: NotificationType2.Alarm,
          content: i18n_default.t("profile.NotifyInvitationsFailed")
          // @TODO: What is the reasoning behind this and implement correct error message
        })
      );
    }
  } catch (error) {
    reportError(error, "Error inviting groups:");
    dispatch({ type: INVITE_USERS_FAIL, error: error.code });
    dispatch(
      addNotification({
        type: NotificationType2.Alarm,
        content: i18n_default.t("profile.NotifyInvitationsRejected")
        // @TODO: What is the reasoning behind this and implement correct error message
      })
    );
  }
}, "inviteUsers");
var deleteUser = /* @__PURE__ */ __name((userName) => async (dispatch) => {
  try {
    const customerId = getConstantFromLocalStorage(LS_COMPANY_CUSTOMER_ID);
    if (customerId) {
      const uri = "/tenant/{customer_id}/users/{user_name}" /* deleteUser */.replace("{user_name}", Buffer2.from(userName).toString("base64")).replace("{customer_id}", customerId);
      await Api.delete("user" /* user */, uri);
      dispatch({ type: DELETE_USER_SUCCESS });
    } else {
      dispatch({ type: DELETE_USER_FAIL, error: 3 /* customerIdError */ });
    }
  } catch (error) {
    reportError(error, "Error deleting users:");
    dispatch({ type: DELETE_USER_FAIL, error: error.code });
  }
}, "deleteUser");
var createGroups = /* @__PURE__ */ __name((group) => async (dispatch) => {
  const body = {
    group_name: group.group_name,
    description: group.description
  };
  try {
    const customerId = getConstantFromLocalStorage(LS_COMPANY_CUSTOMER_ID);
    if (customerId) {
      const uri = "/tenant/{customer_id}/groups" /* companyGroups */.replace("{customer_id}", customerId);
      const response = await Api.post("user" /* user */, uri, body);
      await response.json();
      dispatch({ type: CREATE_GROUPS_SUCCESS });
    } else {
      dispatch({ type: CREATE_GROUPS_FAIL, error: 3 /* customerIdError */ });
    }
  } catch (error) {
    reportError(error, "Error creating groups:");
    dispatch({ type: CREATE_GROUPS_FAIL, error: error.code });
  }
}, "createGroups");
var getGroupsDetails = /* @__PURE__ */ __name((groupId, includeRights) => async (dispatch) => {
  dispatch({ type: GET_GROUP_DETAILS_START });
  if (typeof includeRights === "undefined") {
    includeRights = false;
  }
  try {
    const customerId = getConstantFromLocalStorage(LS_COMPANY_CUSTOMER_ID);
    if (customerId) {
      let uri = "";
      if (includeRights) {
        uri = "/tenant/{customer_id}/groups/{group_id}" /* groupsDetails */.replace("{customer_id}", customerId).replace("{group_id}", groupId) + "?" + API_INCLUDE_RIGHT_PARAM;
      } else {
        uri = "/tenant/{customer_id}/groups/{group_id}" /* groupsDetails */.replace("{customer_id}", customerId).replace("{group_id}", groupId);
      }
      const response = await Api.get("user" /* user */, uri);
      const { ok } = response;
      if (!ok) {
        throw new Error(`Could not fetch group details @ ${uri}`);
      }
      const groupDetails = await response.json();
      dispatch({ type: GET_GROUP_DETAILS_SUCCESS, groupDetails });
    } else {
      dispatch({ type: GET_GROUP_DETAILS_FAIL, error: 3 /* customerIdError */ });
    }
  } catch (error) {
    reportError(error, "Error getting group details:");
    if (error.code === NETWORK_ERROR) {
      dispatch({ type: GET_GROUP_DETAILS_FAIL, error: 0 /* networkError */ });
    } else {
      dispatch({ type: GET_GROUP_DETAILS_FAIL, error: 2 /* groupNotFound */ });
    }
  }
}, "getGroupsDetails");
var editGroup = /* @__PURE__ */ __name((group) => async (dispatch) => {
  const body = {};
  if (group.group_name != null) {
    body["group_name"] = group.group_name;
  }
  if (group.description != null) {
    body["description"] = group.description;
  }
  if (group.rights != null) {
    body["rights"] = group.rights;
  }
  if (group.rights_global != null) {
    body["rights_global"] = group.rights_global;
  }
  try {
    const customerId = getConstantFromLocalStorage(LS_COMPANY_CUSTOMER_ID);
    if (customerId) {
      const uri = "/tenant/{customer_id}/groups/{group_id}" /* editGroup */.replace("{customer_id}", customerId).replace("{group_id}", group.group_id);
      const response = await Api.patch("user" /* user */, uri, body);
      await response.json();
      dispatch({ type: EDIT_GROUP_SUCCESS });
    } else {
      dispatch({ type: EDIT_GROUP_FAIL, error: 3 /* customerIdError */ });
    }
  } catch (error) {
    reportError(error, "Error editing group:");
    dispatch({ type: EDIT_GROUP_FAIL, error: error.code });
  }
}, "editGroup");
var deleteGroup = /* @__PURE__ */ __name((groupId) => async (dispatch) => {
  try {
    const customerId = getConstantFromLocalStorage(LS_COMPANY_CUSTOMER_ID);
    if (customerId) {
      const uri = "/tenant/{customer_id}/groups/{group_id}" /* deleteGroup */.replace("{customer_id}", customerId).replace("{group_id}", groupId);
      const response = await Api.delete("user" /* user */, uri);
      await response.json();
      dispatch({ type: DELETE_GROUP_SUCCESS });
    } else {
      dispatch({ type: DELETE_GROUP_FAIL, error: 3 /* customerIdError */ });
    }
  } catch (error) {
    reportError(error, "Error deleting a group:");
    dispatch({ type: DELETE_GROUP_FAIL, error: error.code });
  }
}, "deleteGroup");
var deleteGroupUsers = /* @__PURE__ */ __name((users, groupId) => async (dispatch) => {
  try {
    const customerId = getConstantFromLocalStorage(LS_COMPANY_CUSTOMER_ID);
    if (customerId) {
      const uri = "/tenant/{customer_id}/groups/{group_id}/users/delete" /* deleteUsersFromGroup */.replace("{customer_id}", customerId).replace("{group_id}", groupId);
      const response = await Api.post("user" /* user */, uri, { users });
      await response.json();
      dispatch({ type: DELETE_GROUP_USERS_SUCCESS });
    } else {
      dispatch({ type: DELETE_GROUP_USERS_FAIL, error: 3 /* customerIdError */ });
    }
  } catch (error) {
    reportError(error, "Error deleting users of a group:");
    dispatch({ type: DELETE_GROUP_USERS_FAIL, error: error.code });
  }
}, "deleteGroupUsers");
var profileDispatchActions = {
  getUsers,
  getUserProfile,
  toggleUserActivation,
  createGroups,
  editProfile,
  getGroups,
  inviteUsers,
  getMyProfile,
  deleteUser,
  getGroupsDetails,
  editGroup,
  deleteGroup,
  toggleGroupActivation,
  deleteGroupUsers
};

// ../vlncc-frontend/src/store/actions/auth.ts
import { Auth as Auth4 } from "aws-amplify";
import { Buffer as Buffer3 } from "buffer";
import { NotificationType as NotificationType3 } from "@vaisala-rockhopper/components";

// ../vlncc-frontend/src/store/dialog.ts
import { createSlice as createSlice2 } from "@reduxjs/toolkit";
var initialState3 = {
  dialog: void 0
};
var dialogSlice = createSlice2({
  name: "Dialog",
  initialState: initialState3,
  reducers: {
    showDialog(state, action) {
      state.dialog = action.payload;
    },
    hideDialog(state) {
      state.dialog = void 0;
    }
  }
});
var selectDialog = /* @__PURE__ */ __name((state) => state.dialog.dialog, "selectDialog");
var { showDialog, hideDialog } = dialogSlice.actions;
var dialog_default = dialogSlice.reducer;

// ../vlncc-frontend/src/store/actions/auth.ts
var convertEmail = /* @__PURE__ */ __name((email) => email.toLowerCase(), "convertEmail");
var localStorageCleanUp = /* @__PURE__ */ __name(() => {
  localStorage.removeItem(LS_REGION);
  localStorage.removeItem(LS_USER_POOL_ID);
  localStorage.removeItem(LS_USER_POOL_WEB_CLIENT_ID);
  localStorage.removeItem(LS_IS_COMPANY_ACTIVE);
  localStorage.removeItem(LS_COMPANY_ONBOARD);
  localStorage.removeItem(LS_COMPANY_ADDRESS);
  localStorage.removeItem(LS_COMPANY_NAME);
  localStorage.removeItem(LS_COMPANY_ACCOUNT_ID);
  localStorage.removeItem(LS_COMPANY_CUSTOMER_ID);
  localStorage.removeItem(LS_COMPANY_PROFILE_COMPLETION_FLAG);
  localStorage.removeItem(LS_TIME_ZONE);
  localStorage.removeItem(LS_USERNAME);
  localStorage.removeItem(LS_DATA_RETENTION_MONTHS);
}, "localStorageCleanUp");
var getUserPoolConfig = /* @__PURE__ */ __name((companyAlias) => async () => {
  const url = "/pool/{companyAlias}" /* tenantPool */.replace(`{${LS_COMPANY_ALIAS}}`, companyAlias);
  const response = await Api.getUnauthorized("user" /* user */, url);
  if (!response.ok) {
    throw new Error(`Could not validate user pool for ${companyAlias}`);
  }
  const config = await response.json();
  localStorage.setItem(LS_REGION, config.region);
  localStorage.setItem(LS_USER_POOL_ID, config.pool_id);
  localStorage.setItem(LS_USER_POOL_WEB_CLIENT_ID, config.pool_client_id);
  localStorage.setItem(LS_COMPANY_ALIAS, companyAlias);
  await Api.setupAmplify(config);
}, "getUserPoolConfig");
var login = /* @__PURE__ */ __name((username, password, companyAlias, isFirstLogin) => async (dispatch) => {
  dispatch({ type: LOGIN });
  try {
    await dispatch(getUserPoolConfig(companyAlias));
    return dispatch(loginAuthentication(username, password, isFirstLogin, companyAlias));
  } catch (error) {
    reportError(error, "Error in catch block - auth (94)");
    localStorageCleanUp();
    if (error.code === NETWORK_ERROR) {
      dispatch({ type: LOGIN_ERROR, error: 2 /* networkError */ });
    } else {
      if (isFirstLogin) {
        dispatch({ type: LOGIN_ERROR, error: 3 /* firstLoginInvalidCredentialError */ });
      } else {
        dispatch({ type: LOGIN_ERROR, error: 0 /* invalidUserCredentialError */ });
      }
    }
  }
}, "login");
var loginAuthentication = /* @__PURE__ */ __name((userName, password, isFirstLogin, companyAlias) => async (dispatch) => {
  try {
    const user = await Auth4.signIn(userName, password);
    if (user.challengeName === "NEW_PASSWORD_REQUIRED" /* NEW_PASSWORD_REQUIRED */) {
      dispatch({ type: SIGNUP_START });
    } else if (user.challengeName === "SMS_MFA" /* SMS_MFA */) {
      dispatch({
        type: MFA_START,
        mfaUsername: userName,
        mfaPassword: Buffer3.from(password).toString("base64"),
        mfaUser: user
      });
    } else {
      localStorage.setItem(LS_COMPANY_ALIAS, companyAlias);
      await dispatch(getCompanyInfo(companyAlias));
      if (typeof user.attributes.phone_number_verified !== "undefined" && user.attributes.phone_number_verified === true) {
        dispatch({ type: LOGIN_SUCCESS });
      } else {
        localStorage.setItem(LS_COMPANY_PROFILE_COMPLETION_FLAG, "false");
        dispatch({ type: USER_PROFILE_SETUP, userName });
      }
    }
  } catch (error) {
    reportError(error, "Error in catch block - auth (136)");
    localStorageCleanUp();
    if (error.code === NETWORK_ERROR) {
      dispatch({ type: LOGIN_ERROR, error: 2 /* networkError */ });
    } else {
      if (isFirstLogin) {
        dispatch({ type: LOGIN_ERROR, error: 3 /* firstLoginInvalidCredentialError */ });
      } else {
        dispatch({ type: LOGIN_ERROR, error: 0 /* invalidUserCredentialError */ });
      }
    }
  }
}, "loginAuthentication");
var logout = /* @__PURE__ */ __name((globalSignout = false, error = null) => async (dispatch) => {
  try {
    localStorageCleanUp();
    if (globalSignout) {
      await Auth4.signOut({ global: true });
    } else {
      await Auth4.signOut();
    }
  } catch (error2) {
    reportError(error2, "Error when trying to logout:");
  }
  dispatch(hideDialog());
  dispatch(clearNotifications());
  dispatch({ type: LOGOUT, error });
}, "logout");
var getLanguageInfo = /* @__PURE__ */ __name(() => async (dispatch) => {
  let locale = getConstantFromLocalStorage(LS_LOCALE);
  if (typeof locale === "undefined") {
    locale = DEFAULT_LANGUAGE;
    localStorage.setItem(LS_LOCALE, locale);
  }
  if (i18n_default.language && i18n_default.language !== locale) {
    if (isValidLanguage(locale)) {
      await i18n_default.changeLanguage(locale);
    } else {
      locale = DEFAULT_LANGUAGE;
    }
  }
  dispatch({ type: GeneralActionType.CHANGE_LANGUAGE, payload: locale });
}, "getLanguageInfo");
var getAuthInfo = /* @__PURE__ */ __name(() => async (dispatch) => {
  try {
    const user = await Auth4.currentSession();
    const timeZone = user.getIdToken().payload.zoneinfo;
    const username = user.getIdToken().payload.email;
    localStorage.setItem(LS_TIME_ZONE, timeZone);
    localStorage.setItem(LS_USERNAME, username);
    const isSetUpProfileCompleted = getConstantFromLocalStorage(LS_COMPANY_PROFILE_COMPLETION_FLAG);
    await dispatch(initProfile());
    if (typeof isSetUpProfileCompleted !== "undefined" && JSON.parse(isSetUpProfileCompleted) === false) {
      dispatch({ type: USER_PROFILE_SETUP, userName: user.getAccessToken().payload.username });
    } else {
      dispatch({ type: LOGIN_SUCCESS });
    }
  } catch (error) {
    reportError(error, "Error when trying to get auth info:");
  }
}, "getAuthInfo");
var startChangePassword = /* @__PURE__ */ __name(() => (dispatch) => dispatch({ type: CHANGING_PASSWORD_START }), "startChangePassword");
var changePassword = /* @__PURE__ */ __name((oldPassword, newPassword) => async (dispatch) => {
  dispatch({ type: CHANGING_PASSWORD });
  try {
    const user = await Auth4.currentAuthenticatedUser();
    await Auth4.changePassword(user, oldPassword, newPassword);
    dispatch({ type: CHANGING_PASSWORD_SUCCESS });
    const customerId = localStorage.getItem(LS_COMPANY_CUSTOMER_ID);
    const currentCredentials = await Auth4.currentSession();
    const userName = currentCredentials.getIdToken().payload.email;
    dispatch(sendChangePasswordConfirmation(customerId, userName));
    await dispatch(logout(true));
  } catch (error) {
    reportError(error, "Error when changing password: ");
    dispatch({ type: CHANGING_PASSWORD_FAIL, error: error.code });
  }
}, "changePassword");
var sendChangePasswordConfirmation = /* @__PURE__ */ __name((customerId, userName) => async (dispatch) => {
  try {
    const body = { attribute: "password" };
    if (customerId !== null && typeof customerId !== "undefined" && userName !== null) {
      const uri = "/tenant/{customer_id}/users/{user_name}/sendemail" /* sendEmail */.replace("{user_name}", Buffer3.from(userName).toString("base64")).replace("{customer_id}", customerId);
      await Api.put("user" /* user */, uri, body);
      dispatch({ type: SEND_RESET_PASSWORD_EMAIL_SUCCESS });
    } else {
      dispatch({ type: SEND_RESET_PASSWORD_EMAIL_FAIL, error: "Missing customer id or username" });
    }
  } catch (error) {
    reportError(error, 'Error sending "Change Password" confirmation:');
    dispatch({ type: SEND_RESET_PASSWORD_EMAIL_FAIL, error: error.code });
  }
}, "sendChangePasswordConfirmation");
var changePasswordCompleted = /* @__PURE__ */ __name(() => (dispatch) => dispatch({ type: CHANGING_PASSWORD_COMPLETED }), "changePasswordCompleted");
var sendResetCodeInit = /* @__PURE__ */ __name(() => (dispatch) => dispatch({ type: SENDING_RESET_CODE_INIT }), "sendResetCodeInit");
var sendResetCode = /* @__PURE__ */ __name((userName, companyAlias) => async (dispatch) => {
  dispatch({ type: SENDING_RESET_CODE });
  try {
    await dispatch(getUserPoolConfig(companyAlias));
    await Auth4.forgotPassword(convertEmail(userName));
    dispatch({
      type: SENDING_RESET_CODE_SUCCESS
    });
  } catch (error) {
    reportError(error, "Error sending reset code:");
    localStorageCleanUp();
    dispatch({ type: SENDING_RESET_CODE_FAIL, error: error.code });
  }
}, "sendResetCode");
var resetPassword = /* @__PURE__ */ __name((userName, resetCode, newPassword) => async (dispatch) => {
  try {
    await dispatch(getUserPoolConfig(getConstantFromLocalStorage(LS_COMPANY_ALIAS)));
  } catch (error) {
    reportError(error, "Error resetting password:");
    return dispatch({ type: RESETTING_PASSWORD_FAIL, error: "CodeMismatchException" /* CodeMismatchException */ });
  }
  if (userName && newPassword && resetCode) {
    dispatch({ type: RESETTING_PASSWORD });
    try {
      await Auth4.forgotPasswordSubmit(convertEmail(userName), resetCode, newPassword);
      dispatch(
        addNotification({
          type: NotificationType3.Ok,
          content: i18n_default.t("auth.passwordChanged")
        })
      );
      dispatch({ type: RESETTING_PASSWORD_SUCCESS });
    } catch (error) {
      reportError(error, "Error resetting password:");
      dispatch({ type: RESETTING_PASSWORD_FAIL, error: error.code });
    }
  }
}, "resetPassword");
var setUpPasswordPolicy = /* @__PURE__ */ __name(() => async (dispatch) => {
  dispatch({ type: PASSWORD_POLICY_START });
  try {
    const companyAlias = getConstantFromLocalStorage(LS_COMPANY_ALIAS);
    if (!companyAlias) {
      throw new Error("Company alias is not available in local storage.");
    }
    const url = "/pool/{companyAlias}" /* tenantPool */.replace(`{${LS_COMPANY_ALIAS}}`, companyAlias);
    const response = await Api.getUnauthorized("user" /* user */, url);
    if (!response.ok) {
      throw new Error(`Status ${response.status} was returned from user pool for ${companyAlias}`);
    }
    const config = await response.json();
    if (typeof config !== "undefined") {
      dispatch({
        type: PASSWORD_POLICY_SUCCESS,
        passwordLength: config.pool_min_length,
        LowerCaseRequired: config.pool_require_lowercase,
        NumberRequired: config.pool_require_numbers,
        SpecialCharRequired: config.pool_require_symbols,
        UpperCaseRequired: config.pool_require_uppercase
      });
    }
  } catch (error) {
    reportError(error, "Error setting up password policy:");
    dispatch({ type: PASSWORD_POLICY_FAIL, error: error.code });
  }
}, "setUpPasswordPolicy");
var setUpProfile = /* @__PURE__ */ __name((userProfile) => async (dispatch) => {
  const body = {
    pin: userProfile.pin,
    phone: userProfile.phone,
    tz: userProfile.tz,
    picture: userProfile.picture,
    last_name: userProfile.last_name,
    locale: userProfile.locale,
    first_name: userProfile.first_name,
    email: userProfile.user_name
  };
  try {
    const customerId = getConstantFromLocalStorage(LS_COMPANY_CUSTOMER_ID);
    if (customerId) {
      const uri = "/tenant/{customer_id}/users/{user_name}" /* setUpProfile */.replace("{user_name}", Buffer3.from(userProfile.user_name).toString("base64")).replace("{customer_id}", customerId);
      await Api.put("user" /* user */, uri, body);
      localStorage.removeItem(LS_COMPANY_PROFILE_COMPLETION_FLAG);
      dispatch({ type: SETUP_PROFILE_SUCCESS });
    } else {
      logout(false);
    }
  } catch (error) {
    reportError(error, "Error setting up profile:");
    logout(false);
  }
}, "setUpProfile");
var setUpPassword = /* @__PURE__ */ __name((userName, oldPassword, newPassword) => async (dispatch) => {
  dispatch({ type: SETUP_PASSWORD_START });
  let phoneNumVerifies;
  let user;
  try {
    user = await Auth4.signIn(userName, oldPassword);
    phoneNumVerifies = user.challengeParam.userAttributes.phone_number_verified;
    if (user.challengeName === "NEW_PASSWORD_REQUIRED" /* NEW_PASSWORD_REQUIRED */) {
      await Auth4.completeNewPassword(
        user,
        // the Cognito User Object
        newPassword
        // the new password
        // OPTIONAL, the required attributes
        // Commented out because it causes the exception {"__type":"NotAuthorizedException","message":"Cannot modify an already provided email"} on dev
        // { email: userName }
      );
      if (typeof phoneNumVerifies !== "undefined" && phoneNumVerifies === "true") {
        if (user.challengeName === "SMS_MFA" /* SMS_MFA */) {
          await dispatch({
            type: MFA_START,
            mfaUsername: userName,
            mfaPassword: Buffer3.from(newPassword).toString("base64"),
            mfaUser: user
          });
        } else {
          await dispatch({ type: SETUP_PASSWORD_SUCCESS_WITH_PROFILE_COMPLETED });
        }
      } else {
        await dispatch(getCompanyInfo(localStorage.getItem(LS_COMPANY_ALIAS)));
        localStorage.setItem(LS_COMPANY_PROFILE_COMPLETION_FLAG, "false");
        await dispatch({ type: SETUP_PASSWORD_SUCCESS_WITHOUT_PROFILE_COMPLETED, userName });
      }
    }
  } catch (error) {
    if (error?.code === "InvalidParameterException" && error?.message === "Invalid device key given.") {
      try {
        console.log("Cancel current login");
        await Auth4.signOut();
      } catch (e) {
        console.error(e);
        console.log("Swallowing auth signout as it will probably fail");
      }
      try {
        user = await Auth4.signIn(userName, newPassword);
        localStorage.setItem(LS_COMPANY_PROFILE_COMPLETION_FLAG, "false");
        await dispatch(getCompanyInfo(localStorage.getItem(LS_COMPANY_ALIAS)));
        await dispatch({ type: SETUP_PASSWORD_SUCCESS_WITHOUT_PROFILE_COMPLETED, userName });
      } catch (e) {
        reportError(error, "Error setting up a password:");
        dispatch({ type: SETUP_PASSWORD_FAIL, error: error.code });
      }
    } else {
      reportError(error, "Error setting up a password:");
      dispatch({ type: SETUP_PASSWORD_FAIL, error: error.code });
    }
  }
}, "setUpPassword");
var getCompanyInfo = /* @__PURE__ */ __name((companyAlias) => async (dispatch) => {
  try {
    const uri = "/tenants/get/{companyAlias}" /* tenantInfo */.replace(`{${LS_COMPANY_ALIAS}}`, companyAlias);
    const response = await Api.get("tenant" /* tenant */, uri);
    const tenantInfo = await response.json();
    localStorage.setItem(LS_IS_COMPANY_ACTIVE, tenantInfo.active);
    localStorage.setItem(LS_COMPANY_ONBOARD, tenantInfo.onboard);
    localStorage.setItem(LS_COMPANY_ADDRESS, tenantInfo.address);
    localStorage.setItem(LS_COMPANY_NAME, tenantInfo.name);
    localStorage.setItem(LS_COMPANY_ACCOUNT_ID, tenantInfo.account_id);
    localStorage.setItem(LS_COMPANY_CUSTOMER_ID, tenantInfo.customer_id);
    localStorage.setItem(LS_DATA_RETENTION_MONTHS, tenantInfo.data_retention_months);
    dispatch({ type: LOADING_TENANT_INFO_SUCCESS });
  } catch (error) {
    reportError(error, "Error getting company info:");
    dispatch({ type: LOADING_TENANT_INFO_FAIL });
  }
}, "getCompanyInfo");
var setUpMFA = /* @__PURE__ */ __name((mfa) => async (dispatch, getState) => {
  dispatch({ type: MFA_PREP });
  const cognitoUser = getState().auth.mfaUser;
  try {
    if (!cognitoUser) {
      throw new Error("The page may have been reloaded or the MFA requirements are otherwise misconfigured");
    }
    await Auth4.confirmSignIn(cognitoUser, mfa);
    await dispatch(getCompanyInfo(localStorage.getItem(LS_COMPANY_ALIAS)));
    return dispatch({ type: MFA_SUCCESS });
  } catch (error) {
    reportError(error, "Error setting up MFA:");
    dispatch({ type: MFA_FAIL, error: error.code || "CodeMismatchException" /* CodeMismatchException */ });
  }
}, "setUpMFA");
var resendMFA = /* @__PURE__ */ __name(() => async (dispatch, getState) => {
  const { mfaUsername, mfaPassword } = getState().auth;
  try {
    const password = Buffer3.from(mfaPassword, "base64").toString("ascii");
    const user = await Auth4.signIn(mfaUsername, password);
    if (user.challengeName === "SMS_MFA") {
      dispatch({
        type: MFA_START,
        mfaUsername,
        mfaPassword: Buffer3.from(password).toString("base64"),
        mfaUser: user
      });
    } else {
      await dispatch({ type: LOGIN_SUCCESS });
    }
  } catch (error) {
    reportError(error, "Error resending MFA:");
    dispatch({ type: RESEND_MFA_FAIL });
  }
}, "resendMFA");
var MFABackToLogin = /* @__PURE__ */ __name(() => async (dispatch) => {
  dispatch({ type: MFA_END });
  localStorageCleanUp();
}, "MFABackToLogin");
var setAuthError = /* @__PURE__ */ __name((error) => async (dispatch) => {
  dispatch({ type: SET_AUTH_ERROR, error });
}, "setAuthError");
var setResettingPasswordError = /* @__PURE__ */ __name((error) => async (dispatch) => {
  dispatch({ type: SET_RESETTING_PASSWORD_ERROR, error });
}, "setResettingPasswordError");
var authDispatchActions = {
  login,
  logout,
  changePassword,
  getAuthInfo,
  getLanguageInfo,
  changePasswordCompleted,
  startChangePassword,
  sendResetCodeInit,
  sendResetCode,
  resetPassword,
  setUpPasswordPolicy,
  setUpProfile,
  setUpPassword,
  getCompanyInfo,
  setUpMFA,
  resendMFA,
  MFABackToLogin,
  setAuthError,
  setResettingPasswordError
};

// ../vlncc-frontend/src/store/actions/events.ts
import qs2 from "qs";

// ../vlncc-frontend/src/events/events.ts
import { SCHEMA_OPTIONS_SYMBOL } from "morphism";
var schemaEventInterface = {
  [SCHEMA_OPTIONS_SYMBOL]: { undefinedValues: { strip: true } },
  eventId: "event_id",
  object: "obj",
  action: "action",
  source: "source",
  category: "category",
  affectedlocation: "location",
  parameters: {
    path: "parameters",
    fn: (value) => value && Array.isArray(value) && value.length > 0 ? value.reduce((result, cur) => {
      result.push(cur[0]);
      return result;
    }, []).join(", ") : void 0
  },
  time: {
    path: "timestamp",
    fn: (value) => timestampToTimeString(parseInt(value))
  }
};
var schemaEventDetailInterface = {
  [SCHEMA_OPTIONS_SYMBOL]: { undefinedValues: { strip: true } },
  eventId: "event_id",
  object: "obj",
  source: "source",
  category: "category",
  action: "action",
  affectedlocation: "location",
  parameters: {
    path: "parameters",
    fn: (value) => value && Array.isArray(value) && value.length > 0 ? value.map((para) => {
      const result = {};
      result["parameter"] = para[0];
      result["before"] = para[1];
      result["after"] = para[2];
      return result;
    }) : void 0
  },
  dateTime: {
    path: "timestamp",
    fn: (value) => timestampToTimeString(parseInt(value))
  }
};

// ../vlncc-frontend/src/store/actions/events.ts
import morphism from "morphism";
var getEvents = /* @__PURE__ */ __name((query) => async (dispatch) => {
  dispatch({ type: GET_EVENT_LIST_START });
  try {
    const customerId = getConstantFromLocalStorage(LS_COMPANY_CUSTOMER_ID);
    if (customerId) {
      const uri = "/tenant/{customer_id}/events" /* eventList */.replace("{customer_id}", customerId) + `?${qs2.stringify(query)}`;
      const response = await Api.get("events" /* events */, uri);
      const body = await response.json();
      const events = morphism(schemaEventInterface, body.events);
      const totalCount = body.found;
      dispatch({ type: GET_EVENT_LIST_SUCCESS, events });
      dispatch({ type: GET_EVENT_LIST_TOTAL_COUNT, totalCount });
    } else {
      dispatch({ type: GET_EVENT_LIST_FAIL, error: 1 /* customerIdError */ });
    }
  } catch (error) {
    reportError(error, "Error getting events:");
    dispatch({
      type: GET_EVENT_LIST_FAIL,
      error: 0 /* networkError */
    });
  }
}, "getEvents");
var getEventDetails = /* @__PURE__ */ __name((eventId, language) => async (dispatch) => {
  dispatch({ type: GET_EVENT_DETAIL_START });
  try {
    const customerId = getConstantFromLocalStorage(LS_COMPANY_CUSTOMER_ID);
    if (customerId) {
      const uri = "/tenant/{customer_id}/events/{event_id}" /* eventDetails */.replace("{customer_id}", customerId).replace("{event_id}", eventId) + `?locale=${language}`;
      const response = await Api.get("events" /* events */, uri);
      const body = await response.json();
      const eventDetail = morphism(schemaEventDetailInterface, body);
      dispatch({ type: GET_EVENT_DETAIL_SUCCESS, eventDetail });
    } else {
      dispatch({ type: GET_EVENT_DETAIL_FAIL, error: 1 /* customerIdError */ });
    }
  } catch (error) {
    reportError(error, "Error getting event details:");
    dispatch({
      type: GET_EVENT_DETAIL_FAIL,
      error: 0 /* networkError */
    });
  }
}, "getEventDetails");
var eventsDispatchActions = { getEvents, getEventDetails };

// ../vlncc-frontend/src/store/actions/reports.ts
var setReportLoadingState = /* @__PURE__ */ __name((isLoading) => (dispatch) => dispatch({ type: SET_REPORT_API_LOADING, loading: isLoading }), "setReportLoadingState");
var setReportIntervalDate = /* @__PURE__ */ __name((interval) => (dispatch) => dispatch({ type: SET_REPORT_INTERVAL_DATE, interval }), "setReportIntervalDate");
var setReportLocations = /* @__PURE__ */ __name((locations) => (dispatch) => dispatch({ type: SET_REPORT_LOCATIONS, locations }), "setReportLocations");
var setReportSelectedFormattedLocations = /* @__PURE__ */ __name((locations) => (dispatch) => dispatch({ type: SET_REPORT_SELECTED_FORMATTED_LOCATIONS, selectedFormattedLocations: locations }), "setReportSelectedFormattedLocations");
var setReportSelectedLocationsCustomProps = /* @__PURE__ */ __name((locations) => (dispatch) => dispatch({ type: SET_REPORT_SELECTED_LOCATIONS_CUSTOM_PROPS, locationsProps: locations }), "setReportSelectedLocationsCustomProps");
var setReportSelectedLocationsNum = /* @__PURE__ */ __name((number) => (dispatch) => dispatch({ type: SET_REPORT_SELECTED_LOCATIONS_NUM, selectedLocationsNum: number }), "setReportSelectedLocationsNum");
var setReportSelectedLocationsIDs = /* @__PURE__ */ __name((Ids) => (dispatch) => dispatch({ type: SET_REPORT_SELECTED_LOCATIONS_IDS, selectedLocationsIDs: Ids }), "setReportSelectedLocationsIDs");
var setReportGraphsNum = /* @__PURE__ */ __name((num) => (dispatch) => dispatch({ type: SET_REPORT_GRAPHS_NUM, graphsNum: num }), "setReportGraphsNum");
var setReportVisibleLocations = /* @__PURE__ */ __name((locations) => (dispatch) => dispatch({ type: SET_REPORT_VISIBLE_LOCATIONS, visibleLocations: locations }), "setReportVisibleLocations");
var setReportAssignedChartColors = /* @__PURE__ */ __name((colors) => (dispatch) => dispatch({ type: SET_REPORT_ASSIGNED_CHART_COLORS, assignedChartColors: colors }), "setReportAssignedChartColors");
var resetReportsState = /* @__PURE__ */ __name(() => (dispatch) => dispatch({ type: RESET_REPORTS_STATE }), "resetReportsState");
var reportsDispatchActions = {
  setReportLoadingState,
  setReportIntervalDate,
  setReportLocations,
  setReportSelectedFormattedLocations,
  setReportSelectedLocationsCustomProps,
  setReportSelectedLocationsNum,
  setReportSelectedLocationsIDs,
  setReportGraphsNum,
  setReportVisibleLocations,
  setReportAssignedChartColors,
  resetReportsState
};

// ../vlncc-frontend/src/store/reducers/profile.ts
var initialState4 = {
  userListLoading: false,
  groupListLoading: false,
  myProfileLoading: true,
  initProfileLoading: false,
  users: [],
  groups: [],
  userProfileLoading: true
};
function profileReducer(state = initialState4, action) {
  switch (action.type) {
    case GET_USER_LIST_START:
      return {
        ...state,
        userListLoading: true,
        userListError: void 0,
        isEditProfileSucceed: void 0,
        editProfileError: void 0
      };
    case GET_USER_LIST_SUCCESS:
      return { ...state, users: action.users, userListLoading: false };
    case GET_USER_LIST_FAIL:
      return { ...state, userListLoading: false, userListError: action.error };
    case GET_USER_PROFILE_START:
      return { ...state, userProfileLoading: true, userProfileError: void 0 };
    case GET_USER_PROFILE_SUCCESS:
      return { ...state, userProfile: action.userProfile, userProfileLoading: false };
    case GET_USER_PROFILE_FAIL:
      return { ...state, userProfileLoading: false, userProfileError: action.error };
    case GET_MY_USER_PROFILE_ON_INIT:
      return { ...state, initProfileLoading: true, initProfileError: void 0 };
    case GET_MY_USER_PROFILE_ON_INIT_SUCCESS:
      return { ...state, currentUser: action.currentUser, initProfileLoading: false };
    case GET_MY_USER_PROFILE_ON_INIT_FAIL:
      return { ...state, initProfileLoading: false, initProfileError: action.error };
    case GET_MY_USER_PROFILE_START:
      return { ...state, myProfileLoading: true, userProfileError: void 0 };
    case GET_MY_USER_PROFILE_SUCCESS:
      return { ...state, myProfile: action.myProfile, myProfileLoading: false };
    case GET_MY_USER_PROFILE_FAIL:
      return { ...state, myProfileLoading: false, userProfileError: action.error };
    case TOGGLE_USER_ACTIVATION_SUCCESS:
      return { ...state, userRefresh: !state.userRefresh };
    case TOGGLE_USER_ACTIVATION_FAIL:
      return { ...state, userActivationError: action.error };
    case EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        userRefresh: !state.userRefresh,
        isEditProfileSucceed: true,
        currentUser: { ...state.currentUser, ...action.payload }
      };
    case EDIT_PROFILE_FAIL:
      return { ...state, editProfileError: action.error };
    case GET_GROUP_LIST_START:
      return { ...state, groupListLoading: true };
    case GET_GROUP_LIST_SUCCESS:
      return { ...state, groupListLoading: false, groups: action.groups };
    case GET_GROUP_LIST_FAIL:
      return { ...state, groupListLoading: false, groupListError: action.error };
    case INVITE_USERS_SUCCESS:
      return {
        ...state,
        userRefresh: !state.userRefresh
      };
    case INVITE_USERS_FAIL:
      return { ...state, inviteUsersError: action.error };
    case DELETE_USER_SUCCESS:
      return { ...state, userRefresh: !state.userRefresh, userProfile: void 0, userProfileLoading: true };
    case DELETE_USER_FAIL:
      return { ...state, userDeletionError: action.error };
    case CREATE_GROUPS_SUCCESS:
      return {
        ...state,
        groupRefresh: !state.groupRefresh
      };
    case CREATE_GROUPS_FAIL:
      return { ...state, createGroupsError: action.error };
    case GET_GROUP_DETAILS_START:
      return { ...state, groupDetailsLoading: true, groupDetailsError: void 0 };
    case GET_GROUP_DETAILS_SUCCESS:
      return { ...state, groupDetails: action.groupDetails, groupDetailsLoading: false };
    case GET_GROUP_DETAILS_FAIL:
      return { ...state, groupDetailsLoading: false, groupDetailsError: action.error };
    case EDIT_GROUP_SUCCESS:
      return { ...state, groupRefresh: !state.groupRefresh };
    case EDIT_GROUP_FAIL:
      return { ...state, editGroupError: action.error };
    case DELETE_GROUP_SUCCESS:
      return { ...state, groupRefresh: !state.groupRefresh, groupDetails: void 0, groupDetailsLoading: true };
    case DELETE_GROUP_FAIL:
      return { ...state, deleteGroupError: action.error };
    case TOGGLE_GROUP_ACTIVATION_SUCCESS:
      return { ...state, groupRefresh: !state.groupRefresh };
    case TOGGLE_GROUP_ACTIVATION_FAIL:
      return { ...state, groupActivationError: action.error };
    case DELETE_GROUP_USERS_SUCCESS:
      return { ...state, groupRefresh: !state.groupRefresh, groupDetailsLoading: true };
    case DELETE_GROUP_USERS_FAIL:
      return { ...state, deleteUserFromGroupError: action.error };
    case ADD_GROUP_MEMBERS_SUCCESS:
      return { ...state, groupRefresh: !state.groupRefresh, groupDetailsLoading: true };
    default:
      return state;
  }
}
__name(profileReducer, "profileReducer");

// ../vlncc-frontend/src/store/reducers/auth.ts
var initialState5 = {
  loading: false,
  isAuthenticated: void 0,
  // When undefined, show just spinner...
  changingPassword: false,
  sendingResetCode: false,
  resettingPassword: false,
  isPasswordReset: false,
  loadingPolicy: false,
  passwordPolicyLength: PASSWORD_MIN_LENGTH,
  passwordPolicyMaxLength: PASSWORD_MAX_LENGTH,
  passwordPolicyNumberRequired: false,
  passwordPolicySpecialCharRequired: false,
  passwordPolicyUpperCaseRequired: false,
  passwordPolicyLowerCaseRequired: false,
  isSignUp: false,
  isPasswordConfirmed: false,
  isTenantInfoLoaded: false,
  isMFA: false,
  isUserProfileCompleted: true
};
function authReducer(state = initialState5, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, loading: true, isAuthenticated: false, error: void 0 };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, isAuthenticated: true };
    case LOGIN_ERROR:
      return { ...state, loading: false, error: action.error, isAuthenticated: false };
    case LOGOUT:
      return { ...state, loading: false, error: action.error || void 0, isAuthenticated: false };
    case CHANGING_PASSWORD:
      return { ...state, changingPassword: true, passwordChanged: false, changingPasswordError: void 0 };
    case CHANGING_PASSWORD_SUCCESS:
      return { ...state, changingPassword: false, passwordChanged: true };
    case CHANGING_PASSWORD_FAIL:
      return { ...state, changingPassword: false, changingPasswordError: action.error };
    case SET_RESETTING_PASSWORD_ERROR:
      return { ...state, resettingPasswordError: action.error };
    case SET_AUTH_ERROR:
      return { ...state, error: action.error };
    case SEND_RESET_PASSWORD_EMAIL_SUCCESS:
      return { ...state, isChangePasswordEmailSent: true };
    case SEND_RESET_PASSWORD_EMAIL_FAIL:
      return {
        ...state,
        isChangePasswordEmailSent: false,
        changingPasswordError: action.error
      };
    case CHANGING_PASSWORD_START:
    case CHANGING_PASSWORD_COMPLETED:
      return { ...state, changingPassword: false, changingPasswordError: void 0, passwordChanged: false };
    case SENDING_RESET_CODE_INIT:
      return {
        ...state,
        sendingResetCode: false,
        sendingResetCodeError: void 0,
        isPasswordReset: false,
        error: void 0
      };
    case SENDING_RESET_CODE:
      return { ...state, sendingResetCode: true, sendingResetCodeError: void 0 };
    case SENDING_RESET_CODE_SUCCESS:
      return { ...state, sendingResetCode: false };
    case SENDING_RESET_CODE_FAIL:
      return { ...state, sendingResetCode: false, sendingResetCodeError: action.error };
    case RESETTING_PASSWORD:
      return { ...state, resettingPassword: true, resettingPasswordError: void 0 };
    case RESETTING_PASSWORD_SUCCESS:
      return { ...state, resettingPassword: false, isPasswordReset: true };
    case RESETTING_PASSWORD_FAIL:
      return { ...state, resettingPassword: false, resettingPasswordError: action.error };
    case PASSWORD_POLICY_START:
      return { ...state, loadingPolicy: true };
    case PASSWORD_POLICY_SUCCESS:
      return {
        ...state,
        passwordPolicyLength: action.passwordLength,
        passwordPolicyNumberRequired: action.NumberRequired,
        passwordPolicySpecialCharRequired: action.SpecialCharRequired,
        passwordPolicyUpperCaseRequired: action.UpperCaseRequired,
        passwordPolicyLowerCaseRequired: action.LowerCaseRequired,
        loadingPolicy: false
      };
    case PASSWORD_POLICY_FAIL:
      return {
        ...state,
        passwordPolicyLength: PASSWORD_MIN_LENGTH,
        passwordPolicyMaxLength: PASSWORD_MAX_LENGTH,
        passwordPolicyNumberRequired: false,
        passwordPolicySpecialCharRequired: false,
        passwordPolicyUpperCaseRequired: false,
        passwordPolicyLowerCaseRequired: false,
        passwordPolicyError: action.error,
        loadingPolicy: false
      };
    case SIGNUP_START:
      return { ...state, isSignUp: true, loading: false };
    case SETUP_PASSWORD_START:
      return { ...state, isPasswordConfirmed: false, changingPasswordError: void 0, loading: true };
    case SETUP_PASSWORD_SUCCESS_WITHOUT_PROFILE_COMPLETED:
      return {
        ...state,
        loading: false,
        isPasswordConfirmed: true,
        isSignUp: false,
        userName: action.userName
      };
    case SETUP_PASSWORD_FAIL:
      return {
        ...state,
        isPasswordConfirmed: false,
        loading: false,
        changingPasswordError: action.error
      };
    case SETUP_PASSWORD_SUCCESS_WITH_PROFILE_COMPLETED:
      return { ...state, isSignUp: false, loading: false, isAuthenticated: true };
    case SETUP_PROFILE_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isUserProfileCompleted: true,
        isPasswordConfirmed: false,
        loading: false
      };
    case LOADING_TENANT_INFO_FAIL:
      return { ...state, isTenantInfoLoaded: false };
    case LOADING_TENANT_INFO_SUCCESS:
      return { ...state, isTenantInfoLoaded: true };
    case MFA_START:
      return {
        ...state,
        isMFA: true,
        loading: false,
        mfaUsername: action.mfaUsername,
        mfaPassword: action.mfaPassword,
        mfaUser: action.mfaUser,
        error: void 0
      };
    case MFA_PREP:
      return { ...state, loading: true, error: void 0 };
    case MFA_SUCCESS:
      return { ...state, loading: false, isMFA: false, isAuthenticated: true, error: void 0 };
    case MFA_FAIL:
      return { ...state, loading: false, isMFA: false, error: action.error };
    case MFA_END:
      return { ...state, loading: false, isMFA: false, error: void 0 };
    case RESEND_MFA_FAIL:
      return { ...state, error: "ResendException" /* ResendException */ };
    case USER_PROFILE_SETUP:
      return {
        ...state,
        isUserProfileCompleted: false,
        loading: false,
        userName: action.userName
      };
    default:
      return state;
  }
}
__name(authReducer, "authReducer");

// ../vlncc-frontend/src/store/devices.ts
import { createSlice as createSlice3 } from "@reduxjs/toolkit";
var initialState6 = {
  objects: []
};
var deviceSlice = createSlice3({
  name: "Devices",
  initialState: initialState6,
  reducers: {}
});
var devices_default = deviceSlice.reducer;

// ../vlncc-frontend/src/store/reducers/events.ts
var initialState7 = {
  eventsLoading: false,
  events: [],
  eventsError: void 0,
  eventDetail: {},
  totalCount: 0
};
function eventsReducer(state = initialState7, action) {
  switch (action.type) {
    case GET_EVENT_LIST_START:
      return { ...state, eventsLoading: true, eventsError: void 0 };
    case GET_EVENT_LIST_SUCCESS:
      return {
        ...state,
        events: action.events,
        eventsLoading: false
      };
    case GET_EVENT_LIST_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.totalCount,
        eventsLoading: false
      };
    case GET_EVENT_LIST_FAIL:
      return {
        ...state,
        eventsLoading: false,
        eventsError: action.error
      };
    case GET_EVENT_DETAIL_SUCCESS:
      return {
        ...state,
        eventDetail: action.eventDetail,
        eventsLoading: false
      };
    default:
      return state;
  }
}
__name(eventsReducer, "eventsReducer");

// ../vlncc-frontend/src/store/services/reportsApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// ../vlncc-frontend/src/utils/routes.ts
import { matchPath } from "react-router";
var routes = {
  url: "/",
  login: {
    url: "/login",
    forgotPassword: {
      url: "forgot"
    },
    resetPassword: {
      url: "forgotpassword"
    },
    resetPasswordConfirmation: {
      url: "resetPasswordConfirmation"
    },
    passwordReset: {
      url: "passwordreset"
    },
    setUpPassword: {
      url: "setuppassword"
    },
    setUpProfile: {
      url: "setupprofile"
    },
    setUpMfa: {
      url: "setupmfa"
    }
  },
  logout: {
    url: "/logout"
  },
  info: {
    url: "/info"
  },
  site: {
    url: "/site",
    alarms: { url: "alarms" },
    status: { url: "status" },
    settings: { url: "settings" },
    rights: { url: "rights" }
  },
  events: {
    url: "/events"
  },
  profile: {
    url: "/profile",
    users: {
      url: "users"
    },
    groups: {
      url: "groups"
    }
  },
  reports: {
    url: "/reports",
    graph: {
      url: "graph"
    },
    statistics: {
      url: "statistics"
    }
  },
  downloadReport: {
    url: "/download-report"
  },
  deviceManager: {
    url: "/device-manager",
    status: { url: "status" },
    // TODO: Release 2
    // links: { url: 'links' },
    properties: { url: "properties" }
  }
};

// ../vlncc-frontend/src/store/services/utils.ts
import { Auth as Auth5 } from "aws-amplify";
var updateHeaders = /* @__PURE__ */ __name(async (headers) => {
  headers.set("Accept", "application/json");
  headers.set("Content-Type", "application/json");
  headers.set("Accept-Encoding", "gzip, deflate, br");
  const currentCredentials = await Auth5.currentSession();
  if (currentCredentials) {
    headers.set("Authorization", currentCredentials.getIdToken().getJwtToken());
  }
  return headers;
}, "updateHeaders");

// ../vlncc-frontend/src/store/services/reportsApi.ts
var reportsApi = createApi({
  reducerPath: "reportsApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: API_REPORTS_MANAGEMENT_BASE_URI,
    prepareHeaders: async (headers, { endpoint }) => {
      if (endpoint !== "downloadReport" && endpoint !== "downloadJsonResponse") {
        headers = await updateHeaders(headers);
      }
      return headers;
    }
  }),
  refetchOnFocus: true,
  tagTypes: ["SiteNodes", "Measurements"],
  endpoints: (builder) => ({
    // TODO: Remove in favor of using siteApi. Why is this duplicated here?
    getSiteNodes: builder.query({
      query: ({ customerId, siteId, username }) => {
        return `${API_SITE_MANAGEMENT_BASE_URI}${"/tenant/{customer_id}/users/{user_name}/sites/{site_id}" /* list */.replace("{customer_id}", customerId).replace("{user_name}", username).replace("{site_id}", siteId)}`;
      },
      providesTags: () => [{ type: "SiteNodes", id: "LIST" }],
      transformResponse: (site) => [site]
    }),
    getMeasurements: builder.mutation({
      query: ({ customerId, body }) => ({
        url: `${API_MEASUREMENTS_BASE_URI}${"/tenant/{customer_id}/measurements" /* measurements */.replace("{customer_id}", customerId)}`,
        method: "POST",
        body
      }),
      invalidatesTags: () => [{ type: "Measurements", id: "LIST" }]
    }),
    getDownloadUrl: builder.query({
      query: ({ customerId, reportInstanceId }) => {
        return `${API_REPORTS_BASE_URI}${"/tenant/{customer_id}/reports/{report_id}" /* getDownloadUrl */.replace("{customer_id}", customerId).replace("{report_id}", reportInstanceId)}`;
      }
      // providesTags: () => [{ type: 'SiteNodes', id: 'LIST' }],
      // transformResponse: (site: SiteInterface) => [site]
    }),
    downloadReport: builder.query({
      query: ({ url }) => ({
        url,
        responseHandler: (response) => response.blob()
      })
    }),
    downloadJsonResponse: builder.query({
      query: ({ url }) => ({
        url
      })
    }),
    generateReport: builder.mutation({
      query: ({ customerId, body }) => ({
        url: `${API_REPORTS_BASE_URI}${"/tenant/{customer_id}/reports" /* generateReport */.replace("{customer_id}", customerId)}`,
        method: "POST",
        body
      })
    })
  })
});
var {
  useGetSiteNodesQuery,
  useGetMeasurementsMutation,
  useLazyGetDownloadUrlQuery,
  useLazyDownloadReportQuery,
  useLazyDownloadJsonResponseQuery,
  useGenerateReportMutation
} = reportsApi;

// ../vlncc-frontend/src/store/services/siteApi.ts
import { createApi as createApi2, fetchBaseQuery as fetchBaseQuery2 } from "@reduxjs/toolkit/query/react";
var siteApi = createApi2({
  reducerPath: "siteApi",
  baseQuery: fetchBaseQuery2({
    baseUrl: API_SITE_MANAGEMENT_BASE_URI,
    prepareHeaders: async (headers) => {
      headers = await updateHeaders(headers);
      return headers;
    }
  }),
  // refetchOnFocus: true,
  refetchOnReconnect: true,
  tagTypes: ["Site", "Nodes"],
  endpoints: (builder) => ({
    getSite: builder.query({
      query: ({ customerId, username, siteId }) => `${API_SITE_MANAGEMENT_BASE_URI}${"/tenant/{customer_id}/users/{user_name}/sites/{site_id}" /* list */.replace("{customer_id}", customerId).replace("{user_name}", username).replace("{site_id}", siteId)}`,
      providesTags: (result) => result ? [
        { type: "Site", id: result.node_id },
        ...result.children.map(({ node_id }) => ({ type: "Nodes", id: node_id })),
        { type: "Nodes", id: "LIST" }
      ] : ["Site", { type: "Nodes", id: "LIST" }]
    }),
    addNode: builder.mutation({
      query(body) {
        const customerId = getConstantFromLocalStorage(LS_COMPANY_CUSTOMER_ID);
        return {
          url: "/tenant/{customer_id}/sites" /* createTreeNode */.replace("{customer_id}", customerId),
          method: "POST",
          body
        };
      },
      invalidatesTags: () => [{ type: "Nodes", id: "LIST" }, "Site"]
    }),
    linkNode: builder.mutation({
      query(body) {
        const customerId = getConstantFromLocalStorage(LS_COMPANY_CUSTOMER_ID);
        return {
          url: "/tenant/{customer_id}/locations/{node_id}/device" /* linkTreeNode */.replace("{customer_id}", customerId).replace("{node_id}", body.node_id),
          method: "POST",
          body: body.linkedNode
        };
      },
      invalidatesTags: (result, error, body) => [{ type: "Nodes", id: body.node_id }, "Site"]
    }),
    editNode: builder.mutation({
      query(node) {
        const customerId = getConstantFromLocalStorage(LS_COMPANY_CUSTOMER_ID);
        return {
          url: "/tenant/{customer_id}/sites/{node_id}" /* editTreeNode */.replace("{customer_id}", customerId).replace("{node_id}", node.node_id),
          method: "PUT",
          body: node.editedNode
        };
      },
      invalidatesTags: (node) => [{ type: "Nodes", id: node.node_id }, "Site"]
    }),
    moveNode: builder.mutation({
      query({ id, type, ...body }) {
        const customerId = getConstantFromLocalStorage(LS_COMPANY_CUSTOMER_ID);
        return {
          url: "/tenant/{customer_id}/sites/{node_id}/move" /* moveTreeNode */.replace("{customer_id}", customerId).replace("{node_id}", id),
          method: "PATCH",
          body
        };
      },
      invalidatesTags: () => [{ type: "Nodes", id: "LIST" }, "Site"]
    }),
    getLocation: builder.query({
      query: ({ customerId, id }) => {
        return `/tenant/${customerId}/locations/${id}`;
      },
      providesTags: (result) => [{ type: "Nodes", id: result.node_id }]
    }),
    getNodeLocations: builder.query({
      query: ({ customerId, username, nodeId }) => {
        return `/tenant/${customerId}/users/${username}/nodes/${nodeId}`;
      },
      providesTags: (result) => result ? [...result.map(({ node_id }) => ({ type: "Nodes", id: node_id })), { type: "Nodes", id: "LIST" }] : [{ type: "Nodes", id: "LIST" }]
    }),
    deleteNode: builder.mutation({
      query({ node_id }) {
        const customerId = getConstantFromLocalStorage(LS_COMPANY_CUSTOMER_ID);
        return {
          url: "/tenant/{customer_id}/sites/{node_id}" /* deleteTreeNode */.replace("{customer_id}", customerId).replace("{node_id}", node_id),
          method: "DELETE"
        };
      },
      invalidatesTags: (result, error, { node_id }) => [{ type: "Nodes", id: node_id }, "Site"]
    }),
    unlinkNode: builder.mutation({
      query({ node_id, name, dataSource }) {
        const customerId = getConstantFromLocalStorage(LS_COMPANY_CUSTOMER_ID);
        const dataSourceStr = buildDataSource(dataSource);
        return {
          url: "/tenant/{customer_id}/locations/{node_id}/device/{data_source}" /* unlinkTreeNode */.replace("{customer_id}", customerId).replace("{node_id}", node_id).replace("{data_source}", dataSourceStr),
          method: "DELETE"
        };
      },
      invalidatesTags: (result, error, { node_id }) => [{ type: "Nodes", id: node_id }, "Site"]
    })
  })
});
var {
  useGetSiteQuery,
  useGetLocationQuery,
  useGetNodeLocationsQuery,
  useAddNodeMutation,
  useLinkNodeMutation,
  useEditNodeMutation,
  useDeleteNodeMutation,
  useMoveNodeMutation,
  useUnlinkNodeMutation
} = siteApi;

// ../vlncc-frontend/src/store/services/devicesApi.ts
import { createApi as createApi3, fetchBaseQuery as fetchBaseQuery3 } from "@reduxjs/toolkit/query/react";
var reducerPath = "devicesApi";
var baseUrl = API_DEVICE_BASE_URI;
var devicesApi = createApi3({
  reducerPath,
  baseQuery: fetchBaseQuery3({
    baseUrl,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    prepareHeaders: async (headers, { endpoint }) => {
      headers = await updateHeaders(headers);
      return headers;
    }
  }),
  refetchOnFocus: true,
  refetchOnReconnect: true,
  tagTypes: ["Devices" /* DEVICES */, "Data Sources" /* DATA_SOURCES */],
  endpoints: (builder) => ({
    getDevicesPerSite: builder.query({
      query: ({ customerId, siteId }) => replaceTemplateValues("/tenant/{customer_id}/sites/{site_id}/devices/" /* list */, { customer_id: customerId, site_id: siteId }),
      transformResponse: (response) => response.devices,
      providesTags: [{ type: "Devices" /* DEVICES */, id: "LIST" }]
    }),
    getDataSourcesPerSite: builder.query({
      query: ({ customerId, siteId, measId = null }) => {
        let url = replaceTemplateValues("/tenant/{customer_id}/sites/{site_id}/datasources/" /* dataSourcesList */, { customer_id: customerId, site_id: siteId });
        if (measId) {
          url += `?meas_id=${measId}`;
        }
        return url;
      },
      transformResponse: (response) => response.items,
      providesTags: [{ type: "Data Sources" /* DATA_SOURCES */, id: "LIST" }]
    })
  })
});
var { useGetDevicesPerSiteQuery, useGetDataSourcesPerSiteQuery } = devicesApi;

// ../vlncc-frontend/src/store/middlewares.ts
var middlewares = [reportsApi.middleware, siteApi.middleware, devicesApi.middleware];
var middlewares_default = middlewares;

// ../vlncc-frontend/src/store/index.ts
import { setupListeners } from "@reduxjs/toolkit/dist/query";

// ../vlncc-frontend/src/store/reducers/reports.ts
import { subDays } from "date-fns";
var today = getTodayWithNearestAvailableTime();
var initialState8 = {
  isApiLoading: false,
  error: void 0,
  intervalDate: {
    from: subDays(today, 1),
    to: today
  },
  locations: [],
  selectedFormattedLocations: {},
  selectedLocationsCustomProps: {},
  selectedLocationsNum: 0,
  selectedLocationsIDs: [],
  graphsNum: 1,
  visibleLocations: {},
  assignedChartColors: getInitialAssignedChartColors(),
  isTesting: false
};
function reportsReducer(state = initialState8, action) {
  switch (action.type) {
    case SET_REPORT_INTERVAL_DATE:
      return {
        ...state,
        intervalDate: action.interval
      };
    case SET_REPORT_API_LOADING:
      return { ...state, isApiLoading: action.loading };
    case SET_REPORT_LOCATIONS:
      return { ...state, locations: action.locations };
    case SET_REPORT_SELECTED_FORMATTED_LOCATIONS:
      return { ...state, selectedFormattedLocations: action.selectedFormattedLocations };
    case SET_REPORT_SELECTED_LOCATIONS_CUSTOM_PROPS:
      return { ...state, selectedLocationsCustomProps: action.locationsProps };
    case SET_REPORT_SELECTED_LOCATIONS_NUM:
      return { ...state, selectedLocationsNum: action.selectedLocationsNum };
    case SET_REPORT_SELECTED_LOCATIONS_IDS:
      return { ...state, selectedLocationsIDs: action.selectedLocationsIDs };
    case SET_REPORT_GRAPHS_NUM:
      return { ...state, graphsNum: action.graphsNum };
    case SET_REPORT_VISIBLE_LOCATIONS:
      return { ...state, visibleLocations: action.visibleLocations };
    case SET_REPORT_ASSIGNED_CHART_COLORS:
      return { ...state, assignedChartColors: action.assignedChartColors };
    case RESET_REPORTS_STATE:
      return {
        ...initialState8,
        // today: getTodayWithNearestAvailableTime(),
        intervalDate: {
          from: subDays(/* @__PURE__ */ new Date(), 1),
          to: /* @__PURE__ */ new Date()
        }
      };
    default:
      return state;
  }
}
__name(reportsReducer, "reportsReducer");

// ../vlncc-frontend/src/store/siteTree.ts
import { createSlice as createSlice4 } from "@reduxjs/toolkit";
var initialState9 = {
  selectedNode: null,
  lastRemoved: null,
  currentlyRemoving: null
};
var siteTreeSlice = createSlice4({
  name: "SiteTree",
  initialState: initialState9,
  reducers: {
    setSelectedNodeId(state, action) {
      state.selectedNode = action.payload;
    },
    setCurrentlyRemoving(state, action) {
      state.currentlyRemoving = action.payload;
    },
    setLastRemoved(state, action) {
      state.lastRemoved = action.payload;
    }
  }
});
var selectSelectedNode = /* @__PURE__ */ __name((state) => state.siteTree.selectedNode, "selectSelectedNode");
var selectCurrentlyRemoving = /* @__PURE__ */ __name((state) => state.siteTree.currentlyRemoving, "selectCurrentlyRemoving");
var { setSelectedNodeId, setLastRemoved, setCurrentlyRemoving } = siteTreeSlice.actions;
var siteTree_default = siteTreeSlice.reducer;

// ../vlncc-frontend/src/store/help.ts
import { createSlice as createSlice5 } from "@reduxjs/toolkit";
var initialState10 = {
  isOpen: false
};
var helpSlice = createSlice5({
  name: "Help",
  initialState: initialState10,
  reducers: {
    setIsOpen(state, action) {
      state.isOpen = action.payload;
    }
  }
});
var selectIsOpen = /* @__PURE__ */ __name((state) => state.help.isOpen, "selectIsOpen");
var { setIsOpen } = helpSlice.actions;
var help_default = helpSlice.reducer;

// ../vlncc-frontend/src/store/index.ts
var rootReducer = combineReducers({
  general: generalReducer,
  notifications: notifications_default,
  auth: authReducer,
  profile: profileReducer,
  dialog: dialog_default,
  siteTree: siteTree_default,
  help: help_default,
  events: eventsReducer,
  reports: reportsReducer,
  devices: devices_default,
  [devicesApi.reducerPath]: devicesApi.reducer,
  [siteApi.reducerPath]: siteApi.reducer,
  [reportsApi.reducerPath]: reportsApi.reducer
});
var devToolsConfiguration = {
  // Avoid crashing of redux devtools because of large object serialization when console is open
  // https://github.com/reduxjs/redux-devtools-extension/blob/master/docs/Troubleshooting.md#excessive-use-of-memory-and-cpu
  actionSanitizer: (action) => {
    return action.type === SET_REPORT_SELECTED_FORMATTED_LOCATIONS && action.selectedFormattedLocations ? { ...action, selectedFormattedLocations: "Large blob" } : action;
  },
  stateSanitizer: (state) => {
    return state.reports?.selectedFormattedLocations ? { ...state, reports: { ...state.reports, selectedFormattedLocations: "Large blob" } } : state;
  }
};
var configure = /* @__PURE__ */ __name((preloadedState = {}) => {
  const store2 = configureStore({
    reducer: rootReducer,
    devTools: devToolsConfiguration,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
      // turn of for now as we have unserialized react components in some of the old dispatches.
      immutableCheck: {
        ignoredPaths: ["auth.mfaUser", "reports.selectedFormattedLocations"]
      }
    }).concat(middlewares_default),
    preloadedState
  });
  return store2;
}, "configure");
var store = configure();
setupListeners(store.dispatch);
var store_default = store;

// ../vlncc-frontend/src/registerServiceWorker.ts
var isLocalhost = Boolean(
  window.location.hostname === "localhost" || // [::1] is the IPv6 localhost address.
  window.location.hostname === "[::1]" || // 127.0.0.1/8 is considered localhost for IPv4.
  window.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
  )
);
function unregister() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister();
    });
  }
}
__name(unregister, "unregister");

// ../vlncc-frontend/src/app.tsx
import { Route as Route7, Routes as Routes7 } from "react-router";
import { Application as VaiApplication } from "@vaisala-rockhopper/components";
import { connect as connect22 } from "react-redux";

// ../vlncc-frontend/src/components/Main.tsx
import * as React70 from "react";
import { Navigate as Navigate5, Route as Route6, Routes as Routes6 } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { PageContainer as PageContainer4, ScrollStatus as ScrollStatus2 } from "@vaisala-rockhopper/components";

// ../vlncc-frontend/src/components/Header.tsx
import * as React12 from "react";
import { useState as useState5, useEffect as useEffect5 } from "react";
import {
  ApplicationTheme as ApplicationTheme2,
  Header as VaiHeader,
  Icon as Icon4,
  IconName as IconName5,
  ScrollStatus
} from "@vaisala-rockhopper/components";
import { connect as connect3 } from "react-redux";
import { useLocation as useLocation2 } from "react-router";
import { useTranslation as useTranslation8 } from "react-i18next";

// ../vlncc-frontend/src/containers/ChangePassword.tsx
import * as React4 from "react";
import { connect } from "react-redux";

// ../vlncc-frontend/src/components/ChangePasswordDialog/index.tsx
import * as React3 from "react";
import { includes as includes2 } from "lodash";
import { useTranslation as useTranslation3 } from "react-i18next";
import { Size as Size3, Separator, Button, ButtonType } from "@vaisala-rockhopper/components";

// ../vlncc-frontend/src/components/auth/PasswordHelpText.tsx
import { useTranslation } from "react-i18next";
var PasswordHelpText = /* @__PURE__ */ __name(({ passwordPolicy, titleClass }) => {
  const { t } = useTranslation();
  const passwordRequirements = [];
  passwordPolicy.isUpperCaseRequired ? passwordRequirements.push(t("password.passwordHelperUpperCaseRequirement")) : null;
  passwordPolicy.isLowerCaseRequired ? passwordRequirements.push(t("password.passwordHelperLowerCaseRequirement")) : null;
  passwordPolicy.isNumberRequired ? passwordRequirements.push(t("password.passwordHelperNumberRequirement")) : null;
  passwordPolicy.isSpecialCharRequired ? passwordRequirements.push(t("password.passwordHelperSpecialCharRequirement")) : null;
  const listItems = passwordRequirements.map((item, index) => <li key={`password-requirement-${index}`}>{item}</li>);
  return <>
    <div id="password-help-text-blurb" className="vai-margin-bottom-s">{t("password.passwordHelperTextBlurb", { length: passwordPolicy.minimumLength })}</div>
    {listItems.length > 0 ? <>
      <h4 id="password-help-text-title" className={titleClass}>{t("password.passwordHelperText")}</h4>
      <ul id="password-help-text-policy-list" className="vai-margin-bottom-m">{listItems}</ul>
    </> : null}
  </>;
}, "PasswordHelpText");

// ../vlncc-frontend/src/hooks/usePasswordValidators.tsx
import React2 from "react";
import { Label, PasswordInput, Size } from "@vaisala-rockhopper/components";

// ../vlncc-frontend/src/components/withDisplaySize.tsx
import * as React from "react";
function withDisplaySize(Component) {
  const handheldMax = 768;
  function getDisplaySize() {
    const result = {
      displaySize: window.innerWidth > handheldMax ? "desktop" /* desktop */ : "handheld" /* handheld */,
      windowSize: window.innerWidth,
      deviceType: getDeviceType(window.innerWidth)
    };
    return result;
  }
  __name(getDisplaySize, "getDisplaySize");
  return /* @__PURE__ */ __name(class DisplayMode extends React.PureComponent {
    state = getDisplaySize();
    render() {
      const { props, state } = this;
      return <Component {...state} {...props} />;
    }
    componentDidMount() {
      window.addEventListener("resize", this.onScreenSizeChanged);
    }
    onScreenSizeChanged = () => {
      const displaySize = getDisplaySize();
      if (displaySize.displaySize !== this.state.displaySize) {
        this.setState(displaySize);
      }
    };
    componentWillUnmount() {
      window.removeEventListener("resize", this.onScreenSizeChanged);
    }
  }, "DisplayMode");
}
__name(withDisplaySize, "withDisplaySize");

// ../vlncc-frontend/src/utils/validation.ts
var checkValidationErrorFn = /* @__PURE__ */ __name((validationType, fieldName, fieldValue) => {
  switch (validationType) {
    case "MAX_LENGTH" /* MAX_LENGTH */:
      return fieldValue?.length > FIELD_VALIDATIONS_CONFIG[fieldName][validationType];
    default:
      return false;
  }
}, "checkValidationErrorFn");
var validation = /* @__PURE__ */ __name((fieldName, fieldValue, validationType) => {
  const validationResult = { hasError: false, errors: [] };
  if (!Array.isArray(validationType)) {
    const hasError = checkValidationErrorFn(validationType, fieldName, fieldValue);
    if (hasError) {
      validationResult.hasError = hasError;
      validationResult.errors = [validationType];
    }
    return validationResult;
  } else {
    return validationType.reduce((mem, type) => {
      const hasError = checkValidationErrorFn(type, fieldName, fieldValue);
      if (hasError) {
        mem.hasError = true;
        mem.errors = [...mem.errors, type];
      }
      return mem;
    }, validationResult);
  }
}, "validation");

// ../vlncc-frontend/src/hooks/usePasswordValidators.tsx
var defaultPasswordStrength = {
  score: 0,
  feedback: "",
  strength: void 0
};
var usePasswordValidators = /* @__PURE__ */ __name((props) => {
  const [currentPassword, setCurrentPassword] = React2.useState("");
  const [currentPasswordError, setCurrentPasswordError] = React2.useState("");
  const [newPassword, setNewPassword] = React2.useState("");
  const [parametricError, setParametricError] = React2.useState(0);
  const [newPasswordError, setNewPasswordError] = React2.useState("");
  const [newPasswordStrength, setNewPasswordStrength] = React2.useState({
    ...defaultPasswordStrength
  });
  const [confirmPassword, setConfirmPassword] = React2.useState("");
  const [confirmPasswordError, setConfirmPasswordError] = React2.useState("");
  const [confirmPasswordStrength, setConfirmPasswordStrength] = React2.useState({
    ...defaultPasswordStrength
  });
  const [zxcvbnOptions2, setZxcvbnOptions] = React2.useState(null);
  React2.useEffect(() => {
    loadZxcvbnOptions(props.language).then((opts) => {
      setZxcvbnOptions(opts);
      if (newPassword !== "") {
        const result = strengthFinder(newPassword, props.passwordBlackList, props.passwordPolicy, props.t, opts);
        result.then((strength) => {
          setNewPasswordError(strength.feedback);
        });
      }
    });
  }, [props.language]);
  const inputSize = props.displaySize === "desktop" /* desktop */ ? Size.Container : Size.Container;
  const onCurrentPasswordChange = /* @__PURE__ */ __name((e) => {
    const { value } = e.target;
    setCurrentPassword(value);
    if (!value.trim()) {
      return setCurrentPasswordError("auth.passwordCannotBeEmpty");
    }
    if (value && newPassword && value === newPassword) {
      setCurrentPasswordError("auth.passwordMustBeDifferentThanCurrentPassword");
    } else {
      setCurrentPasswordError("");
    }
  }, "onCurrentPasswordChange");
  const onNewPasswordChange = /* @__PURE__ */ __name((e) => {
    const { value } = e.target;
    const passStrength = strengthFinder(value, props.passwordBlackList, props.passwordPolicy, props.t, zxcvbnOptions2);
    setNewPassword(value);
    newPasswordError && setNewPasswordError("");
    if (value && currentPassword && currentPassword === value) {
      setCurrentPasswordError("auth.passwordMustBeDifferentThanCurrentPassword");
    } else {
      currentPasswordError && currentPassword.trim() !== "" && setCurrentPasswordError("");
    }
    passStrength.then((strength) => {
      setNewPasswordStrength(strength);
      if (validation("PASSWORD", value, "MAX_LENGTH" /* MAX_LENGTH */).hasError) {
        setNewPasswordError("auth.passwordCharsLimit");
        setParametricError(PASSWORD_MAX_LENGTH);
      } else {
        setErrorFromScore(setNewPasswordError, strength, "auth.passwordStrengthError", setParametricError);
      }
    });
  }, "onNewPasswordChange");
  const onConfirmPasswordChange = /* @__PURE__ */ __name((e) => {
    const { value } = e.target;
    setConfirmPassword(value);
  }, "onConfirmPasswordChange");
  React2.useEffect(() => {
    setConfirmPasswordEqualErrorsState();
  }, [newPassword, confirmPassword, newPasswordError, confirmPasswordError]);
  const setConfirmPasswordEqualErrorsState = React2.useCallback(() => {
    if (confirmPassword !== newPassword) {
      if (newPasswordError) {
        setConfirmPasswordError("");
        return;
      }
      if (confirmPassword.length <= 0) {
        return;
      }
      return setConfirmPasswordError("auth.doNotMatch");
    }
    return setConfirmPasswordError("");
  }, [confirmPassword, confirmPasswordError, newPasswordError, newPassword]);
  const arePasswordsEqual = confirmPassword === newPassword;
  const hasPasswords = Boolean(newPassword) && Boolean(confirmPassword);
  const getNewPasswordError = /* @__PURE__ */ __name(() => {
    if (parametricError !== 0)
      return props.t(`${newPasswordError}`, { length: parametricError });
    else
      return props.t(`${newPasswordError}`);
  }, "getNewPasswordError");
  const isButtonDisabled = props.loading === true || !hasPasswords || !arePasswordsEqual || Boolean(confirmPasswordError) || Boolean(newPasswordError) || Boolean(currentPasswordError);
  const renderNewPassword = /* @__PURE__ */ __name((labelKey = "changePassword.newPasswordLabel") => {
    return <>
      <Label id="new-password-label">{props.t(labelKey)}</Label>
      <PasswordInput
        id="new-password"
        htmlId="new-password"
        name="new-password"
        width={inputSize}
        value={newPassword}
        inputProps={{ id: "new-password-input" }}
        onChange={onNewPasswordChange}
        className={getErrorClass(newPasswordError)}
        strength={newPasswordStrength.strength}
        strengthStrings={{
          strong: props.t("password.strong"),
          good: props.t("password.good"),
          fair: props.t("password.fair"),
          short: props.t("password.short"),
          weak: props.t("password.weak")
        }}
        invalid={Boolean(newPasswordError)}
        autoComplete="new-password"
      />
      <div id="new-password-error" className="input-error">
        {getNewPasswordError()}
        {"\xA0"}
      </div>
    </>;
  }, "renderNewPassword");
  const renderConfirmPassword = /* @__PURE__ */ __name((labelKey = "signup.confirmNewPasswordLabel") => {
    return <>
      <Label id="confirm-password-label">{props.t(labelKey)}</Label>
      <PasswordInput
        id="confirm-password"
        htmlId="confirm-password"
        name="confirm-password"
        width={inputSize}
        value={confirmPassword}
        inputProps={{ id: "confirm-password-input" }}
        onChange={onConfirmPasswordChange}
        className={getErrorClass(confirmPasswordError)}
        strength={confirmPasswordStrength.strength}
        strengthStrings={{
          strong: props.t("password.strong"),
          good: props.t("password.good"),
          fair: props.t("password.fair"),
          short: props.t("password.short"),
          weak: props.t("password.weak")
        }}
        invalid={Boolean(confirmPasswordError)}
        autoComplete="confirm-password"
      />
      <div id="confirm-password-error" className="input-error">
        {props.t(`${confirmPasswordError}`)}
        {"\xA0"}
      </div>
    </>;
  }, "renderConfirmPassword");
  const renderCurrentPassword = /* @__PURE__ */ __name((labelKey = "changePassword.currentPasswordLabel") => {
    return <>
      <Label htmlId="current-password-label">{props.t(labelKey)}</Label>
      <PasswordInput
        htmlId="current-password"
        name="current-password"
        width={inputSize}
        value={currentPassword}
        dataTa="current-password"
        inputProps={{ id: "current-password-input" }}
        onChange={onCurrentPasswordChange}
        invalid={Boolean(currentPasswordError)}
        className={getErrorClass(currentPasswordError)}
        autoComplete="current-password"
      />
      <div id="current-password-error" className="input-error">
        {props.t(`${currentPasswordError}`)}
        {"\xA0"}
      </div>
    </>;
  }, "renderCurrentPassword");
  return {
    onConfirmPasswordChange,
    onCurrentPasswordChange,
    onNewPasswordChange,
    renderConfirmPassword,
    renderNewPassword,
    arePasswordsEqual,
    isButtonDisabled,
    confirmPassword,
    setConfirmPassword,
    confirmPasswordError,
    setConfirmPasswordError,
    newPassword,
    setNewPassword,
    newPasswordError,
    setNewPasswordError,
    newPasswordStrength,
    setNewPasswordStrength,
    confirmPasswordStrength,
    setConfirmPasswordStrength,
    currentPassword,
    setCurrentPassword,
    currentPasswordError,
    setCurrentPasswordError,
    renderCurrentPassword
  };
}, "usePasswordValidators");
var usePasswordValidators_default = usePasswordValidators;

// ../vlncc-frontend/src/components/ChangePasswordDialog/index.tsx
import "./change-password-dialog.scss";

// ../vlncc-frontend/src/components/BaseComponents/CenteredSpinner.tsx
import { Flex, Spinner } from "@vaisala-rockhopper/components";
var CenteredSpinner = /* @__PURE__ */ __name((props) => {
  const { wrapperProps = {} } = props;
  const className = typeof props.className !== "undefined" ? props.className : "vai-margin-top-m";
  const htmlId3 = typeof props.htmlId !== "undefined" ? props.htmlId : "centered-spinner";
  return <Flex style={props.style} justifyContent="center" {...wrapperProps}>
    <Spinner htmlId={htmlId3} className={className} />
    {props.children}
  </Flex>;
}, "CenteredSpinner");
var CenteredSpinner_default = CenteredSpinner;

// ../vlncc-frontend/src/store/hooks.ts
import { useDispatch, useSelector } from "react-redux";
var useAppDispatch = /* @__PURE__ */ __name(() => useDispatch(), "useAppDispatch");
var useAppSelector = useSelector;

// ../vlncc-frontend/src/components/Modals/ModalContainer.tsx
import { Flex as Flex3, Modal } from "@vaisala-rockhopper/components";

// ../vlncc-frontend/src/components/Modals/ModalFooter.tsx
var ModalFooter = /* @__PURE__ */ __name(({ buttons, children }) => {
  return <div className="modal-footer">
    {buttons && <div className="modal-footer__actions">{buttons}</div>}
    {children && <div className="modal-footer__end">{children}</div>}
  </div>;
}, "ModalFooter");
var ModalFooter_default = ModalFooter;

// ../vlncc-frontend/src/components/Modals/ModalHeader.tsx
import { Flex as Flex2, Heading, Icon, IconName as IconName2, Size as Size2 } from "@vaisala-rockhopper/components";
import { useTranslation as useTranslation2 } from "react-i18next";
import cx from "classnames";
var ModalHeader = /* @__PURE__ */ __name(({ type, title, iconName }) => {
  const { t } = useTranslation2();
  let iconDetails;
  if (type === "alert-dialog") {
    iconName = IconName2.Warning;
    iconDetails = {
      size: Size2.XL,
      className: "alert-dialog--icon"
    };
  }
  const iconClassName = cx("modal-header__icon", iconDetails?.className);
  const headerClassName = cx(
    "modal-header",
    { "modal-header--alert": type === "alert-dialog" },
    { "modal-header--icon": iconName }
  );
  return <Flex2 className={headerClassName} justifyContent="center">
    {(iconName || type === "alert-dialog") && <Icon size={Size2.L} name={iconName} {...iconDetails} className={iconClassName} />}
    <Heading className="modal-header__heading">{t(title)}</Heading>
  </Flex2>;
}, "ModalHeader");
var ModalHeader_default = ModalHeader;

// ../vlncc-frontend/src/components/Modals/ModalContainer.tsx
import "./modal.scss";
var ModalContainer = /* @__PURE__ */ __name(({
  children,
  id,
  title,
  role,
  buttons,
  iconName,
  footerChildren,
  ...rest
}) => {
  return <Modal key={id} id={id} role={role} {...rest}><Flex3 flexDirection="column" className="modal-container">
    <ModalHeader_default title={title} type={role} iconName={iconName} />
    <div className="modal-content">{children}</div>
    <ModalFooter_default buttons={buttons}>{footerChildren}</ModalFooter_default>
  </Flex3></Modal>;
}, "ModalContainer");

// ../vlncc-frontend/src/components/ChangePasswordDialog/index.tsx
var ChangePasswordDialog = /* @__PURE__ */ __name((props) => {
  const { t } = useTranslation3();
  const dispatch = useAppDispatch();
  const passwordBlackList2 = [];
  const companyAlias = localStorage.getItem(LS_COMPANY_ALIAS);
  if (companyAlias)
    passwordBlackList2.push(companyAlias);
  const passwordPolicy = {
    minimumLength: props.passwordPolicyLength,
    maximumLength: props.passwordPolicyMaxLength,
    isNumberRequired: props.passwordPolicyNumberRequired,
    isSpecialCharRequired: props.passwordPolicySpecialCharRequired,
    isUpperCaseRequired: props.passwordPolicyUpperCaseRequired,
    isLowerCaseRequired: props.passwordPolicyLowerCaseRequired
  };
  const {
    isButtonDisabled,
    renderCurrentPassword,
    renderConfirmPassword,
    renderNewPassword,
    currentPassword,
    setCurrentPasswordError,
    newPassword
  } = usePasswordValidators_default({
    loading: props.changingPassword,
    displaySize: props.displaySize,
    t,
    language: props.language,
    passwordPolicy,
    passwordBlackList: passwordBlackList2
  });
  React3.useEffect(() => {
    if (includes2(
      ["NotAuthorizedException" /* NotAuthorizedException */, "InvalidParameterException" /* InvalidParameterException */],
      props.changingPasswordError
    )) {
      setCurrentPasswordError("auth.invalidPassword");
    } else if (props.changingPasswordError === "LimitExceededException" /* LimitExceededException */) {
      setCurrentPasswordError("auth.limitExceeded");
    } else if (props.changingPasswordError === "InvalidPasswordException" /* InvalidPasswordException */) {
      setCurrentPasswordError("auth.doNotMeetCriteria");
    } else {
      setCurrentPasswordError("");
    }
  }, [props.changingPasswordError]);
  React3.useEffect(() => {
    if (props.passwordChanged) {
      dispatch(hideDialog());
      props.changePasswordCompleted();
    }
  }, [props.passwordChanged]);
  const onDismiss = /* @__PURE__ */ __name(() => dispatch(hideDialog()), "onDismiss");
  const onChangePassword = /* @__PURE__ */ __name(() => {
    let errorExist = false;
    if (!currentPassword) {
      setCurrentPasswordError("auth.passwordCannotBeEmpty");
      errorExist = true;
    }
    if (!errorExist) {
      props.changePassword(currentPassword, newPassword);
    }
  }, "onChangePassword");
  const modalButtons = <>
    <Button
      id="save-password"
      htmlId="save-password"
      dataTa="save-button"
      onClick={onChangePassword}
      disabled={isButtonDisabled}
    >{props.changingPassword ? <CenteredSpinner_default htmlId="save-button-spinner" className="" /> : t("general.save")}</Button>
    <Button
      id="cancel-password"
      htmlId="cancel-password"
      buttonType={ButtonType.Secondary}
      onClick={onDismiss}
      disabled={props.changingPassword === true}
    >{t("general.cancel")}</Button>
  </>;
  return <ModalContainer
    id="change-password-dialog"
    isOpen
    htmlId="change-password-dialog"
    showCloseIcon={true}
    onDismiss={onDismiss}
    width={Size3.S}
    dismissOnOverlayClick={false}
    title="changePassword.dialogTitle"
    buttons={modalButtons}
  >
    {renderCurrentPassword()}
    <Separator />
    <PasswordHelpText passwordPolicy={passwordPolicy} />
    {renderNewPassword()}
    {renderConfirmPassword()}
    <div id="change-password-buttons-container" className="buttons-container" />
  </ModalContainer>;
}, "ChangePasswordDialog");
var ChangePasswordDialog_default = ChangePasswordDialog;

// ../vlncc-frontend/src/containers/ChangePassword.tsx
var ChangePasswordContainer = /* @__PURE__ */ __name((props) => {
  React4.useEffect(() => {
    props.setUpPasswordPolicy();
  }, []);
  return <ChangePasswordDialog_default
    changePassword={props.changePassword}
    changingPassword={props.changingPassword}
    passwordChanged={props.passwordChanged}
    changingPasswordError={props.changingPasswordError}
    changePasswordCompleted={props.changePasswordCompleted}
    displaySize={props.displaySize}
    language={props.language}
    passwordPolicyLength={props.passwordPolicyLength}
    passwordPolicyMaxLength={props.passwordPolicyMaxLength}
    passwordPolicyNumberRequired={props.passwordPolicyNumberRequired}
    passwordPolicySpecialCharRequired={props.passwordPolicySpecialCharRequired}
    passwordPolicyUpperCaseRequired={props.passwordPolicyUpperCaseRequired}
    passwordPolicyLowerCaseRequired={props.passwordPolicyLowerCaseRequired}
  />;
}, "ChangePasswordContainer");
var mapStateToProps = /* @__PURE__ */ __name((state) => ({
  changingPassword: state.auth.changingPassword,
  passwordChanged: state.auth.passwordChanged,
  changingPasswordError: state.auth.changingPasswordError,
  language: state.general.language,
  passwordPolicyLength: state.auth.passwordPolicyLength,
  passwordPolicyMaxLength: state.auth.passwordPolicyMaxLength,
  passwordPolicyNumberRequired: state.auth.passwordPolicyNumberRequired,
  passwordPolicySpecialCharRequired: state.auth.passwordPolicySpecialCharRequired,
  passwordPolicyUpperCaseRequired: state.auth.passwordPolicyUpperCaseRequired,
  passwordPolicyLowerCaseRequired: state.auth.passwordPolicyLowerCaseRequired
}), "mapStateToProps");
var mapDispatchToProps = /* @__PURE__ */ __name((dispatch) => ({
  changePassword: (oldPassword, newPassword) => dispatch(authDispatchActions.changePassword(oldPassword, newPassword)),
  changePasswordCompleted: () => dispatch(authDispatchActions.changePasswordCompleted()),
  setUpPasswordPolicy: () => dispatch(authDispatchActions.setUpPasswordPolicy())
}), "mapDispatchToProps");
var ChangePassword_default = withDisplaySize(connect(mapStateToProps, mapDispatchToProps)(ChangePasswordContainer));

// ../vlncc-frontend/src/containers/ViewMyProfile.tsx
import { connect as connect2 } from "react-redux";

// ../vlncc-frontend/src/components/profile/ViewMyProfileDialog/index.tsx
import * as React7 from "react";
import {
  Table,
  TableStyle,
  TableBody,
  TableRow,
  TableCell,
  Icon as Icon3,
  IconName as IconName4,
  Button as Button4,
  ButtonType as ButtonType4,
  Flex as Flex5,
  Separator as Separator2,
  Modal as Modal2,
  Size as Size7,
  Heading as Heading2
} from "@vaisala-rockhopper/components";

// ../vlncc-frontend/src/components/profile/EditProfileDialog/index.tsx
import * as React6 from "react";
import validator from "validator";
import {
  Form,
  InputField,
  PasswordInput as PasswordInput2,
  Size as Size6,
  Button as Button3,
  Select,
  Label as Label2,
  RequiredAsterisk,
  ButtonType as ButtonType3,
  Flex as Flex4,
  FlexItem as FlexItem2
} from "@vaisala-rockhopper/components";
import PhoneInput from "react-phone-input-2";

// ../vlncc-frontend/src/data/timeZones.json
var timeZones_default = [
  {
    value: "America/Puerto_Rico",
    label: "America/Puerto_Rico"
  },
  {
    value: "America/New_York",
    label: "America/New_York"
  },
  {
    value: "America/Chicago",
    label: "America/Chicago"
  },
  {
    value: "America/Denver",
    label: "America/Denver"
  },
  {
    value: "America/Phoenix",
    label: "America/Phoenix"
  },
  {
    value: "America/Los_Angeles",
    label: "America/Los_Angeles"
  },
  {
    value: "Pacific/Honolulu",
    label: "Pacific/Honolulu"
  },
  {
    value: "America/Adak",
    label: "America/Adak"
  },
  {
    value: "America/Anchorage",
    label: "America/Anchorage"
  },
  {
    value: "America/Anguilla",
    label: "America/Anguilla"
  },
  {
    value: "America/Antigua",
    label: "America/Antigua"
  },
  {
    value: "America/Araguaina",
    label: "America/Araguaina"
  },
  {
    value: "America/Argentina/Buenos_Aires",
    label: "America/Argentina/Buenos_Aires"
  },
  {
    value: "America/Argentina/Catamarca",
    label: "America/Argentina/Catamarca"
  },
  {
    value: "America/Argentina/ComodRivadavia",
    label: "America/Argentina/ComodRivadavia"
  },
  {
    value: "America/Argentina/Cordoba",
    label: "America/Argentina/Cordoba"
  },
  {
    value: "America/Argentina/Jujuy",
    label: "America/Argentina/Jujuy"
  },
  {
    value: "America/Argentina/La_Rioja",
    label: "America/Argentina/La_Rioja"
  },
  {
    value: "America/Argentina/Mendoza",
    label: "America/Argentina/Mendoza"
  },
  {
    value: "America/Argentina/Rio_Gallegos",
    label: "America/Argentina/Rio_Gallegos"
  },
  {
    value: "America/Argentina/Salta",
    label: "America/Argentina/Salta"
  },
  {
    value: "America/Argentina/San_Juan",
    label: "America/Argentina/San_Juan"
  },
  {
    value: "America/Argentina/San_Luis",
    label: "America/Argentina/San_Luis"
  },
  {
    value: "America/Argentina/Tucuman",
    label: "America/Argentina/Tucuman"
  },
  {
    value: "America/Argentina/Ushuaia",
    label: "America/Argentina/Ushuaia"
  },
  {
    value: "America/Aruba",
    label: "America/Aruba"
  },
  {
    value: "America/Asuncion",
    label: "America/Asuncion"
  },
  {
    value: "America/Atikokan",
    label: "America/Atikokan"
  },
  {
    value: "America/Atka",
    label: "America/Atka"
  },
  {
    value: "America/Bahia",
    label: "America/Bahia"
  },
  {
    value: "America/Barbados",
    label: "America/Barbados"
  },
  {
    value: "America/Belem",
    label: "America/Belem"
  },
  {
    value: "America/Belize",
    label: "America/Belize"
  },
  {
    value: "America/Blanc-Sablon",
    label: "America/Blanc-Sablon"
  },
  {
    value: "America/Boa_Vista",
    label: "America/Boa_Vista"
  },
  {
    value: "America/Bogota",
    label: "America/Bogota"
  },
  {
    value: "America/Boise",
    label: "America/Boise"
  },
  {
    value: "America/Buenos_Aires",
    label: "America/Buenos_Aires"
  },
  {
    value: "America/Cambridge_Bay",
    label: "America/Cambridge_Bay"
  },
  {
    value: "America/Campo_Grande",
    label: "America/Campo_Grande"
  },
  {
    value: "America/Cancun",
    label: "America/Cancun"
  },
  {
    value: "America/Caracas",
    label: "America/Caracas"
  },
  {
    value: "America/Catamarca",
    label: "America/Catamarca"
  },
  {
    value: "America/Cayenne",
    label: "America/Cayenne"
  },
  {
    value: "America/Cayman",
    label: "America/Cayman"
  },
  {
    value: "America/Chicago",
    label: "America/Chicago"
  },
  {
    value: "America/Chihuahua",
    label: "America/Chihuahua"
  },
  {
    value: "America/Coral_Harbour",
    label: "America/Coral_Harbour"
  },
  {
    value: "America/Cordoba",
    label: "America/Cordoba"
  },
  {
    value: "America/Costa_Rica",
    label: "America/Costa_Rica"
  },
  {
    value: "America/Cuiaba",
    label: "America/Cuiaba"
  },
  {
    value: "America/Curacao",
    label: "America/Curacao"
  },
  {
    value: "America/Danmarkshavn",
    label: "America/Danmarkshavn"
  },
  {
    value: "America/Dawson",
    label: "America/Dawson"
  },
  {
    value: "America/Dawson_Creek",
    label: "America/Dawson_Creek"
  },
  {
    value: "America/Denver",
    label: "America/Denver"
  },
  {
    value: "America/Detroit",
    label: "America/Detroit"
  },
  {
    value: "America/Dominica",
    label: "America/Dominica"
  },
  {
    value: "America/Edmonton",
    label: "America/Edmonton"
  },
  {
    value: "America/Eirunepe",
    label: "America/Eirunepe"
  },
  {
    value: "America/El_Salvador",
    label: "America/El_Salvador"
  },
  {
    value: "America/Ensenada",
    label: "America/Ensenada"
  },
  {
    value: "America/Fortaleza",
    label: "America/Fortaleza"
  },
  {
    value: "America/Fort_Wayne",
    label: "America/Fort_Wayne"
  },
  {
    value: "America/Glace_Bay",
    label: "America/Glace_Bay"
  },
  {
    value: "America/Godthab",
    label: "America/Godthab"
  },
  {
    value: "America/Goose_Bay",
    label: "America/Goose_Bay"
  },
  {
    value: "America/Grand_Turk",
    label: "America/Grand_Turk"
  },
  {
    value: "America/Grenada",
    label: "America/Grenada"
  },
  {
    value: "America/Guadeloupe",
    label: "America/Guadeloupe"
  },
  {
    value: "America/Guatemala",
    label: "America/Guatemala"
  },
  {
    value: "America/Guayaquil",
    label: "America/Guayaquil"
  },
  {
    value: "America/Guyana",
    label: "America/Guyana"
  },
  {
    value: "America/Halifax",
    label: "America/Halifax"
  },
  {
    value: "America/Havana",
    label: "America/Havana"
  },
  {
    value: "America/Hermosillo",
    label: "America/Hermosillo"
  },
  {
    value: "America/Indiana/Indianapolis",
    label: "America/Indiana/Indianapolis"
  },
  {
    value: "America/Indiana/Knox",
    label: "America/Indiana/Knox"
  },
  {
    value: "America/Indiana/Marengo",
    label: "America/Indiana/Marengo"
  },
  {
    value: "America/Indiana/Petersburg",
    label: "America/Indiana/Petersburg"
  },
  {
    value: "America/Indiana/Tell_City",
    label: "America/Indiana/Tell_City"
  },
  {
    value: "America/Indiana/Vevay",
    label: "America/Indiana/Vevay"
  },
  {
    value: "America/Indiana/Vincennes",
    label: "America/Indiana/Vincennes"
  },
  {
    value: "America/Indiana/Winamac",
    label: "America/Indiana/Winamac"
  },
  {
    value: "America/Indianapolis",
    label: "America/Indianapolis"
  },
  {
    value: "America/Inuvik",
    label: "America/Inuvik"
  },
  {
    value: "America/Iqaluit",
    label: "America/Iqaluit"
  },
  {
    value: "America/Jamaica",
    label: "America/Jamaica"
  },
  {
    value: "America/Jujuy",
    label: "America/Jujuy"
  },
  {
    value: "America/Juneau",
    label: "America/Juneau"
  },
  {
    value: "America/Kentucky/Louisville",
    label: "America/Kentucky/Louisville"
  },
  {
    value: "America/Kentucky/Monticello",
    label: "America/Kentucky/Monticello"
  },
  {
    value: "America/Knox_IN",
    label: "America/Knox_IN"
  },
  {
    value: "America/La_Paz",
    label: "America/La_Paz"
  },
  {
    value: "America/Lima",
    label: "America/Lima"
  },
  {
    value: "America/Los_Angeles",
    label: "America/Los_Angeles"
  },
  {
    value: "America/Louisville",
    label: "America/Louisville"
  },
  {
    value: "America/Maceio",
    label: "America/Maceio"
  },
  {
    value: "America/Managua",
    label: "America/Managua"
  },
  {
    value: "America/Manaus",
    label: "America/Manaus"
  },
  {
    value: "America/Marigot",
    label: "America/Marigot"
  },
  {
    value: "America/Martinique",
    label: "America/Martinique"
  },
  {
    value: "America/Matamoros",
    label: "America/Matamoros"
  },
  {
    value: "America/Mazatlan",
    label: "America/Mazatlan"
  },
  {
    value: "America/Mendoza",
    label: "America/Mendoza"
  },
  {
    value: "America/Menominee",
    label: "America/Menominee"
  },
  {
    value: "America/Merida",
    label: "America/Merida"
  },
  {
    value: "America/Mexico_City",
    label: "America/Mexico_City"
  },
  {
    value: "America/Miquelon",
    label: "America/Miquelon"
  },
  {
    value: "America/Moncton",
    label: "America/Moncton"
  },
  {
    value: "America/Monterrey",
    label: "America/Monterrey"
  },
  {
    value: "America/Montevideo",
    label: "America/Montevideo"
  },
  {
    value: "America/Montreal",
    label: "America/Montreal"
  },
  {
    value: "America/Montserrat",
    label: "America/Montserrat"
  },
  {
    value: "America/Nassau",
    label: "America/Nassau"
  },
  {
    value: "America/New_York",
    label: "America/New_York"
  },
  {
    value: "America/Nipigon",
    label: "America/Nipigon"
  },
  {
    value: "America/Nome",
    label: "America/Nome"
  },
  {
    value: "America/Noronha",
    label: "America/Noronha"
  },
  {
    value: "America/North_Dakota/Center",
    label: "America/North_Dakota/Center"
  },
  {
    value: "America/North_Dakota/New_Salem",
    label: "America/North_Dakota/New_Salem"
  },
  {
    value: "America/Ojinaga",
    label: "America/Ojinaga"
  },
  {
    value: "America/Panama",
    label: "America/Panama"
  },
  {
    value: "America/Pangnirtung",
    label: "America/Pangnirtung"
  },
  {
    value: "America/Paramaribo",
    label: "America/Paramaribo"
  },
  {
    value: "America/Phoenix",
    label: "America/Phoenix"
  },
  {
    value: "America/Port-au-Prince",
    label: "America/Port-au-Prince"
  },
  {
    value: "America/Porto_Acre",
    label: "America/Porto_Acre"
  },
  {
    value: "America/Port_of_Spain",
    label: "America/Port_of_Spain"
  },
  {
    value: "America/Porto_Velho",
    label: "America/Porto_Velho"
  },
  {
    value: "America/Puerto_Rico",
    label: "America/Puerto_Rico"
  },
  {
    value: "America/Rainy_River",
    label: "America/Rainy_River"
  },
  {
    value: "America/Rankin_Inlet",
    label: "America/Rankin_Inlet"
  },
  {
    value: "America/Recife",
    label: "America/Recife"
  },
  {
    value: "America/Regina",
    label: "America/Regina"
  },
  {
    value: "America/Resolute",
    label: "America/Resolute"
  },
  {
    value: "America/Rio_Branco",
    label: "America/Rio_Branco"
  },
  {
    value: "America/Rosario",
    label: "America/Rosario"
  },
  {
    value: "America/Santa_Isabel",
    label: "America/Santa_Isabel"
  },
  {
    value: "America/Santarem",
    label: "America/Santarem"
  },
  {
    value: "America/Santiago",
    label: "America/Santiago"
  },
  {
    value: "America/Santo_Domingo",
    label: "America/Santo_Domingo"
  },
  {
    value: "America/Sao_Paulo",
    label: "America/Sao_Paulo"
  },
  {
    value: "America/Scoresbysund",
    label: "America/Scoresbysund"
  },
  {
    value: "America/Shiprock",
    label: "America/Shiprock"
  },
  {
    value: "America/St_Barthelemy",
    label: "America/St_Barthelemy"
  },
  {
    value: "America/St_Johns",
    label: "America/St_Johns"
  },
  {
    value: "America/St_Kitts",
    label: "America/St_Kitts"
  },
  {
    value: "America/St_Lucia",
    label: "America/St_Lucia"
  },
  {
    value: "America/St_Thomas",
    label: "America/St_Thomas"
  },
  {
    value: "America/St_Vincent",
    label: "America/St_Vincent"
  },
  {
    value: "America/Swift_Current",
    label: "America/Swift_Current"
  },
  {
    value: "America/Tegucigalpa",
    label: "America/Tegucigalpa"
  },
  {
    value: "America/Thule",
    label: "America/Thule"
  },
  {
    value: "America/Thunder_Bay",
    label: "America/Thunder_Bay"
  },
  {
    value: "America/Tijuana",
    label: "America/Tijuana"
  },
  {
    value: "America/Toronto",
    label: "America/Toronto"
  },
  {
    value: "America/Tortola",
    label: "America/Tortola"
  },
  {
    value: "America/Vancouver",
    label: "America/Vancouver"
  },
  {
    value: "America/Virgin",
    label: "America/Virgin"
  },
  {
    value: "America/Whitehorse",
    label: "America/Whitehorse"
  },
  {
    value: "America/Winnipeg",
    label: "America/Winnipeg"
  },
  {
    value: "America/Yakutat",
    label: "America/Yakutat"
  },
  {
    value: "America/Yellowknife",
    label: "America/Yellowknife"
  },
  {
    value: "Europe/Amsterdam",
    label: "Europe/Amsterdam"
  },
  {
    value: "Europe/Andorra",
    label: "Europe/Andorra"
  },
  {
    value: "Europe/Athens",
    label: "Europe/Athens"
  },
  {
    value: "Europe/Belfast",
    label: "Europe/Belfast"
  },
  {
    value: "Europe/Belgrade",
    label: "Europe/Belgrade"
  },
  {
    value: "Europe/Berlin",
    label: "Europe/Berlin"
  },
  {
    value: "Europe/Bratislava",
    label: "Europe/Bratislava"
  },
  {
    value: "Europe/Brussels",
    label: "Europe/Brussels"
  },
  {
    value: "Europe/Bucharest",
    label: "Europe/Bucharest"
  },
  {
    value: "Europe/Budapest",
    label: "Europe/Budapest"
  },
  {
    value: "Europe/Chisinau",
    label: "Europe/Chisinau"
  },
  {
    value: "Europe/Copenhagen",
    label: "Europe/Copenhagen"
  },
  {
    value: "Europe/Dublin",
    label: "Europe/Dublin"
  },
  {
    value: "Europe/Gibraltar",
    label: "Europe/Gibraltar"
  },
  {
    value: "Europe/Guernsey",
    label: "Europe/Guernsey"
  },
  {
    value: "Europe/Helsinki",
    label: "Europe/Helsinki"
  },
  {
    value: "Europe/Isle_of_Man",
    label: "Europe/Isle_of_Man"
  },
  {
    value: "Europe/Istanbul",
    label: "Europe/Istanbul"
  },
  {
    value: "Europe/Jersey",
    label: "Europe/Jersey"
  },
  {
    value: "Europe/Kaliningrad",
    label: "Europe/Kaliningrad"
  },
  {
    value: "Europe/Kiev",
    label: "Europe/Kiev"
  },
  {
    value: "Europe/Lisbon",
    label: "Europe/Lisbon"
  },
  {
    value: "Europe/Ljubljana",
    label: "Europe/Ljubljana"
  },
  {
    value: "Europe/London",
    label: "Europe/London"
  },
  {
    value: "Europe/Luxembourg",
    label: "Europe/Luxembourg"
  },
  {
    value: "Europe/Madrid",
    label: "Europe/Madrid"
  },
  {
    value: "Europe/Malta",
    label: "Europe/Malta"
  },
  {
    value: "Europe/Mariehamn",
    label: "Europe/Mariehamn"
  },
  {
    value: "Europe/Minsk",
    label: "Europe/Minsk"
  },
  {
    value: "Europe/Monaco",
    label: "Europe/Monaco"
  },
  {
    value: "Europe/Moscow",
    label: "Europe/Moscow"
  },
  {
    value: "Europe/Nicosia",
    label: "Europe/Nicosia"
  },
  {
    value: "Europe/Oslo",
    label: "Europe/Oslo"
  },
  {
    value: "Europe/Paris",
    label: "Europe/Paris"
  },
  {
    value: "Europe/Podgorica",
    label: "Europe/Podgorica"
  },
  {
    value: "Europe/Prague",
    label: "Europe/Prague"
  },
  {
    value: "Europe/Riga",
    label: "Europe/Riga"
  },
  {
    value: "Europe/Rome",
    label: "Europe/Rome"
  },
  {
    value: "Europe/Samara",
    label: "Europe/Samara"
  },
  {
    value: "Europe/San_Marino",
    label: "Europe/San_Marino"
  },
  {
    value: "Europe/Sarajevo",
    label: "Europe/Sarajevo"
  },
  {
    value: "Europe/Simferopol",
    label: "Europe/Simferopol"
  },
  {
    value: "Europe/Skopje",
    label: "Europe/Skopje"
  },
  {
    value: "Europe/Sofia",
    label: "Europe/Sofia"
  },
  {
    value: "Europe/Stockholm",
    label: "Europe/Stockholm"
  },
  {
    value: "Europe/Tallinn",
    label: "Europe/Tallinn"
  },
  {
    value: "Europe/Tirane",
    label: "Europe/Tirane"
  },
  {
    value: "Europe/Tiraspol",
    label: "Europe/Tiraspol"
  },
  {
    value: "Europe/Uzhgorod",
    label: "Europe/Uzhgorod"
  },
  {
    value: "Europe/Vaduz",
    label: "Europe/Vaduz"
  },
  {
    value: "Europe/Vatican",
    label: "Europe/Vatican"
  },
  {
    value: "Europe/Vienna",
    label: "Europe/Vienna"
  },
  {
    value: "Europe/Vilnius",
    label: "Europe/Vilnius"
  },
  {
    value: "Europe/Volgograd",
    label: "Europe/Volgograd"
  },
  {
    value: "Europe/Warsaw",
    label: "Europe/Warsaw"
  },
  {
    value: "Europe/Zagreb",
    label: "Europe/Zagreb"
  },
  {
    value: "Europe/Zaporozhye",
    label: "Europe/Zaporozhye"
  },
  {
    value: "Europe/Zurich",
    label: "Europe/Zurich"
  },
  {
    value: "Asia/Aden",
    label: "Asia/Aden"
  },
  {
    value: "Asia/Almaty",
    label: "Asia/Almaty"
  },
  {
    value: "Asia/Amman",
    label: "Asia/Amman"
  },
  {
    value: "Asia/Anadyr",
    label: "Asia/Anadyr"
  },
  {
    value: "Asia/Aqtau",
    label: "Asia/Aqtau"
  },
  {
    value: "Asia/Aqtobe",
    label: "Asia/Aqtobe"
  },
  {
    value: "Asia/Ashgabat",
    label: "Asia/Ashgabat"
  },
  {
    value: "Asia/Ashkhabad",
    label: "Asia/Ashkhabad"
  },
  {
    value: "Asia/Baghdad",
    label: "Asia/Baghdad"
  },
  {
    value: "Asia/Bahrain",
    label: "Asia/Bahrain"
  },
  {
    value: "Asia/Baku",
    label: "Asia/Baku"
  },
  {
    value: "Asia/Bangkok",
    label: "Asia/Bangkok"
  },
  {
    value: "Asia/Beirut",
    label: "Asia/Beirut"
  },
  {
    value: "Asia/Bishkek",
    label: "Asia/Bishkek"
  },
  {
    value: "Asia/Brunei",
    label: "Asia/Brunei"
  },
  {
    value: "Asia/Calcutta",
    label: "Asia/Calcutta"
  },
  {
    value: "Asia/Choibalsan",
    label: "Asia/Choibalsan"
  },
  {
    value: "Asia/Chongqing",
    label: "Asia/Chongqing"
  },
  {
    value: "Asia/Chungking",
    label: "Asia/Chungking"
  },
  {
    value: "Asia/Colombo",
    label: "Asia/Colombo"
  },
  {
    value: "Asia/Dacca",
    label: "Asia/Dacca"
  },
  {
    value: "Asia/Damascus",
    label: "Asia/Damascus"
  },
  {
    value: "Asia/Dhaka",
    label: "Asia/Dhaka"
  },
  {
    value: "Asia/Dili",
    label: "Asia/Dili"
  },
  {
    value: "Asia/Dubai",
    label: "Asia/Dubai"
  },
  {
    value: "Asia/Dushanbe",
    label: "Asia/Dushanbe"
  },
  {
    value: "Asia/Gaza",
    label: "Asia/Gaza"
  },
  {
    value: "Asia/Harbin",
    label: "Asia/Harbin"
  },
  {
    value: "Asia/Ho_Chi_Minh",
    label: "Asia/Ho_Chi_Minh"
  },
  {
    value: "Asia/Hong_Kong",
    label: "Asia/Hong_Kong"
  },
  {
    value: "Asia/Hovd",
    label: "Asia/Hovd"
  },
  {
    value: "Asia/Irkutsk",
    label: "Asia/Irkutsk"
  },
  {
    value: "Asia/Istanbul",
    label: "Asia/Istanbul"
  },
  {
    value: "Asia/Jakarta",
    label: "Asia/Jakarta"
  },
  {
    value: "Asia/Jayapura",
    label: "Asia/Jayapura"
  },
  {
    value: "Asia/Jerusalem",
    label: "Asia/Jerusalem"
  },
  {
    value: "Asia/Kabul",
    label: "Asia/Kabul"
  },
  {
    value: "Asia/Kamchatka",
    label: "Asia/Kamchatka"
  },
  {
    value: "Asia/Karachi",
    label: "Asia/Karachi"
  },
  {
    value: "Asia/Kashgar",
    label: "Asia/Kashgar"
  },
  {
    value: "Asia/Kathmandu",
    label: "Asia/Kathmandu"
  },
  {
    value: "Asia/Katmandu",
    label: "Asia/Katmandu"
  },
  {
    value: "Asia/Kolkata",
    label: "Asia/Kolkata"
  },
  {
    value: "Asia/Krasnoyarsk",
    label: "Asia/Krasnoyarsk"
  },
  {
    value: "Asia/Kuala_Lumpur",
    label: "Asia/Kuala_Lumpur"
  },
  {
    value: "Asia/Kuching",
    label: "Asia/Kuching"
  },
  {
    value: "Asia/Kuwait",
    label: "Asia/Kuwait"
  },
  {
    value: "Asia/Macao",
    label: "Asia/Macao"
  },
  {
    value: "Asia/Macau",
    label: "Asia/Macau"
  },
  {
    value: "Asia/Magadan",
    label: "Asia/Magadan"
  },
  {
    value: "Asia/Makassar",
    label: "Asia/Makassar"
  },
  {
    value: "Asia/Manila",
    label: "Asia/Manila"
  },
  {
    value: "Asia/Muscat",
    label: "Asia/Muscat"
  },
  {
    value: "Asia/Nicosia",
    label: "Asia/Nicosia"
  },
  {
    value: "Asia/Novokuznetsk",
    label: "Asia/Novokuznetsk"
  },
  {
    value: "Asia/Novosibirsk",
    label: "Asia/Novosibirsk"
  },
  {
    value: "Asia/Omsk",
    label: "Asia/Omsk"
  },
  {
    value: "Asia/Oral",
    label: "Asia/Oral"
  },
  {
    value: "Asia/Phnom_Penh",
    label: "Asia/Phnom_Penh"
  },
  {
    value: "Asia/Pontianak",
    label: "Asia/Pontianak"
  },
  {
    value: "Asia/Pyongyang",
    label: "Asia/Pyongyang"
  },
  {
    value: "Asia/Qatar",
    label: "Asia/Qatar"
  },
  {
    value: "Asia/Qyzylorda",
    label: "Asia/Qyzylorda"
  },
  {
    value: "Asia/Rangoon",
    label: "Asia/Rangoon"
  },
  {
    value: "Asia/Riyadh",
    label: "Asia/Riyadh"
  },
  {
    value: "Asia/Saigon",
    label: "Asia/Saigon"
  },
  {
    value: "Asia/Sakhalin",
    label: "Asia/Sakhalin"
  },
  {
    value: "Asia/Samarkand",
    label: "Asia/Samarkand"
  },
  {
    value: "Asia/Seoul",
    label: "Asia/Seoul"
  },
  {
    value: "Asia/Shanghai",
    label: "Asia/Shanghai"
  },
  {
    value: "Asia/Singapore",
    label: "Asia/Singapore"
  },
  {
    value: "Asia/Taipei",
    label: "Asia/Taipei"
  },
  {
    value: "Asia/Tashkent",
    label: "Asia/Tashkent"
  },
  {
    value: "Asia/Tbilisi",
    label: "Asia/Tbilisi"
  },
  {
    value: "Asia/Tehran",
    label: "Asia/Tehran"
  },
  {
    value: "Asia/Tel_Aviv",
    label: "Asia/Tel_Aviv"
  },
  {
    value: "Asia/Thimbu",
    label: "Asia/Thimbu"
  },
  {
    value: "Asia/Thimphu",
    label: "Asia/Thimphu"
  },
  {
    value: "Asia/Tokyo",
    label: "Asia/Tokyo"
  },
  {
    value: "Asia/Ujung_Pandang",
    label: "Asia/Ujung_Pandang"
  },
  {
    value: "Asia/Ulaanbaatar",
    label: "Asia/Ulaanbaatar"
  },
  {
    value: "Asia/Ulan_Bator",
    label: "Asia/Ulan_Bator"
  },
  {
    value: "Asia/Urumqi",
    label: "Asia/Urumqi"
  },
  {
    value: "Asia/Vientiane",
    label: "Asia/Vientiane"
  },
  {
    value: "Asia/Vladivostok",
    label: "Asia/Vladivostok"
  },
  {
    value: "Asia/Yakutsk",
    label: "Asia/Yakutsk"
  },
  {
    value: "Asia/Yekaterinburg",
    label: "Asia/Yekaterinburg"
  },
  {
    value: "Asia/Yerevan",
    label: "Asia/Yerevan"
  },
  {
    value: "Africa/Abidjan",
    label: "Africa/Abidjan"
  },
  {
    value: "Africa/Accra",
    label: "Africa/Accra"
  },
  {
    value: "Africa/Addis_Ababa",
    label: "Africa/Addis_Ababa"
  },
  {
    value: "Africa/Algiers",
    label: "Africa/Algiers"
  },
  {
    value: "Africa/Asmara",
    label: "Africa/Asmara"
  },
  {
    value: "Africa/Asmera",
    label: "Africa/Asmera"
  },
  {
    value: "Africa/Bamako",
    label: "Africa/Bamako"
  },
  {
    value: "Africa/Bangui",
    label: "Africa/Bangui"
  },
  {
    value: "Africa/Banjul",
    label: "Africa/Banjul"
  },
  {
    value: "Africa/Bissau",
    label: "Africa/Bissau"
  },
  {
    value: "Africa/Blantyre",
    label: "Africa/Blantyre"
  },
  {
    value: "Africa/Brazzaville",
    label: "Africa/Brazzaville"
  },
  {
    value: "Africa/Bujumbura",
    label: "Africa/Bujumbura"
  },
  {
    value: "Africa/Cairo",
    label: "Africa/Cairo"
  },
  {
    value: "Africa/Casablanca",
    label: "Africa/Casablanca"
  },
  {
    value: "Africa/Ceuta",
    label: "Africa/Ceuta"
  },
  {
    value: "Africa/Conakry",
    label: "Africa/Conakry"
  },
  {
    value: "Africa/Dakar",
    label: "Africa/Dakar"
  },
  {
    value: "Africa/Dar_es_Salaam",
    label: "Africa/Dar_es_Salaam"
  },
  {
    value: "Africa/Djibouti",
    label: "Africa/Djibouti"
  },
  {
    value: "Africa/Douala",
    label: "Africa/Douala"
  },
  {
    value: "Africa/El_Aaiun",
    label: "Africa/El_Aaiun"
  },
  {
    value: "Africa/Freetown",
    label: "Africa/Freetown"
  },
  {
    value: "Africa/Gaborone",
    label: "Africa/Gaborone"
  },
  {
    value: "Africa/Harare",
    label: "Africa/Harare"
  },
  {
    value: "Africa/Johannesburg",
    label: "Africa/Johannesburg"
  },
  {
    value: "Africa/Kampala",
    label: "Africa/Kampala"
  },
  {
    value: "Africa/Khartoum",
    label: "Africa/Khartoum"
  },
  {
    value: "Africa/Kigali",
    label: "Africa/Kigali"
  },
  {
    value: "Africa/Kinshasa",
    label: "Africa/Kinshasa"
  },
  {
    value: "Africa/Lagos",
    label: "Africa/Lagos"
  },
  {
    value: "Africa/Libreville",
    label: "Africa/Libreville"
  },
  {
    value: "Africa/Lome",
    label: "Africa/Lome"
  },
  {
    value: "Africa/Luanda",
    label: "Africa/Luanda"
  },
  {
    value: "Africa/Lubumbashi",
    label: "Africa/Lubumbashi"
  },
  {
    value: "Africa/Lusaka",
    label: "Africa/Lusaka"
  },
  {
    value: "Africa/Malabo",
    label: "Africa/Malabo"
  },
  {
    value: "Africa/Maputo",
    label: "Africa/Maputo"
  },
  {
    value: "Africa/Maseru",
    label: "Africa/Maseru"
  },
  {
    value: "Africa/Mbabane",
    label: "Africa/Mbabane"
  },
  {
    value: "Africa/Mogadishu",
    label: "Africa/Mogadishu"
  },
  {
    value: "Africa/Monrovia",
    label: "Africa/Monrovia"
  },
  {
    value: "Africa/Nairobi",
    label: "Africa/Nairobi"
  },
  {
    value: "Africa/Ndjamena",
    label: "Africa/Ndjamena"
  },
  {
    value: "Africa/Niamey",
    label: "Africa/Niamey"
  },
  {
    value: "Africa/Nouakchott",
    label: "Africa/Nouakchott"
  },
  {
    value: "Africa/Ouagadougou",
    label: "Africa/Ouagadougou"
  },
  {
    value: "Africa/Porto-Novo",
    label: "Africa/Porto-Novo"
  },
  {
    value: "Africa/Sao_Tome",
    label: "Africa/Sao_Tome"
  },
  {
    value: "Africa/Timbuktu",
    label: "Africa/Timbuktu"
  },
  {
    value: "Africa/Tripoli",
    label: "Africa/Tripoli"
  },
  {
    value: "Africa/Tunis",
    label: "Africa/Tunis"
  },
  {
    value: "Africa/Windhoek",
    label: "Africa/Windhoek"
  },
  {
    value: "Australia/ACT",
    label: "Australia/ACT"
  },
  {
    value: "Australia/Adelaide",
    label: "Australia/Adelaide"
  },
  {
    value: "Australia/Brisbane",
    label: "Australia/Brisbane"
  },
  {
    value: "Australia/Broken_Hill",
    label: "Australia/Broken_Hill"
  },
  {
    value: "Australia/Canberra",
    label: "Australia/Canberra"
  },
  {
    value: "Australia/Currie",
    label: "Australia/Currie"
  },
  {
    value: "Australia/Darwin",
    label: "Australia/Darwin"
  },
  {
    value: "Australia/Eucla",
    label: "Australia/Eucla"
  },
  {
    value: "Australia/Hobart",
    label: "Australia/Hobart"
  },
  {
    value: "Australia/LHI",
    label: "Australia/LHI"
  },
  {
    value: "Australia/Lindeman",
    label: "Australia/Lindeman"
  },
  {
    value: "Australia/Lord_Howe",
    label: "Australia/Lord_Howe"
  },
  {
    value: "Australia/Melbourne",
    label: "Australia/Melbourne"
  },
  {
    value: "Australia/North",
    label: "Australia/North"
  },
  {
    value: "Australia/NSW",
    label: "Australia/NSW"
  },
  {
    value: "Australia/Perth",
    label: "Australia/Perth"
  },
  {
    value: "Australia/Queensland",
    label: "Australia/Queensland"
  },
  {
    value: "Australia/South",
    label: "Australia/South"
  },
  {
    value: "Australia/Sydney",
    label: "Australia/Sydney"
  },
  {
    value: "Australia/Tasmania",
    label: "Australia/Tasmania"
  },
  {
    value: "Australia/Victoria",
    label: "Australia/Victoria"
  },
  {
    value: "Australia/West",
    label: "Australia/West"
  },
  {
    value: "Australia/Yancowinna",
    label: "Australia/Yancowinna"
  },
  {
    value: "Indian/Antananarivo",
    label: "Indian/Antananarivo"
  },
  {
    value: "Indian/Chagos",
    label: "Indian/Chagos"
  },
  {
    value: "Indian/Christmas",
    label: "Indian/Christmas"
  },
  {
    value: "Indian/Cocos",
    label: "Indian/Cocos"
  },
  {
    value: "Indian/Comoro",
    label: "Indian/Comoro"
  },
  {
    value: "Indian/Kerguelen",
    label: "Indian/Kerguelen"
  },
  {
    value: "Indian/Mahe",
    label: "Indian/Mahe"
  },
  {
    value: "Indian/Maldives",
    label: "Indian/Maldives"
  },
  {
    value: "Indian/Mauritius",
    label: "Indian/Mauritius"
  },
  {
    value: "Indian/Mayotte",
    label: "Indian/Mayotte"
  },
  {
    value: "Indian/Reunion",
    label: "Indian/Reunion"
  },
  {
    value: "Atlantic/Azores",
    label: "Atlantic/Azores"
  },
  {
    value: "Atlantic/Bermuda",
    label: "Atlantic/Bermuda"
  },
  {
    value: "Atlantic/Canary",
    label: "Atlantic/Canary"
  },
  {
    value: "Atlantic/Cape_Verde",
    label: "Atlantic/Cape_Verde"
  },
  {
    value: "Atlantic/Faeroe",
    label: "Atlantic/Faeroe"
  },
  {
    value: "Atlantic/Faroe",
    label: "Atlantic/Faroe"
  },
  {
    value: "Atlantic/Jan_Mayen",
    label: "Atlantic/Jan_Mayen"
  },
  {
    value: "Atlantic/Madeira",
    label: "Atlantic/Madeira"
  },
  {
    value: "Atlantic/Reykjavik",
    label: "Atlantic/Reykjavik"
  },
  {
    value: "Atlantic/South_Georgia",
    label: "Atlantic/South_Georgia"
  },
  {
    value: "Atlantic/Stanley",
    label: "Atlantic/Stanley"
  },
  {
    value: "Atlantic/St_Helena",
    label: "Atlantic/St_Helena"
  },
  {
    value: "Pacific/Apia",
    label: "Pacific/Apia"
  },
  {
    value: "Pacific/Auckland",
    label: "Pacific/Auckland"
  },
  {
    value: "Pacific/Chatham",
    label: "Pacific/Chatham"
  },
  {
    value: "Pacific/Easter",
    label: "Pacific/Easter"
  },
  {
    value: "Pacific/Efate",
    label: "Pacific/Efate"
  },
  {
    value: "Pacific/Enderbury",
    label: "Pacific/Enderbury"
  },
  {
    value: "Pacific/Fakaofo",
    label: "Pacific/Fakaofo"
  },
  {
    value: "Pacific/Fiji",
    label: "Pacific/Fiji"
  },
  {
    value: "Pacific/Funafuti",
    label: "Pacific/Funafuti"
  },
  {
    value: "Pacific/Galapagos",
    label: "Pacific/Galapagos"
  },
  {
    value: "Pacific/Gambier",
    label: "Pacific/Gambier"
  },
  {
    value: "Pacific/Guadalcanal",
    label: "Pacific/Guadalcanal"
  },
  {
    value: "Pacific/Guam",
    label: "Pacific/Guam"
  },
  {
    value: "Pacific/Honolulu",
    label: "Pacific/Honolulu"
  },
  {
    value: "Pacific/Johnston",
    label: "Pacific/Johnston"
  },
  {
    value: "Pacific/Kiritimati",
    label: "Pacific/Kiritimati"
  },
  {
    value: "Pacific/Kosrae",
    label: "Pacific/Kosrae"
  },
  {
    value: "Pacific/Kwajalein",
    label: "Pacific/Kwajalein"
  },
  {
    value: "Pacific/Majuro",
    label: "Pacific/Majuro"
  },
  {
    value: "Pacific/Marquesas",
    label: "Pacific/Marquesas"
  },
  {
    value: "Pacific/Midway",
    label: "Pacific/Midway"
  },
  {
    value: "Pacific/Nauru",
    label: "Pacific/Nauru"
  },
  {
    value: "Pacific/Niue",
    label: "Pacific/Niue"
  },
  {
    value: "Pacific/Norfolk",
    label: "Pacific/Norfolk"
  },
  {
    value: "Pacific/Noumea",
    label: "Pacific/Noumea"
  },
  {
    value: "Pacific/Pago_Pago",
    label: "Pacific/Pago_Pago"
  },
  {
    value: "Pacific/Palau",
    label: "Pacific/Palau"
  },
  {
    value: "Pacific/Pitcairn",
    label: "Pacific/Pitcairn"
  },
  {
    value: "Pacific/Ponape",
    label: "Pacific/Ponape"
  },
  {
    value: "Pacific/Port_Moresby",
    label: "Pacific/Port_Moresby"
  },
  {
    value: "Pacific/Rarotonga",
    label: "Pacific/Rarotonga"
  },
  {
    value: "Pacific/Saipan",
    label: "Pacific/Saipan"
  },
  {
    value: "Pacific/Samoa",
    label: "Pacific/Samoa"
  },
  {
    value: "Pacific/Tahiti",
    label: "Pacific/Tahiti"
  },
  {
    value: "Pacific/Tarawa",
    label: "Pacific/Tarawa"
  },
  {
    value: "Pacific/Tongatapu",
    label: "Pacific/Tongatapu"
  },
  {
    value: "Pacific/Truk",
    label: "Pacific/Truk"
  },
  {
    value: "Pacific/Wake",
    label: "Pacific/Wake"
  },
  {
    value: "Pacific/Wallis",
    label: "Pacific/Wallis"
  },
  {
    value: "Pacific/Yap",
    label: "Pacific/Yap"
  },
  {
    value: "Antarctica/Casey",
    label: "Antarctica/Casey"
  },
  {
    value: "Antarctica/Davis",
    label: "Antarctica/Davis"
  },
  {
    value: "Antarctica/DumontDUrville",
    label: "Antarctica/DumontDUrville"
  },
  {
    value: "Antarctica/Macquarie",
    label: "Antarctica/Macquarie"
  },
  {
    value: "Antarctica/Mawson",
    label: "Antarctica/Mawson"
  },
  {
    value: "Antarctica/McMurdo",
    label: "Antarctica/McMurdo"
  },
  {
    value: "Antarctica/Palmer",
    label: "Antarctica/Palmer"
  },
  {
    value: "Antarctica/Rothera",
    label: "Antarctica/Rothera"
  },
  {
    value: "Antarctica/South_Pole",
    label: "Antarctica/South_Pole"
  },
  {
    value: "Antarctica/Syowa",
    label: "Antarctica/Syowa"
  },
  {
    value: "Antarctica/Vostok",
    label: "Antarctica/Vostok"
  },
  {
    value: "Arctic/Longyearbyen",
    label: "Arctic/Longyearbyen"
  },
  {
    value: "UTC",
    label: "UTC"
  },
  {
    value: "UTC-12",
    label: "UTC-12"
  },
  {
    value: "UTC-11",
    label: "UTC-11"
  },
  {
    value: "UTC-10",
    label: "UTC-10"
  },
  {
    value: "UTC-9",
    label: "UTC-9"
  },
  {
    value: "UTC-8",
    label: "UTC-8"
  },
  {
    value: "UTC-7",
    label: "UTC-7"
  },
  {
    value: "UTC-6",
    label: "UTC-6"
  },
  {
    value: "UTC-5",
    label: "UTC-5"
  },
  {
    value: "UTC-4",
    label: "UTC-4"
  },
  {
    value: "UTC-3",
    label: "UTC-3"
  },
  {
    value: "UTC-2",
    label: "UTC-2"
  },
  {
    value: "UTC-1",
    label: "UTC-1"
  },
  {
    value: "UTC+0",
    label: "UTC+0"
  },
  {
    value: "UTC+1",
    label: "UTC+1"
  },
  {
    value: "UTC+2",
    label: "UTC+2"
  },
  {
    value: "UTC+3",
    label: "UTC+3"
  },
  {
    value: "UTC+4",
    label: "UTC+4"
  },
  {
    value: "UTC+5",
    label: "UTC+5"
  },
  {
    value: "UTC+6",
    label: "UTC+6"
  },
  {
    value: "UTC+7",
    label: "UTC+7"
  },
  {
    value: "UTC+8",
    label: "UTC+8"
  },
  {
    value: "UTC+9",
    label: "UTC+9"
  },
  {
    value: "UTC+10",
    label: "UTC+10"
  },
  {
    value: "UTC+11",
    label: "UTC+11"
  },
  {
    value: "UTC+12",
    label: "UTC+12"
  },
  {
    value: "UTC+13",
    label: "UTC+13"
  },
  {
    value: "UTC+14",
    label: "UTC+14"
  }
];

// ../vlncc-frontend/src/components/Utils/PictureUploader/index.tsx
import * as React5 from "react";
import { useRef } from "react";
import { Size as Size4, Button as Button2, ButtonType as ButtonType2 } from "@vaisala-rockhopper/components";
import Resizer from "react-image-file-resizer";
import "./picture-uploader.scss";
import photoPlaceholder from "../../../assets/images/photo-placeholder-70x70.png";
var ProfilePictureUploader = /* @__PURE__ */ __name((props) => {
  const [profilePictureUrl, setProfilePictureUrl] = React5.useState(props.pictureUrl);
  const resizeImage = /* @__PURE__ */ __name((file, maxWidth, maxHeight) => new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      maxWidth,
      maxHeight,
      "JPEG",
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64"
    );
  }), "resizeImage");
  const inputFile = useRef(null);
  return <div className="picture-uploader">
    <input
      id="pitcure-uploader"
      type="file"
      disabled={props.disabled}
      accept="image/jpeg, image/jpg, image/png, image/bmp"
      ref={inputFile}
      className="picture-uploader-file-input-field"
      onChange={async (e) => {
        setProfilePictureUrl(URL.createObjectURL(e.target.files[0]));
        const resizedImg = await resizeImage(e.target.files[0], 70, 70);
        props.onChange(resizedImg);
      }}
    />
    <img
      className="picture-uploader-img"
      src={profilePictureUrl ? profilePictureUrl : photoPlaceholder}
      alt="Profile picture"
    />
    <Button2
      id="picture-uploader-props-html"
      className="picture-uploader-change-picture-button"
      htmlId={props.htmlId}
      buttonSize={Size4.S}
      buttonType={ButtonType2.Link}
      onClick={() => inputFile.current.click()}
    >{props.title}</Button2>
  </div>;
}, "ProfilePictureUploader");
var PictureUploader_default = ProfilePictureUploader;

// ../vlncc-frontend/src/components/profile/EditProfileDialog/index.tsx
import { useTranslation as useTranslation4 } from "react-i18next";

// ../vlncc-frontend/src/components/Utils/Infotip/index.tsx
import { Icon as Icon2, IconName as IconName3, Popover, Size as Size5 } from "@vaisala-rockhopper/components";
import cx2 from "classnames";
import { VaiColor as VaiColor3 } from "@vaisala-rockhopper/design-tokens";

// ../vlncc-frontend/src/hooks/useHtmlId.tsx
var DEFAULT_SEPARATOR = "__";
var useHtmlId = /* @__PURE__ */ __name((props) => {
  const { separator = DEFAULT_SEPARATOR } = props;
  const getId = /* @__PURE__ */ __name((suffix) => {
    return props.htmlId ? suffix ? `${props.htmlId}${separator}${suffix}` : props.htmlId : void 0;
  }, "getId");
  return { getId, ...props };
}, "useHtmlId");
var useHtmlId_default = useHtmlId;

// ../vlncc-frontend/src/components/Utils/Infotip/index.tsx
import "./infotip.scss";
var Infotip = /* @__PURE__ */ __name(({ htmlId: htmlId3 = null, iconProps = {}, popoverProps = {}, children }) => {
  const { getId } = useHtmlId_default({ htmlId: htmlId3 });
  const {
    color = VaiColor3.AquaVaisala,
    name = IconName3.Help,
    size = Size5.M,
    className = null,
    dataTa = TEST_IDS.infotip_icon,
    ...otherIconProps
  } = iconProps;
  const classes = cx2("infotip", className);
  const iconId = getId("icon");
  const icon = <Icon2
    htmlId={iconId}
    data-testid={dataTa}
    className={classes}
    color={color}
    name={name}
    size={size}
    {...otherIconProps}
  />;
  const {
    dataTa: dataTaPopover = TEST_IDS.infotip_popover,
    triggerElement = icon,
    trigger = "click",
    showCloseIcon = false,
    ...otherPopoverProps
  } = popoverProps;
  const iconWrapperId = getId("icon-wrapper");
  const popoverId = getId("popover");
  return <Popover
    id={popoverId}
    triggerElement={
      // HACK! Apparently this is fixed in future versions of TippyJS, but the problem has something to do
      // with the onClick event from the label preventing the popover's click event from firing.
      <div onClick={(e) => e.preventDefault()} id={iconWrapperId}>{triggerElement}</div>
    }
    showCloseIcon={showCloseIcon}
    trigger={trigger}
    data-testid={dataTaPopover}
    {...otherPopoverProps}
    className={cx2("infotip-popover", popoverProps.className)}
  >
    {
      /** NOTE: Use div instead of BodyText to avoid invalid dom nesting errors in console */
    }
    <div className="vai-body-text">{children}</div>
  </Popover>;
}, "Infotip");
var Infotip_default = Infotip;

// ../vlncc-frontend/src/components/profile/EditProfileDialog/index.tsx
import "react-phone-input-2/lib/style.css";
import "./edit-profile-dialog.scss";
var EditProfileDialog = /* @__PURE__ */ __name((props) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation4();
  const [saving, setSaving] = React6.useState(false);
  const getTimeZone = /* @__PURE__ */ __name(() => {
    if (!props.userProfile.tz) {
      return Intl.DateTimeFormat().resolvedOptions().timeZone;
    } else {
      return props.userProfile.tz;
    }
  }, "getTimeZone");
  const [firstName, setFirstName] = React6.useState(props.userProfile.first_name);
  const [firstNameError, setFirstNameError] = React6.useState("");
  const [lastName, setLastName] = React6.useState(props.userProfile.last_name);
  const [lastNameError, setLastNameError] = React6.useState("");
  const [language, setLanguage] = React6.useState(props.userProfile.locale);
  const [languageError, setLanguageError] = React6.useState("");
  const [phoneNumber, setPhoneNumber] = React6.useState(props.userProfile.phone);
  const [phoneNumberError, setPhoneNumberError] = React6.useState("");
  const [pin, setPin] = React6.useState(props.userProfile.pin);
  const [pinError, setPinError] = React6.useState("");
  const [timeZone, setTimeZone] = React6.useState(getTimeZone());
  const [timeZoneError, setTimeZoneError] = React6.useState("");
  const [profilePictureFile, setProfilePictureFile] = React6.useState(null);
  const onFirstNameChange = /* @__PURE__ */ __name((event) => {
    setFirstNameError("");
    setFirstName(event.target.value);
  }, "onFirstNameChange");
  const onLastNameChange = /* @__PURE__ */ __name((event) => {
    setLastNameError("");
    setLastName(event.target.value);
  }, "onLastNameChange");
  const onPhoneNumberChange = /* @__PURE__ */ __name((event) => {
    setPhoneNumberError("");
    setPhoneNumber(event);
  }, "onPhoneNumberChange");
  const onTimeZoneChange = /* @__PURE__ */ __name((event) => {
    setTimeZoneError("");
    setTimeZone(event);
  }, "onTimeZoneChange");
  const onLanguageChange = /* @__PURE__ */ __name((event) => {
    setLanguageError("");
    setLanguage(event);
  }, "onLanguageChange");
  const onPinChange = /* @__PURE__ */ __name((event) => {
    setPinError("");
    setPin(event.target.value);
  }, "onPinChange");
  const onSetUpProfile = /* @__PURE__ */ __name(async () => {
    setSaving(true);
    let errorExist = false;
    const trimmedFirstName = validator.trim(firstName);
    const trimmedLastName = validator.trim(lastName);
    const phone = checkPlusForPhoneNumber(phoneNumber);
    if (!phoneNumber || phoneNumber && !validator.isMobilePhone(phone, "any")) {
      setPhoneNumberError(t("signup.phoneNumberIsNotValid"));
      errorExist = true;
    }
    if (!props.disableUserInputs) {
      if (!trimmedFirstName) {
        setFirstNameError(t("signup.firstNameCannotBeEmpty"));
        errorExist = true;
      } else if (trimmedFirstName?.length > NAME_MAX_LENGTH) {
        setFirstNameError(t("signup.characterLengthError"));
        errorExist = true;
      }
      if (!trimmedLastName) {
        setLastNameError(t("signup.lastNameCannotBeEmpty"));
        errorExist = true;
      } else if (trimmedLastName?.length > NAME_MAX_LENGTH) {
        setLastNameError(t("signup.characterLengthError"));
        errorExist = true;
      }
      if (!language) {
        setLanguageError(t("signup.languageCannotBeEmpty"));
        errorExist = true;
      }
      if (!timeZone) {
        setTimeZoneError(t("signup.timeZoneCannotBeEmpty"));
        errorExist = true;
      }
      if (pin && (!/^\d+$/.test(pin) || pin.length < PIN_MIN_LENGTH || pin.length > PIN_MAX_LENGTH)) {
        setPinError(t("signup.invalidPin"));
        errorExist = true;
      }
    }
    if (!errorExist) {
      let userProfile = {
        user_name: props.userProfile.user_name,
        phone,
        locale: language,
        tz: timeZone,
        first_name: trimmedFirstName,
        last_name: trimmedLastName
      };
      if (!props.disableUserInputs) {
        userProfile = {
          ...userProfile,
          pin,
          picture: profilePictureFile
        };
      }
      await props.editProfile(userProfile);
      dispatch(hideDialog());
    }
    setSaving(false);
  }, "onSetUpProfile");
  const onDismiss = /* @__PURE__ */ __name(() => dispatch(hideDialog()), "onDismiss");
  const isDisabled = saving || !phoneNumber || !firstName || !lastName || !language || !timeZone;
  const modalButtons = <>
    <Button3
      id="edit-profile-finish-button"
      className="vai-space-inline-s"
      htmlId="edit-profile-finish-button"
      onClick={onSetUpProfile}
      disabled={isDisabled}
    >{saving ? <CenteredSpinner_default htmlId="edit-profile-spinner" className="" /> : t("signup.save")}</Button3>
    <Button3
      id="edit-profile-cancel-button"
      htmlId="edit-profile-cancel-button"
      buttonType={ButtonType3.Secondary}
      onClick={onDismiss}
      disabled={saving}
    >{t("signup.cancel")}</Button3>
  </>;
  return <ModalContainer
    id="edit-profile-dialog"
    isOpen
    htmlId="edit-profile-dialog"
    showCloseIcon={true}
    onDismiss={onDismiss}
    width={Size6.S}
    dismissOnOverlayClick={false}
    buttons={modalButtons}
    title="signup.setupProfileTitle"
  >
    <PictureUploader_default
      title={t("profile.changeProfilePicture")}
      htmlId="edit-profile-image-uploader"
      disabled={props.disableUserInputs}
      pictureUrl={props.userProfile.picture}
      onChange={(file) => {
        setProfilePictureFile(file);
      }}
    />
    <Form.Item
      component={InputField}
      label={t("signup.firstName")}
      required={true}
      disabled={props.disableUserInputs}
      htmlId="edit-profile-first-name"
      width={Size6.M}
      value={firstName}
      onChange={onFirstNameChange}
      className={getErrorClass(firstNameError)}
      errors={firstNameError}
    />
    <Form.Item
      label={t("signup.lastName")}
      component={InputField}
      required={true}
      disabled={props.disableUserInputs}
      htmlId="edit-profile-last-name"
      width={Size6.M}
      value={lastName}
      onChange={onLastNameChange}
      className={getErrorClass(lastNameError)}
      errors={lastNameError}
    />
    <Form.Item
      label={t("profile.language")}
      component={Select}
      showSearch
      filterOption={true}
      optionFilterProp="title"
      required={true}
      disabled={props.disableUserInputs}
      htmlId="edit-profile-language"
      defaultValue={t("general.selectEllipsis")}
      value={language}
      width={Size6.M}
      onChange={onLanguageChange}
      className={getErrorClass(languageError)}
    >{Object.values(Languages).map((value) => {
      const langText = LANGUAGE_TEXT[value];
      return <Select.Option
        id={`edit-profile-language-selection-${value}`}
        key={value}
        title={langText}
        value={value}
        data-testid="language-option"
      >{langText}</Select.Option>;
    })}</Form.Item>
    <span id="edit-profile-language-error" className="input-error">{languageError}</span>
    <Form.Item
      label={t("signup.timeZone")}
      component={Select}
      showSearch
      required={true}
      disabled={props.disableUserInputs}
      htmlId="edit-profile-time-zone"
      defaultValue={t("general.selectEllipsis")}
      value={timeZone}
      width={Size6.M}
      onChange={onTimeZoneChange}
      className={getErrorClass(timeZoneError)}
    >{timeZones_default.map((option) => <Select.Option
      id={`edit-profile-time-zone-selection-${option}`}
      key={option.value}
      title={option.label}
      value={option.value}
    >{option.label}</Select.Option>)}</Form.Item>
    <span id="edit-profile-time-zone-error" className="input-error">{timeZoneError}</span>
    <Label2 id="edit-profile-phone-label-tag" className="vai-padding-right-none edit-profile-flex">
      <span id="edit-profile-phone-required-asterisk" className="edit-profile-asterisk"><RequiredAsterisk /></span>
      <span id="edit-profile-phone-label-text" className="edit-profile-phone-number-label">{t("signup.phoneNumber")}</span>
      <PhoneInput
        containerClass="edit-profile-phone-input-container"
        country={DEFAULTCOUNTRYCODE}
        value={phoneNumber}
        onChange={onPhoneNumberChange}
        disableDropdown={true}
        inputClass="edit-profile-phone-input"
      />
    </Label2>
    <div id="edit-profile-phone-error" className="edit-profile-phone-error vai-form-error">{phoneNumberError}</div>
    <Form.Item
      htmlId="edit-profile-pin"
      label={<Flex4>
        <FlexItem2 flexGrow={1}>{t("signup.pin")}</FlexItem2>
        <FlexItem2><Infotip_default htmlId="edit-profile-pin-infotip" iconProps={{ className: "vai-margin-horizontal-xs" }}>{t("infotip.pin")}</Infotip_default></FlexItem2>
      </Flex4>}
      errors={pinError}
    ><PasswordInput2
      htmlId="edit-profile-pin-input"
      name="pin"
      autoComplete="new-password"
      width={Size6.M}
      disabled={props.disableUserInputs}
      value={pin}
      onChange={onPinChange}
      className={getErrorClass(pinError)}
    /></Form.Item>
  </ModalContainer>;
}, "EditProfileDialog");
var EditProfileDialog_default = EditProfileDialog;

// ../vlncc-frontend/src/components/profile/ViewMyProfileDialog/index.tsx
import "./view-my-profile-dialog.scss";
import { useTranslation as useTranslation5 } from "react-i18next";
var ViewMyProfileDialog = /* @__PURE__ */ __name((props) => {
  const { t } = useTranslation5();
  const [pinVisibility, setPinVisibility] = React7.useState(false);
  const dispatch = useAppDispatch();
  React7.useEffect(() => {
    props.getMyProfile();
  }, []);
  const showEditProfileModal = /* @__PURE__ */ __name(() => {
    dispatch(
      showDialog(
        <EditProfileDialog_default disableUserInputs={false} userProfile={props.myProfile} editProfile={props.editProfile} />
      )
    );
  }, "showEditProfileModal");
  const toggleVisbility = /* @__PURE__ */ __name(() => {
    setPinVisibility(!pinVisibility);
  }, "toggleVisbility");
  const onDismiss = /* @__PURE__ */ __name(() => dispatch(hideDialog()), "onDismiss");
  let groupListContent = <CenteredSpinner_default htmlId="view-my-profile-group-list-spinner" />;
  if (!props.userProfileLoading) {
    groupListContent = <Table id="view-my-profile-table" tableStyle={TableStyle.Plain} className="my-profile-table vai-margin-left-s"><TableBody htmlId="view-my-profile-table-body">{props.myProfile.groups.map((row, index) => <TableRow htmlId={`view-my-profile-table-row-${index}`} key={`profile-tabrow-${index}`}>
      <TableCell id={`view-my-profile-table-icon-cell-${index}`} className="aqua-medium">
        <Icon3
          id={`view-my-profile-table-group-icon-${index}`}
          className="my-profile-user-group-icon"
          name={IconName4.UserGroup}
        />
        {row.group_name}
      </TableCell>
      <TableCell className="view-my-profile-table-user-count" id={`view-my-profile-table-users-cell-${index}`}>
        {row.users.length}
        {" "}
        {row.users.length > 1 ? t("profile.users") : t("profile.user")}
      </TableCell>
      <TableCell id={`view-my-profile-table-trash-cell-${index}`}><Icon3 id={`view-my-profile-table-trash-icon-${index}`} name={IconName4.Trash} /></TableCell>
    </TableRow>)}</TableBody></Table>;
  }
  let userProfileContent = <CenteredSpinner_default htmlId="view-my-profile-details-spinner" className="" />;
  if (!props.userProfileLoading) {
    userProfileContent = <div id="view-my-profile-content">
      <Flex5 id="view-my-profile-name-flex-container">
        <Flex5.Item id="view-my-profile-name-flex-first" alignSelf="flex-start" flexBasis="40%" />
        <Flex5.Item alignSelf="flex-end" flexBasis="60%"><Heading2 id="view-my-profile-name-flex-second" className="my-profile-heading" level={2}>{t("profile.myProfile")}</Heading2></Flex5.Item>
      </Flex5>
      <Flex5 id="view-my-profile-picture-flex-container" justifyContent="flex-start" alignItems="center">
        <Flex5.Item id="view-my-profile-picture-flex-first">{props.myProfile.picture ? <img id="view-my-profile-picture-img" src={props.myProfile.picture} alt="Profile picture" /> : <Icon3 id="view-my-profile-picture-icon" className="my-profile-icon" name={IconName4.User} />}</Flex5.Item>
        <Flex5.Item id="view-my-profile-full-name-flex-second" flexBasis="auto"><div id="view-my-profile-full-name-container" className="my-profile-full-name">{props.myProfile.first_name || props.myProfile.last_name ? (props.myProfile.first_name + " " + props.myProfile.last_name).trim() : props.myProfile.email.trim()}</div></Flex5.Item>
      </Flex5>
      <Separator2 />
      <Flex5 id="my-profile-info-flex-container" className="my-profile-info-container">
        <Flex5.Item alignSelf="flex-start" flexBasis="49%" style={{ height: "100%" }}>
          <Flex5 className="vai-margin-top-m vai-margin-bottom-s">
            <Flex5.Item><p id="my-profile-info-text" className="my-profile-header">{t("profile.profileInformation")}</p></Flex5.Item>
            <Flex5.Item className="my-profile-top-right-button-container aqua-medium"><Button4
              id="view-my-profile-dialog"
              buttonType={ButtonType4.Secondary}
              className="my-profile-top-right-button"
              onClick={showEditProfileModal}
            >{t("profile.editProfile")}</Button4></Flex5.Item>
          </Flex5>
          <Table
            tableStyle={TableStyle.Plain}
            className="my-profile-table my-profile-borderless-table vai-margin-left-s"
            id="my-profile-info-table"
          ><TableBody htmlId="my-profile-info-table-body">
            <TableRow>
              <TableCell id="my-profile-company-id-title">{t("profile.companyID")}</TableCell>
              <TableCell id="my-profile-company-id-text" className="grey-medium">{props.myProfile.company_alias}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell id="my-profile-username-title">{t("profile.unsernameEmail")}</TableCell>
              <TableCell id="my-profile-username-text" className="grey-medium">{props.myProfile.user_name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell id="my-profile-language-title">{t("profile.language")}</TableCell>
              <TableCell id="my-profile-language-text">{LANGUAGE_TEXT[props.myProfile.locale]}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell id="my-profile-time-zone-title">{t("profile.timeZone")}</TableCell>
              <TableCell id="my-profile-timezone-text">{props.myProfile.tz}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell id="my-profile-notification-email-title">{t("profile.notificationEmail")}</TableCell>
              <TableCell id="my-profile-notification-email-text">{props.myProfile.email}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell id="my-profile-phone-title">{t("profile.phone")}</TableCell>
              <TableCell id="my-profile-phone-text">{props.myProfile.phone}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell id="my-profile-pin-title">{t("profile.pin")}</TableCell>
              <TableCell id="my-profile-pin-text"><span>{pinVisibility ? props.myProfile.pin : "*****"}</span></TableCell>
              <TableCell><Button4
                id="my-profile-visibility-icon-button"
                buttonType={ButtonType4.Secondary}
                buttonSize={Size7.S}
                onClick={toggleVisbility}
              ><Icon3
                id="my-profile-visibility-icon-icon"
                name={pinVisibility ? IconName4.VisibilityOn : IconName4.VisibilityOff}
              /></Button4></TableCell>
            </TableRow>
          </TableBody></Table>
        </Flex5.Item>
        <Flex5.Item alignSelf="center" flexBasis="2%" style={{ height: "100%" }}><hr className="vertical-separator" /></Flex5.Item>
        <Flex5.Item alignSelf="flex-end" flexBasis="49%" style={{ height: "100%" }}>
          <Flex5 className="vai-margin-top-m vai-margin-bottom-s"><Flex5.Item><p id="my-profile-groups-header" className="my-profile-header">{t("profile.groups")}</p></Flex5.Item></Flex5>
          <p id="my-profile-access-right-header" className="grey-medium vai-margin-top-m vai-margin-bottom-l">{t("profile.accessRight")}</p>
          {groupListContent}
        </Flex5.Item>
      </Flex5>
    </div>;
  }
  return <Modal2
    id="view-my-profile-dialog"
    isOpen
    htmlId="view-my-profile-dialog"
    showCloseIcon={true}
    onDismiss={onDismiss}
    width={Size7.L}
    dismissOnOverlayClick={false}
    className="view-my-profile-modal"
  ><Flex5><Flex5.Item alignSelf="flex-start" flexBasis="100%">{userProfileContent}</Flex5.Item></Flex5></Modal2>;
}, "ViewMyProfileDialog");
var ViewMyProfileDialog_default = ViewMyProfileDialog;

// ../vlncc-frontend/src/containers/ViewMyProfile.tsx
var mapDispatchToProps2 = /* @__PURE__ */ __name((dispatch) => ({
  getMyProfile: () => dispatch(profileDispatchActions.getMyProfile()),
  editProfile: (userProfile) => dispatch(profileDispatchActions.editProfile(userProfile))
}), "mapDispatchToProps");
var mapStateToProps2 = /* @__PURE__ */ __name(({ profile, general }) => ({
  profile,
  language: general.language
}), "mapStateToProps");
var ViewMyProfileContainer = /* @__PURE__ */ __name((props) => {
  return <ViewMyProfileDialog_default
    getMyProfile={props.getMyProfile}
    userProfileLoading={props.profile.myProfileLoading}
    myProfile={props.profile.myProfile}
    editProfile={props.editProfile}
    editProfileSucceedFlag={props.profile.isEditProfileSucceed}
    editProfileError={props.profile.editProfileError}
  />;
}, "ViewMyProfileContainer");
var ViewMyProfile_default = withDisplaySize(connect2(mapStateToProps2, mapDispatchToProps2)(ViewMyProfileContainer));

// ../vlncc-frontend/src/context/TimeContext.tsx
import { getMinutes as getMinutes2 } from "date-fns";
import React8 from "react";

// ../vlncc-frontend/src/store/profile.ts
var selectCurrentUser = /* @__PURE__ */ __name((state) => state.profile.currentUser, "selectCurrentUser");
var selectTimeZone = /* @__PURE__ */ __name((state) => state.profile?.currentUser?.tz, "selectTimeZone");

// ../vlncc-frontend/src/context/TimeContext.tsx
var TimeContext = React8.createContext(null);
function TimeContextProvider({ children }) {
  const defaultValue = getTodayWithNearestAvailableTime();
  const [today2, setToday] = React8.useState(defaultValue);
  const timeDetails = React8.useRef({ date: null, time: "", zone: "" });
  const mounted = React8.useRef(true);
  const timeZone = useAppSelector(selectTimeZone);
  React8.useEffect(() => {
    const getAndSetTimeInfo = /* @__PURE__ */ __name(async () => {
      const { date, time, zone } = await getTime(timeZone);
      timeDetails.current = { date, time, zone };
      setToday(getTodayWithNearestAvailableTime());
    }, "getAndSetTimeInfo");
    getAndSetTimeInfo();
    let interval;
    if (true) {
      interval = setInterval(async () => {
        if (mounted.current === false) {
          clearInterval(interval);
          return;
        }
        const now = /* @__PURE__ */ new Date();
        if (timeDetails.current.date === null || getMinutes2(timeDetails.current.date) !== getMinutes2(now)) {
          await getAndSetTimeInfo();
        }
      }, 1e3);
    }
    return /* @__PURE__ */ __name(function cleanup() {
      mounted.current = false;
      clearInterval(interval);
    }, "cleanup");
  }, [timeZone]);
  const value = { today: today2, setToday, timeDetails };
  return <TimeContext.Provider value={value}>{children}</TimeContext.Provider>;
}
__name(TimeContextProvider, "TimeContextProvider");
var TimeContext_default = TimeContext;

// ../vlncc-frontend/src/hooks/useLaunchpad.tsx
import React9 from "react";
import { useTranslation as useTranslation6 } from "react-i18next";
function waitForElement(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }
    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
}
__name(waitForElement, "waitForElement");
var useLaunchpad = /* @__PURE__ */ __name(() => {
  const { t, i18n: i18n2 } = useTranslation6();
  const replaceHeading = /* @__PURE__ */ __name(() => {
    const header = document.getElementsByClassName(".appcues-widget-header h4");
    if (header?.length > 0) {
      header[0].innerText = t("header.tours", { count: 2 });
    }
  }, "replaceHeading");
  const init = /* @__PURE__ */ __name(async () => {
    removeAppcues();
    const toursText = t("header.tours", { count: 2 });
    window.Appcues.loadLaunchpad("#tours", {
      //Optionally specify the position of the content relative to the Launchpad icon. Possible values are as followed:
      //	- center (default value, i.e. bottom-center)
      //	- left (i.e. bottom-left)
      //	- right (i.e. bottom-right)
      //	- top (i.e. top-center)
      //	- top-left
      //	- top-right
      position: "left",
      // Optionally add a header or footer. This must be HTML.
      header: `<h4 class="vai-margin-none vai-margin-left-s">${toursText}</h4>`,
      // footer: "<p>Your footer here</p>",
      // And if you'd prefer to use a custom icon rather than the default "bell" icon, you can optionally pass
      // in an icon as well. Make sure that src is set to the right resource, whether it's in your site's directory or hosted
      // !HACK: Don't want to use an img, we want to use an icon from rockhopper. The failing image will be removed below
      icon: "invalid.png"
    });
    waitForElement("#tours button").then(() => {
      const tour = document.getElementById("tours");
      const img = tour.querySelector("img");
      if (img) {
        img.remove();
      }
      const button = tour.querySelector("button");
      button.classList.add("tour-button");
      button.title = toursText;
      button.innerHTML = '<i id="tour-icon" class="vai-icon vai-icon--tour vai-header-item__icon"></i>';
    });
  }, "init");
  const removeAppcues = /* @__PURE__ */ __name(() => {
    const el = document.querySelector(".appcues");
    if (el) {
      el.remove();
    }
  }, "removeAppcues");
  React9.useEffect(() => {
    init();
    return removeAppcues;
  }, []);
  React9.useEffect(() => {
    replaceHeading();
  }, [i18n2.language]);
  return { initLaunchpad: init, removeAppcues, replaceHeading };
}, "useLaunchpad");
var useLaunchpad_default = useLaunchpad;

// ../vlncc-frontend/src/store/auth.ts
var selectIsAuthenticated = /* @__PURE__ */ __name((state) => state.auth.isAuthenticated, "selectIsAuthenticated");

// ../vlncc-frontend/src/components/Sidebar/index.tsx
import { Drawer } from "@vaisala-rockhopper/components";
import React11 from "react";
import { useLocation } from "react-router-dom";

// ../vlncc-frontend/src/components/Utils/EmptyState/EmptyState.tsx
import { BodyText, Flex as Flex6, Heading as Heading3 } from "@vaisala-rockhopper/components";
import { useTranslation as useTranslation7 } from "react-i18next";
import { Link } from "react-router-dom";

// ../vlncc-frontend/src/components/Utils/EmptyState/Illustration.tsx
import React10 from "react";
import { ReactComponent as Positive } from "../../../assets/images/Positive.svg";
import { ReactComponent as EmptyFolder } from "../../../assets/images/EmptyFolder.svg";
import { ReactComponent as EmptyTable } from "../../../assets/images/EmptyTable.svg";
import { ReactComponent as GenericError } from "../../../assets/images/GenericError.svg";
import { ReactComponent as NothingFound } from "../../../assets/images/NothingFound.svg";
import { ReactComponent as NothingSelected } from "../../../assets/images/NothingSelected.svg";
import { ReactComponent as ConnectionLost } from "../../../assets/images/ConnectionLost.svg";
var Illustration = /* @__PURE__ */ __name(({ illustration, id, children }) => {
  let component = null;
  switch (illustration) {
    case "positive":
      component = <Positive />;
      break;
    case "emptyFolder":
      component = <EmptyFolder />;
      break;
    case "connectionLost":
      component = <ConnectionLost />;
      break;
    case "emptyTable":
      component = <EmptyTable />;
      break;
    case "nothingFound":
      component = <NothingFound />;
      break;
    case "nothingSelected":
      component = <NothingSelected />;
      break;
    case "genericError":
      component = <GenericError />;
      break;
    default:
      return null;
  }
  return <>
    {React10.cloneElement(component, { id })}
    {children}
  </>;
}, "Illustration");

// ../vlncc-frontend/src/components/Utils/EmptyState/EmptyState.tsx
import "./empty-state.scss";
var EmptyState = /* @__PURE__ */ __name(({ heading, description, illustration, link, htmlId: htmlId3 }) => {
  const { t } = useTranslation7();
  const { getId } = useHtmlId_default({ htmlId: htmlId3 });
  return <Flex6
    data-testid="empty-state-wrapper"
    id={getId("container")}
    className="empty-state empty-state__container"
    alignItems="center"
    justifyContent="center"
    flexDirection="column"
  >
    <Illustration id={getId("illustration")} illustration={illustration} />
    <Heading3 htmlId={getId("heading")} className="empty-state__heading">{t(heading)}</Heading3>
    {description && <BodyText htmlId={getId("description")} className="empty-state__body-text">{t(description)}</BodyText>}
    {link && <Link id={getId("link")} className="empty-state__link" to={link.to}>{t(link.desc)}</Link>}
  </Flex6>;
}, "EmptyState");

// ../vlncc-frontend/src/components/Sidebar/index.tsx
var LOWERED_EN = "en-US" /* en */.toLowerCase();
var Sidebar = /* @__PURE__ */ __name(({ isOpen = false, language = "en-US" /* en */ }) => {
  const [currentExtension, setCurrentExtension] = React11.useState("");
  const [content, setContent] = React11.useState(null);
  const location = useLocation();
  const loadContent = /* @__PURE__ */ __name((language2, area, path) => {
    const loweredLanguage = language2?.toLowerCase() || LOWERED_EN;
    const fullExtension = `${loweredLanguage}/${area}_${path || ROOT_LEVEL_NAME}.html`;
    const homeExtension = `${loweredLanguage}/${area}_${ROOT_LEVEL_NAME}.html`;
    if (fullExtension === currentExtension || homeExtension === currentExtension) {
      return;
    }
    let newContent = null;
    let currExtension;
    const routesToTry = Array.from(
      /* @__PURE__ */ new Set([
        fullExtension,
        homeExtension,
        fullExtension.replace(`${loweredLanguage}/`, `${LOWERED_EN}/`),
        homeExtension.replace(`${loweredLanguage}/`, `${LOWERED_EN}/`)
      ])
    );
    for (const route of routesToTry) {
      try {
        currExtension = route;
        newContent = __require("html-loader!../../docs/sidebar/" + route);
        break;
      } catch (error) {
      }
    }
    if (!newContent) {
      currExtension = null;
      console.warn("No sidebar content for this page");
    } else {
      const parsedHTML = new DOMParser().parseFromString(newContent.default, "text/html");
      newContent = { default: parsedHTML.body.innerHTML };
    }
    setContent(newContent);
    setCurrentExtension(currExtension);
  }, "loadContent");
  React11.useEffect(() => {
    const [, area, path] = location.pathname.split("/");
    loadContent(language, area, path);
  }, [location.pathname, language]);
  return <Drawer
    data-testid={TEST_IDS.sidebar_help_drawer}
    isOpen={isOpen}
    anchor={SIDEBAR_ANCHOR}
    width={SIDEBAR_WIDTH}
    underNavigation={true}
  >
    {content?.default ? <div
      className="vai-margin-m inner"
      data-testid={TEST_IDS.sidebar_help_content_wrapper}
      dangerouslySetInnerHTML={{ __html: content.default }}
    /> : <div className="vai-margin-m inner" data-testid={TEST_IDS.sidebar_help_empty}>{!content && <EmptyState heading="noResults" illustration="nothingFound" />}</div>}
    {
      /** This is merely to use to confirm which file is loaded in the test suite. */
    }
    <div style={{ display: "none" }} data-testid={TEST_IDS.sidebar_current_route}>{currentExtension}</div>
  </Drawer>;
}, "Sidebar");
var Sidebar_default = Sidebar;

// ../vlncc-frontend/src/components/Header.tsx
var mapStateToProps3 = /* @__PURE__ */ __name((state) => ({}), "mapStateToProps");
var mapDispatchToProps3 = /* @__PURE__ */ __name((dispatch) => ({
  logout: (globalSignout) => dispatch(authDispatchActions.logout(globalSignout)),
  startChangePassword: () => dispatch(authDispatchActions.startChangePassword()),
  changeTheme: () => dispatch(actionCreators.changeTheme)
}), "mapDispatchToProps");
var { Light: Light2, Dark: Dark2 } = ApplicationTheme2;
var { Check, Settings, Logout } = IconName5;
var Header = /* @__PURE__ */ __name(({
  logout: logout2,
  changeTheme: changeTheme2,
  startChangePassword: startChangePassword2,
  pageContentScrollStatus,
  logoVisible
}) => {
  const { t } = useTranslation8();
  const location = useLocation2();
  const [displayShadow, setDisplayShadow] = useState5(false);
  const [helpIcon, setHelpIcon] = React12.useState(IconName5.HelpO);
  const isOpen = useAppSelector(selectIsOpen);
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const language = useAppSelector(selectLanguage);
  const dispatch = useAppDispatch();
  const { timeDetails } = React12.useContext(TimeContext_default);
  useLaunchpad_default();
  useEffect5(() => {
    setDisplayShadow(
      pageContentScrollStatus === ScrollStatus.Bottom || pageContentScrollStatus === ScrollStatus.Scrolled
    );
  }, [pageContentScrollStatus]);
  const onChangePassword = /* @__PURE__ */ __name(() => {
    startChangePassword2();
    dispatch(showDialog(<ChangePassword_default />));
  }, "onChangePassword");
  const onViewMyProfile = /* @__PURE__ */ __name(() => {
    dispatch(showDialog(<ViewMyProfile_default />));
  }, "onViewMyProfile");
  const onLogout = /* @__PURE__ */ __name(() => {
    logout2(false);
  }, "onLogout");
  React12.useEffect(() => {
    return () => {
      dispatch(setIsOpen(false));
    };
  }, []);
  function getHeaderTitle() {
    const mainContentUrl = `/${location.pathname.split("?")[0].split("/")[1]}`;
    switch (mainContentUrl) {
      case routes.profile.url:
        return t("commonTitles.groupsAndUsers");
      case routes.events.url:
        return t("commonTitles.events");
      case routes.site.url:
        return t("commonTitles.sites");
      case routes.reports.url:
      case routes.downloadReport.url:
        return t("commonTitles.reports");
      case routes.deviceManager.url:
        return t("commonTitles.deviceManager");
      default:
        return "";
    }
  }
  __name(getHeaderTitle, "getHeaderTitle");
  return <VaiHeader
    logoVisible={logoVisible}
    title={getHeaderTitle()}
    displayShadow={displayShadow}
    time={timeDetails.current.time}
    timeDetails={[timeDetails.current.zone]}
  >
    {
      /**
      * Because the sidebar Drawer and dropdown item are both absolutely positioned, we need to place
      * Sidebar in here for relative z-index. This allows the menu to appear above the Drawer */
    }
    {isAuthenticated && <Sidebar_default isOpen={isOpen} language={language} />}
    <VaiHeader.Menu
      className="vai-header-menu__button no-chevron sidebar-menu-item"
      startIcon={<Icon4
        data-testid={TEST_IDS.sidebar_help_icon}
        title={t("general.help")}
        name={isOpen ? IconName5.Help : helpIcon}
      />}
      onClick={() => {
        dispatch(setIsOpen(!isOpen));
      }}
      onMouseEnter={() => {
        setHelpIcon(IconName5.Help);
      }}
      onMouseLeave={() => {
        setHelpIcon(IconName5.HelpO);
      }}
      data-testid={TEST_IDS.sidebar_help}
    />
    {
      /** Emulate a header menu from rockhopper to get correct styling. Did not want the chevron for the dropdown. */
    }
    <div className="vai-header-item vai-header-menu__button tour-menu-item"><div id="tours" data-testid={TEST_IDS.tours_dropdown} /></div>
    <VaiHeader.Menu startIcon={<Icon4 name={IconName5.User} />} title={t("user")} data-testid="user-menu">
      <VaiHeader.MenuItem
        htmlId="header-view-my-profile"
        startIcon={<Icon4 name={IconName5.User} style={{ visibility: "hidden" }} />}
        onClick={onViewMyProfile}
        data-testid={TEST_IDS.user_menu_item}
      >{t("menu.viewMyProfile")}</VaiHeader.MenuItem>
      <VaiHeader.MenuItem
        htmlId="header-change-password"
        startIcon={<Icon4 name={Settings} />}
        onClick={onChangePassword}
        data-testid={TEST_IDS.user_menu_item}
      >{t("menu.changePassword")}</VaiHeader.MenuItem>
      <VaiHeader.MenuItem
        htmlId="header-logout"
        startIcon={<Icon4 name={Logout} />}
        onClick={onLogout}
        data-testid={TEST_IDS.user_menu_item}
      >{t("auth.logout")}</VaiHeader.MenuItem>
    </VaiHeader.Menu>
  </VaiHeader>;
}, "Header");
var Header_default = connect3(mapStateToProps3, mapDispatchToProps3)(Header);

// ../vlncc-frontend/src/components/Navigation.tsx
import { Link as Link2, useLocation as useLocation3 } from "react-router-dom";
import { SimpleNavigation } from "@vaisala-rockhopper/components";
import { useTranslation as useTranslation9 } from "react-i18next";
var itemUrlName = /* @__PURE__ */ __name((hierarchyItem) => {
  let path;
  if (typeof hierarchyItem === "string") {
    path = hierarchyItem.split("/");
  } else {
    path = hierarchyItem.url.split("/");
  }
  return path[path.length - 1];
}, "itemUrlName");
var getHierarchy = /* @__PURE__ */ __name((t, user) => {
  const reportsRouteUrl = itemUrlName(routes.reports);
  const devicesRouteUrl = itemUrlName(routes.deviceManager);
  const profileRouteUrl = itemUrlName(routes.profile);
  const eventsRouteUrl = itemUrlName(routes.events);
  const sitesRouteUrl = itemUrlName(routes.site);
  const notReady = [];
  const hierarchy = {
    [sitesRouteUrl]: {
      item: <Link2 to={`${routes.site.url}/status`}>{t("commonTitles.sites")}</Link2>
    },
    [reportsRouteUrl]: {
      item: <Link2 to={`${routes.reports.url}/${routes.reports.graph.url}`}>{t("commonTitles.reports")}</Link2>
    },
    [eventsRouteUrl]: {
      item: <Link2 to={routes.events.url}>{t("commonTitles.events")}</Link2>
    },
    [profileRouteUrl]: {
      item: <Link2 to={routes.profile.url}>{t("commonTitles.groupsAndUsers")}</Link2>
    },
    [devicesRouteUrl]: {
      item: <Link2 to={`${routes.deviceManager.url}/status`}>{t("commonTitles.deviceManager")}</Link2>
    }
  };
  if (user) {
    if (!user.canManageDevices) {
      delete hierarchy[devicesRouteUrl];
    }
    if (!user.canManageUsersAndGroups) {
      delete hierarchy[profileRouteUrl];
    }
  } else {
    return {};
  }
  if (isProd() && notReady.length > 0) {
    notReady.forEach((route) => {
      delete hierarchy[route];
    });
  }
  return hierarchy;
}, "getHierarchy");
var Navigation = /* @__PURE__ */ __name(({ collapsed, onCollapseChange }) => {
  const location = useLocation3();
  const { t } = useTranslation9();
  const currentUser = useAppSelector(selectCurrentUser);
  return <SimpleNavigation
    location={location.pathname}
    collapsed={collapsed}
    onCollapseChange={onCollapseChange}
    hierarchy={getHierarchy(t, currentUser)}
    productName={t("general.appName")}
  />;
}, "Navigation");
var Navigation_default = Navigation;

// ../vlncc-frontend/src/containers/Site.tsx
import * as React24 from "react";
import { Navigate, Route, Routes, useNavigate, useLocation as useLocation5 } from "react-router-dom";

// ../vlncc-frontend/src/components/SiteTree/SiteTree.tsx
import { useEffect as useEffect7, useRef as useRef2, useState as useState9 } from "react";
import { find } from "lodash";
import { TreeMenu } from "@vaisala/rockhub-tree-menu";
import {
  Button as Button8,
  ButtonType as ButtonType8,
  Flex as Flex8,
  InputField as InputField3,
  Size as Size16,
  Icon as Icon7,
  IconName as IconName7,
  MenuButton,
  MenuButtonToggle,
  MenuButtonList,
  MenuButtonListItem,
  Separator as Separator4
} from "@vaisala-rockhopper/components";
import { VaiSpacing, VaiIcon as VaiIcon5 } from "@vaisala-rockhopper/design-tokens";
import { ResizableBox } from "react-resizable";
import { useTranslation as useTranslation16 } from "react-i18next";

// ../vlncc-frontend/src/components/SiteTree/Tree/EmptyTree.tsx
import { BodyText as BodyText2 } from "@vaisala-rockhopper/components";
import "./empty-tree.scss";
function EmptyTree({ message }) {
  return <div className="site-tree-empty-state"><BodyText2>{message}</BodyText2></div>;
}
__name(EmptyTree, "EmptyTree");

// ../vlncc-frontend/src/hooks/useSiteTreeActions.tsx
import { useEffect as useEffect6 } from "react";
import { NotificationType as NotificationType4 } from "@vaisala-rockhopper/components";
import { QueryStatus } from "@reduxjs/toolkit/dist/query";
var getCreateSuccessNotificationString = /* @__PURE__ */ __name((node_type, node_name) => {
  if (node_type === SITE_KEY) {
    return i18n_default.t("site.notifySiteCreated", { siteName: node_name });
  } else if (node_type === ZONE_KEY) {
    return i18n_default.t("site.notifyZoneCreated", { zoneName: node_name });
  } else if (node_type === LOCATION_KEY) {
    return i18n_default.t("site.notifyLocationCreated", { locationName: node_name });
  }
}, "getCreateSuccessNotificationString");
var getCreateErrorNotificationString = /* @__PURE__ */ __name((node_type, node_name) => {
  if (node_type === SITE_KEY) {
    return i18n_default.t("site.notifySiteCreateFailed", { siteName: node_name });
  } else if (node_type === ZONE_KEY) {
    return i18n_default.t("site.notifyZoneCreateFailed", { zoneName: node_name });
  } else if (node_type === LOCATION_KEY) {
    return i18n_default.t("site.notifyLocationCreateFailed", { locationName: node_name });
  }
}, "getCreateErrorNotificationString");
var getDeleteSuccessNotificationString = /* @__PURE__ */ __name((node_type, node_name) => {
  if (node_type === SITE_KEY) {
    return i18n_default.t("site.notifySiteDeleted", { siteName: node_name });
  } else if (node_type === ZONE_KEY) {
    return i18n_default.t("site.notifyZoneDeleted", { zoneName: node_name });
  } else if (node_type === LOCATION_KEY) {
    return i18n_default.t("site.notifyLocationDeleted", { locationName: node_name });
  }
}, "getDeleteSuccessNotificationString");
var getDeleteErrorNotificationString = /* @__PURE__ */ __name((node_type, node_name) => {
  if (node_type === SITE_KEY) {
    return i18n_default.t("site.notifySiteDeleteFailed", { siteName: node_name });
  } else if (node_type === ZONE_KEY) {
    return i18n_default.t("site.notifyZoneDeleteFailed", { zoneName: node_name });
  } else if (node_type === LOCATION_KEY) {
    return i18n_default.t("site.notifyLocationDeleteFailed", { locationName: node_name });
  }
}, "getDeleteErrorNotificationString");
var getEditSuccessNotificationString = /* @__PURE__ */ __name((node_type, node_name) => {
  if (node_type === SITE_KEY) {
    return i18n_default.t("site.notifySiteEdited", { siteName: node_name });
  } else if (node_type === ZONE_KEY) {
    return i18n_default.t("site.notifyZoneEdited", { zoneName: node_name });
  } else if (node_type === LOCATION_KEY) {
    return i18n_default.t("site.notifyLocationEdited", { locationName: node_name });
  }
}, "getEditSuccessNotificationString");
var getEditErrorNotificationString = /* @__PURE__ */ __name((node_type, node_name) => {
  if (node_type === SITE_KEY) {
    return i18n_default.t("site.notifySiteEditFailed", { siteName: node_name });
  } else if (node_type === ZONE_KEY) {
    return i18n_default.t("site.notifyZoneEditFailed", { zoneName: node_name });
  } else if (node_type === LOCATION_KEY) {
    return i18n_default.t("site.notifyLocationEditFailed", { locationName: node_name });
  }
}, "getEditErrorNotificationString");
var getMoveErrorNotificationString = /* @__PURE__ */ __name((type, name, errorKey) => {
  let message;
  if (errorKey) {
    const translation = i18n_default.t(errorKey);
    translation !== errorKey && (message = translation);
  } else {
    message = i18n_default.t("site.notifyMoveFailed", { name, type: `$t(commonTitles.${type})` });
  }
  return message;
}, "getMoveErrorNotificationString");
var useSiteTreeActions = /* @__PURE__ */ __name(() => {
  const dispatch = useAppDispatch();
  const [
    createTreeNode,
    {
      isError: createTreeNodeError,
      originalArgs: createTreeNodeArgs,
      data: createTreeNodeResult,
      status: createTreeNodeStatus
    }
  ] = useAddNodeMutation();
  const [
    linkTreeNode,
    { isError: linkTreeNodeError, originalArgs: linkTreeNodeArgs, status: linkTreeNodeStatus }
  ] = useLinkNodeMutation();
  const [
    unlinkTreeNode,
    { isError: unlinkTreeNodeError, originalArgs: unlinkTreeNodeArgs, status: unlinkTreeNodeStatus }
  ] = useUnlinkNodeMutation();
  const [
    editTreeNode,
    { isError: editTreeNodeError, originalArgs: editTreeNodeArgs, status: editTreeNodeStatus }
  ] = useEditNodeMutation();
  const [
    deleteTreeNode,
    { isError: deleteTreeNodeError, originalArgs: deleteTreeNodeArgs, status: deleteTreeNodeStatus }
  ] = useDeleteNodeMutation();
  const [
    moveTreeNode,
    { isError: moveTreeNodeError, status: moveTreeNodeStatus, originalArgs: moveNodeArgs, error: moveNodeError }
  ] = useMoveNodeMutation();
  useEffect6(() => {
    if (unlinkTreeNodeStatus === QueryStatus.fulfilled && !unlinkTreeNodeError) {
      dispatch(
        addNotification({
          type: NotificationType4.Ok,
          content: i18n_default.t("site.notifyLocationUnlinkSuccess", {
            locationName: unlinkTreeNodeArgs.name,
            dataSource: unlinkTreeNodeArgs.dataSource.device_model + "-" + unlinkTreeNodeArgs.dataSource.device_sn
          })
        })
      );
    }
    if (unlinkTreeNodeStatus === QueryStatus.rejected && unlinkTreeNodeError) {
      dispatch(
        addNotification({
          type: NotificationType4.Alarm,
          content: i18n_default.t("site.notifyLocationUnlinkFailed", {
            locationName: unlinkTreeNodeArgs.name,
            dataSource: unlinkTreeNodeArgs.dataSource.device_model + "-" + unlinkTreeNodeArgs.dataSource.device_sn
          })
        })
      );
    }
  }, [unlinkTreeNodeStatus]);
  useEffect6(() => {
    if (linkTreeNodeStatus === QueryStatus.fulfilled && !linkTreeNodeError) {
      dispatch(
        addNotification({
          type: NotificationType4.Ok,
          content: i18n_default.t("site.notifyLocationLinkSuccess", {
            locationName: linkTreeNodeArgs.name,
            dataSource: linkTreeNodeArgs.linkedNode.device_model + "-" + linkTreeNodeArgs.linkedNode.device_sn
          })
        })
      );
    }
    if (linkTreeNodeStatus === QueryStatus.rejected && linkTreeNodeError) {
      dispatch(
        addNotification({
          type: NotificationType4.Alarm,
          content: i18n_default.t("site.notifyLocationLinkFailed", { locationName: linkTreeNodeArgs.name })
        })
      );
    }
  }, [linkTreeNodeStatus]);
  useEffect6(() => {
    if (createTreeNodeStatus === QueryStatus.fulfilled && createTreeNodeResult) {
      dispatch(
        addNotification({
          type: NotificationType4.Ok,
          content: getCreateSuccessNotificationString(createTreeNodeArgs.type, createTreeNodeArgs.name)
        })
      );
      dispatch(setSelectedNodeId(createTreeNodeResult.node_id));
    }
    if (createTreeNodeStatus === QueryStatus.rejected && createTreeNodeError) {
      dispatch(
        addNotification({
          type: NotificationType4.Alarm,
          content: getCreateErrorNotificationString(createTreeNodeArgs.type, createTreeNodeArgs.name)
        })
      );
    }
  }, [createTreeNodeStatus]);
  useEffect6(() => {
    if (editTreeNodeStatus === QueryStatus.fulfilled && !editTreeNodeError) {
      dispatch(
        addNotification({
          type: NotificationType4.Ok,
          content: getEditSuccessNotificationString(editTreeNodeArgs.node_type, editTreeNodeArgs.name)
        })
      );
    }
    if (editTreeNodeStatus === QueryStatus.rejected && editTreeNodeError) {
      dispatch(
        addNotification({
          type: NotificationType4.Alarm,
          content: getEditErrorNotificationString(editTreeNodeArgs.node_type, editTreeNodeArgs.name)
        })
      );
    }
  }, [editTreeNodeStatus]);
  useEffect6(() => {
    if (deleteTreeNodeStatus === QueryStatus.pending) {
      dispatch(setCurrentlyRemoving(deleteTreeNodeArgs.node_id));
    }
    if (deleteTreeNodeStatus === QueryStatus.fulfilled && !deleteTreeNodeError) {
      dispatch(
        addNotification({
          type: NotificationType4.Ok,
          content: getDeleteSuccessNotificationString(deleteTreeNodeArgs.type, deleteTreeNodeArgs.name)
        })
      );
      dispatch(setSelectedNodeId(deleteTreeNodeArgs.parent_id));
    }
    if (deleteTreeNodeStatus === QueryStatus.rejected && deleteTreeNodeError) {
      dispatch(
        addNotification({
          type: NotificationType4.Alarm,
          content: getDeleteErrorNotificationString(deleteTreeNodeArgs.type, deleteTreeNodeArgs.name)
        })
      );
    }
  }, [deleteTreeNodeStatus]);
  const backendErrorKey = isFetchBaseQueryError(moveNodeError) ? moveNodeError.data.errKey : null;
  useEffect6(() => {
    if (moveTreeNodeStatus === QueryStatus.rejected && moveTreeNodeError) {
      dispatch(
        addNotification({
          type: NotificationType4.Alarm,
          content: getMoveErrorNotificationString(moveNodeArgs.type, moveNodeArgs.name, backendErrorKey)
        })
      );
    }
  }, [moveTreeNodeStatus, moveTreeNodeError, backendErrorKey]);
  return { createTreeNode, linkTreeNode, unlinkTreeNode, editTreeNode, deleteTreeNode, moveTreeNode };
}, "useSiteTreeActions");
var useSiteTreeActions_default = useSiteTreeActions;
function isFetchBaseQueryError(modeNodeError) {
  return Boolean(modeNodeError && modeNodeError.data && modeNodeError.data.errKey);
}
__name(isFetchBaseQueryError, "isFetchBaseQueryError");

// ../vlncc-frontend/src/components/SiteTree/Location/LocationFormDialog.tsx
import { useState as useState6 } from "react";
import validator2 from "validator";
import { useTranslation as useTranslation12 } from "react-i18next";

// ../vlncc-frontend/src/components/validator/validate.ts
import { isString } from "lodash";
var validateCannotBeEmpty = /* @__PURE__ */ __name((value) => {
  return isString(value) && value !== "";
}, "validateCannotBeEmpty");
var validateCharacterMaxLength = /* @__PURE__ */ __name((value, maxLength, optional) => {
  if (optional && !value) {
    return true;
  }
  return value.length <= maxLength ? true : false;
}, "validateCharacterMaxLength");
var validateCannotMatch = /* @__PURE__ */ __name((value, match) => {
  return value !== match ? true : false;
}, "validateCannotMatch");

// ../vlncc-frontend/src/components/SiteTree/Form/Fields/DecimalPlaces.tsx
import { Form as Form2, Select as Select2, Size as Size8 } from "@vaisala-rockhopper/components";

// ../vlncc-frontend/src/data/decimalPlaces.json
var decimalPlaces_default = [
  {
    value: 0,
    label: "0"
  },
  {
    value: 1,
    label: "0.0"
  },
  {
    value: 2,
    label: "0.00"
  },
  {
    value: 3,
    label: "0.000"
  },
  {
    value: 4,
    label: "0.0000"
  },
  {
    value: 5,
    label: "0.00000"
  }
];

// ../vlncc-frontend/src/components/SiteTree/Form/Fields/DecimalPlaces.tsx
var [_one_decimal, default_two_decimal] = decimalPlaces_default;
var DecimalPlaces = /* @__PURE__ */ __name(({ label, onChange, value, errorMessage, action }) => {
  return <Form2.Item
    label={label}
    component={Select2}
    required={true}
    id={`${action}-zone-and-location-dialog-decimal-places`}
    defaultValue={default_two_decimal}
    value={value}
    width={Size8.M}
    onChange={onChange}
    className={getErrorClass(errorMessage)}
    data-testid={TEST_IDS.site_tree_form_dialog_decimal_places_field}
  >{decimalPlaces_default.map((option) => <Select2.Option
    key={`${option.value}`}
    title={option.label}
    value={option.value}
    id={`${action}-zone-and-location-dialog-${option.value}`}
  >{option.label}</Select2.Option>)}</Form2.Item>;
}, "DecimalPlaces");

// ../vlncc-frontend/src/components/SiteTree/Form/Fields/MeasurementType.tsx
import { Form as Form3, Select as Select3, Size as Size9 } from "@vaisala-rockhopper/components";

// ../vlncc-frontend/src/data/measurementTypes.json
var measurementTypes_default = [
  {
    value: "temperature",
    label: "temperature",
    units: [
      { value: "celsius", label: "celsius" },
      { value: "fahrenheit", label: "fahrenheit" }
    ]
  },
  {
    value: "humidity",
    label: "relativeHumidity",
    units: [{ value: "rh", label: "rh" }]
  },
  {
    value: "co2",
    label: "co2",
    units: [
      { value: "percent", label: "percent" },
      { value: "ppm", label: "partsPerMillion" }
    ]
  }
];

// ../vlncc-frontend/src/components/SiteTree/Form/Fields/MeasurementType.tsx
import { useTranslation as useTranslation10 } from "react-i18next";
var MeasurementTypes = /* @__PURE__ */ __name(({ label, onChange, value, errorMessage, action }) => {
  const { t } = useTranslation10();
  return <Form3.Item
    label={label}
    component={Select3}
    required={true}
    id={`${action}-zone-and-location-dialog-measurement-type`}
    htmlId={`${action}-zone-and-location-dialog-measurement-type`}
    defaultValue={t("form.selectPlaceholder")}
    value={value}
    width={Size9.M}
    onChange={onChange}
    className={getErrorClass(errorMessage)}
    data-testid={TEST_IDS.site_tree_form_dialog_measurementType_field}
  >{measurementTypes_default.map((option) => <Select3.Option
    key={`${option.value}`}
    title={t(`general.${option.label}`)}
    value={option.value}
    id={`${action}-zone-and-location-dialog-${option.value}`}
  >{t(`general.${option.label}`)}</Select3.Option>)}</Form3.Item>;
}, "MeasurementTypes");

// ../vlncc-frontend/src/components/SiteTree/Form/Fields/Name.tsx
import { Form as Form4, InputField as InputField2, Size as Size10 } from "@vaisala-rockhopper/components";
var Name = /* @__PURE__ */ __name(({ label, onChange, value, errorMessage, action }) => {
  return <Form4.Item
    component={InputField2}
    label={label}
    required={true}
    id={`${action}-zone-and-location-dialog-name`}
    width={Size10.M}
    value={value}
    onChange={onChange}
    className={getErrorClass(errorMessage)}
    errors={errorMessage}
    data-testid={TEST_IDS.site_tree_form_dialog_name_field}
  />;
}, "Name");

// ../vlncc-frontend/src/components/SiteTree/Form/Fields/Description.tsx
import { Form as Form5, Size as Size11, TextArea } from "@vaisala-rockhopper/components";
var Description = /* @__PURE__ */ __name(({ label, onChange, value, errorMessage, action }) => {
  return <Form5.Item
    component={TextArea}
    placeholder={i18n_default.t("general.optional")}
    label={label}
    rows={2}
    required={false}
    id={`${action}-zone-and-location-dialog-description`}
    width={Size11.Auto}
    value={value}
    onChange={onChange}
    className={getErrorClass(errorMessage)}
    errors={errorMessage}
    data-testid={TEST_IDS.site_tree_form_dialog_description_field}
  />;
}, "Description");

// ../vlncc-frontend/src/components/SiteTree/Form/Fields/UnitType.tsx
import { Form as Form6, Select as Select4, Size as Size12 } from "@vaisala-rockhopper/components";

// ../vlncc-frontend/src/data/unitTypes.ts
var unitTypes = {
  ["temperature" /* temperature */]: [
    { value: "celsius", label: "celsius" },
    { value: "fahrenheit", label: "fahrenheit" }
  ],
  ["humidity" /* relativeHumidity */]: [{ value: "rh", label: "rh" }],
  ["co2" /* co2 */]: [
    { value: "percent", label: "percent" },
    { value: "ppm", label: "partsPerMillion" }
  ]
};

// ../vlncc-frontend/src/components/SiteTree/Form/Fields/UnitType.tsx
import { useTranslation as useTranslation11 } from "react-i18next";
var UnitTypes = /* @__PURE__ */ __name(({ label, onChange, value, errorMessage, measurementType, action }) => {
  const { t } = useTranslation11();
  return <Form6.Item
    label={label}
    component={Select4}
    required={true}
    id={`${action}-zone-and-location-dialog-unit-type`}
    defaultValue={t("form.selectPlaceholder")}
    value={value}
    width={Size12.M}
    onChange={onChange}
    className={getErrorClass(errorMessage)}
    data-testid={TEST_IDS.site_tree_form_dialog_unitType_field}
  >{unitTypes[measurementType] && unitTypes[measurementType].map((option) => <Select4.Option
    key={option.value}
    title={option.label}
    value={option.value}
    id={`${action}-zone-and-location-dialog-${option.value}`}
  >{t(`site.${option.label}`)}</Select4.Option>)}</Form6.Item>;
}, "UnitTypes");

// ../vlncc-frontend/src/components/SiteTree/Form/FormDialog.tsx
import { Size as Size14, Button as Button5, ButtonType as ButtonType5 } from "@vaisala-rockhopper/components";

// ../vlncc-frontend/src/components/SiteTree/Form/Fields/ParentZone.tsx
import { Icon as Icon5, IconName as IconName6, RequiredAsterisk as RequiredAsterisk2, Size as Size13 } from "@vaisala-rockhopper/components";
var ParentZone = /* @__PURE__ */ __name(({ iconName, parentZoneName }) => {
  return <div
    data-ta={TEST_IDS.site_tree_form_dialog_parent_zone}
    id="zone-and-location-dialog-parent-name-container"
    className="zone-and-location-dialog-parent-name-container"
  >
    <span id="zone-and-location-dialog-astrisk" className="zone-and-location-dialog-astrisk"><RequiredAsterisk2 /></span>
    <span id="zone-and-location-dialog-parent-zone" className="zone-and-location-dialog-parent-zone">{i18n_default.t("site.parentZone")}</span>
    <Icon5
      className="zone-and-location-dialog-icon"
      id="zone-and-location-dialog-icon"
      name={iconName || IconName6.FolderOpen}
      size={Size13.M}
    />
    <span
      data-ta={TEST_IDS.site_tree_form_dialog_parent_zone_name}
      id="zone-and-location-dialog-parent-zone-name"
      className="zone-and-location-dialog-parent-zone-name"
    >{parentZoneName}</span>
  </div>;
}, "ParentZone");

// ../vlncc-frontend/src/components/SiteTree/Form/FormDialog.tsx
var SiteTreeFormDialog = /* @__PURE__ */ __name(({
  title,
  onDismiss,
  saveButtonDisabled,
  onSave,
  children,
  iconName,
  parentZoneName,
  Footer,
  action
}) => {
  return <ModalContainer
    id={`${action}-zone-and-location-dialog-id`}
    htmlId={`${action}-zone-and-location-dialog`}
    isOpen
    showCloseIcon={true}
    onDismiss={onDismiss}
    width={Size14.S}
    dismissOnOverlayClick={false}
    title={title}
    buttons={<>
      <Button5
        id={`${action}-zone-and-location-confirm`}
        htmlId={`${action}-zone-and-location-confirm`}
        disabled={saveButtonDisabled}
        onClick={onSave}
        data-testid={TEST_IDS.site_tree_form_dialog_save_button}
      >{i18n_default.t("general.save")}</Button5>
      <Button5
        id={`${action}-zone-and-location-cancel`}
        htmlId={`${action}-zone-and-location-cancel`}
        onClick={onDismiss}
        buttonType={ButtonType5.Secondary}
      >{i18n_default.t("general.cancel")}</Button5>
    </>}
    footerChildren={Footer}
  >
    {parentZoneName && <ParentZone iconName={iconName} parentZoneName={parentZoneName} />}
    {children}
  </ModalContainer>;
}, "SiteTreeFormDialog");

// ../vlncc-frontend/src/components/SiteTree/Location/LocationFormDialog.tsx
import "../zone-and-location-dialog.scss";
var [temperature] = measurementTypes_default;
var [{ value: defaultHumidityOptionValue }] = unitTypes.humidity;
var [{ value: defaultCelsiusOptionValue }] = unitTypes.temperature;
var [{ value: defaultCo2OptionValue }] = unitTypes.co2;
var [__, { value: defaultDecimalPlaceValue }] = decimalPlaces_default;
var LocationFormDialog = /* @__PURE__ */ __name(({
  siblingNames,
  onSave,
  selectedItemObject,
  Footer,
  parentName,
  formAction,
  icon
}) => {
  const { t } = useTranslation12();
  const dispatch = useAppDispatch();
  const [name, setName] = useState6(selectedItemObject?.text || "");
  const [nameError, setNameError] = useState6("");
  const [description, setDescription] = useState6(selectedItemObject?.description || "");
  const [descriptionError, setDescriptionError] = useState6("");
  const [measurementType, setMeasurementType] = useState6(
    selectedItemObject?.meas_id || temperature.value
  );
  const [measurementTypeError, setMeasurementTypeError] = useState6("");
  const [unitType, setUnitType] = useState6(selectedItemObject?.symbol_id || defaultCelsiusOptionValue);
  const [unitTypeError, setUnitTypeError] = useState6("");
  const [decimalPlace, setDecimalPlace] = useState6(
    formAction === "edit" /* EDIT */ ? selectedItemObject.decimal_places : defaultDecimalPlaceValue
  );
  const [decimalPlaceError, setDecimalPlaceError] = useState6("");
  const onDismiss = /* @__PURE__ */ __name(() => dispatch(hideDialog()), "onDismiss");
  const onNameChange = /* @__PURE__ */ __name((event) => {
    setNameError("");
    setName(event.target.value);
    if (!validateCharacterMaxLength(event.target.value, SITE_NAME_MAX_LENGTH)) {
      setNameError(t("site.characterMaxLengthError", { charLen: SITE_NAME_MAX_LENGTH }));
    }
  }, "onNameChange");
  const onDescriptionChange = /* @__PURE__ */ __name((event) => {
    setDescriptionError("");
    setDescription(event.target.value);
    if (!validateCharacterMaxLength(event.target.value, SITE_DESCRIPTION_MAX_LENGTH)) {
      setDescriptionError(t("site.characterMaxLengthError", { charLen: SITE_DESCRIPTION_MAX_LENGTH }));
    }
  }, "onDescriptionChange");
  const onMeasurementTypeChange = /* @__PURE__ */ __name((event) => {
    setMeasurementTypeError("");
    setMeasurementType(event);
    switch (event) {
      case "temperature" /* temperature */:
        setUnitType(defaultCelsiusOptionValue);
        break;
      case "humidity" /* relativeHumidity */:
        setUnitType(defaultHumidityOptionValue);
        break;
      case "co2" /* co2 */:
        setUnitType(defaultCo2OptionValue);
        break;
      default:
        setUnitType(void 0);
    }
  }, "onMeasurementTypeChange");
  const onUnitTypeChange = /* @__PURE__ */ __name((event) => {
    setUnitTypeError("");
    setUnitType(event);
  }, "onUnitTypeChange");
  const onDecimalPlaceChange = /* @__PURE__ */ __name((event) => {
    setDecimalPlaceError("");
    setDecimalPlace(event);
  }, "onDecimalPlaceChange");
  const onCreateNewNode = /* @__PURE__ */ __name(() => {
    let errorExist = false;
    const trimmedName = validator2.trim(name);
    const trimmedDescription = validator2.trim(description);
    errorExist = !(validateCannotBeEmpty(trimmedName) && validateCannotBeEmpty(unitType) && validateCannotBeEmpty(measurementType) && validateCharacterMaxLength(trimmedName, SITE_NAME_MAX_LENGTH) && validateCharacterMaxLength(trimmedDescription, SITE_DESCRIPTION_MAX_LENGTH, true));
    if (!validateCannotBeEmpty(trimmedName.trim())) {
      setNameError(t("site.nameCannotBeEmpty"));
    }
    if (siblingNames && siblingNames?.indexOf(trimmedName.toLowerCase()) !== -1) {
      setNameError(t("site.nameConnotmatchSiblingName", { parentName }));
      errorExist = true;
    }
    if (!validateCannotMatch(trimmedName.toLowerCase(), parentName.toLowerCase())) {
      setNameError(t("site.nameConnotmatchParent"));
      errorExist = true;
    }
    if (!errorExist) {
      const newTreeNode = {
        meas_id: measurementType,
        symbol_id: unitType,
        decimal_places: decimalPlace,
        name: trimmedName,
        description: trimmedDescription
      };
      onSave(newTreeNode);
      onDismiss();
    }
  }, "onCreateNewNode");
  const isNameInvalid = !name || nameError.length > 0;
  const isDescriptionInvalid = descriptionError.length > 0;
  const hasformChanged = selectedItemObject?.text !== name || selectedItemObject?.description !== description || selectedItemObject?.meas_id !== measurementType || selectedItemObject?.symbol_id !== unitType || selectedItemObject?.decimal_places !== decimalPlace;
  return <SiteTreeFormDialog
    action={formAction}
    iconName={icon}
    parentZoneName={parentName}
    onDismiss={onDismiss}
    onSave={onCreateNewNode}
    title={formAction === "create" /* CREATE */ ? "site.newLocation" : "site.editLocation"}
    saveButtonDisabled={!hasformChanged || isNameInvalid || isDescriptionInvalid}
    Footer={Footer}
  >
    <Name
      action={formAction}
      label={t("general.name")}
      value={name}
      onChange={onNameChange}
      errorMessage={nameError}
    />
    <MeasurementTypes
      action={formAction}
      label={t("site.measurementType")}
      value={measurementType}
      onChange={onMeasurementTypeChange}
      errorMessage={measurementTypeError}
    />
    <UnitTypes
      action={formAction}
      value={unitType}
      onChange={onUnitTypeChange}
      errorMessage={unitTypeError}
      label={t("site.unit")}
      measurementType={measurementType}
    />
    <DecimalPlaces
      action={formAction}
      label={t("site.decimalPlace")}
      errorMessage={decimalPlaceError}
      value={decimalPlace}
      onChange={onDecimalPlaceChange}
    />
    <Description
      action={formAction}
      value={description}
      onChange={onDescriptionChange}
      errorMessage={descriptionError}
      label={t("general.description")}
    />
  </SiteTreeFormDialog>;
}, "LocationFormDialog");

// ../vlncc-frontend/src/components/SiteTree/Zone/ZoneFormDialog.tsx
import { useState as useState7 } from "react";
import validator3 from "validator";
import { useTranslation as useTranslation13 } from "react-i18next";
import "../zone-and-location-dialog.scss";
var ZoneFormDialog = /* @__PURE__ */ __name(({
  childNames,
  siblingNames,
  onSave,
  parentName,
  selectedItemObject,
  icon,
  Footer,
  formAction
}) => {
  const { t } = useTranslation13();
  const dispatch = useAppDispatch();
  const [name, setName] = useState7(selectedItemObject?.text || "");
  const [nameError, setNameError] = useState7("");
  const [description, setDescription] = useState7(selectedItemObject?.description || "");
  const [descriptionError, setDescriptionError] = useState7("");
  const onDismiss = /* @__PURE__ */ __name(() => dispatch(hideDialog()), "onDismiss");
  const onNameChange = /* @__PURE__ */ __name((event) => {
    setNameError("");
    setName(event.target.value);
    if (!validateCharacterMaxLength(event.target.value, SITE_NAME_MAX_LENGTH)) {
      setNameError(t("site.characterMaxLengthError", { charLen: SITE_NAME_MAX_LENGTH }));
    }
  }, "onNameChange");
  const onDescriptionChange = /* @__PURE__ */ __name((event) => {
    setDescriptionError("");
    setDescription(event.target.value);
    if (!validateCharacterMaxLength(event.target.value, SITE_DESCRIPTION_MAX_LENGTH)) {
      setDescriptionError(t("site.characterMaxLengthError", { charLen: SITE_DESCRIPTION_MAX_LENGTH }));
    }
  }, "onDescriptionChange");
  const handleSave = /* @__PURE__ */ __name(() => {
    let errorExist = false;
    const trimmedName = validator3.trim(name);
    const trimmedDescription = validator3.trim(description);
    errorExist = !(validateCannotBeEmpty(trimmedName) && validateCharacterMaxLength(trimmedName, SITE_NAME_MAX_LENGTH) && validateCharacterMaxLength(trimmedDescription, SITE_DESCRIPTION_MAX_LENGTH, true));
    if (siblingNames && siblingNames.indexOf(trimmedName.toLowerCase()) !== -1) {
      setNameError(t("site.nameConnotmatchSiblingName", { parentName }));
      errorExist = true;
    }
    if (childNames && childNames.indexOf(trimmedName.toLowerCase()) !== -1) {
      setNameError(t("site.nameConnotmatchChild", { parentName }));
      errorExist = true;
    }
    if (!validateCannotMatch(trimmedName.toLocaleLowerCase(), parentName.toLocaleLowerCase())) {
      setNameError(t("site.nameConnotmatchParent"));
      errorExist = true;
    }
    if (!validateCannotBeEmpty(trimmedName)) {
      setNameError(t("site.nameCannotBeEmpty"));
    }
    if (!errorExist) {
      const newTreeNode = {
        name: trimmedName,
        description: trimmedDescription
      };
      onSave(newTreeNode);
      onDismiss();
    }
  }, "handleSave");
  const isNameInvalid = !name || nameError.length > 0;
  const isDescriptionInvalid = descriptionError.length > 0;
  const hasformChanged = selectedItemObject?.text !== name || selectedItemObject?.description !== description;
  return <SiteTreeFormDialog
    action={formAction}
    iconName={icon}
    parentZoneName={parentName}
    onDismiss={onDismiss}
    onSave={handleSave}
    title={formAction === "create" /* CREATE */ ? "site.newZone" : "site.editZone"}
    saveButtonDisabled={!hasformChanged || isNameInvalid || isDescriptionInvalid}
    Footer={Footer}
  >
    <Name
      action={formAction}
      label={t("general.name")}
      value={name}
      onChange={onNameChange}
      errorMessage={nameError}
    />
    <Description
      action={formAction}
      value={description}
      onChange={onDescriptionChange}
      errorMessage={descriptionError}
      label={t("general.description")}
    />
  </SiteTreeFormDialog>;
}, "ZoneFormDialog");

// ../vlncc-frontend/src/components/SiteTree/Form/DeleteNodeSection.tsx
import { Flex as Flex7, FlexItem as FlexItem3, Button as Button6, ButtonType as ButtonType6, Icon as Icon6, Separator as Separator3 } from "@vaisala-rockhopper/components";
import { VaiIcon as VaiIcon3 } from "@vaisala-rockhopper/design-tokens";
var DeleteNodeSection = /* @__PURE__ */ __name(({ constraintText, label, onDelete, canBeDeleted }) => {
  return <>
    <Separator3 id="edit-zone-and-location-delete-separator" />
    <Flex7 id="edit-zone-and-location-delete-flex-container" justifyContent="space-between">
      <FlexItem3 id="edit-zone-and-location-delete-flex-first" alignSelf="center" flexBasis="90%"><Button6
        onClick={onDelete}
        disabled={!canBeDeleted}
        id="edit-zone-and-location-delete"
        buttonType={ButtonType6.Link}
        data-testid={TEST_IDS.site_tree_form_dialog_delete_button}
        startIcon={<Icon6 name={VaiIcon3.Trash} />}
      >{label}</Button6></FlexItem3>
      <FlexItem3 id="edit-zone-and-location-delete-flex-second" alignSelf="center" flexBasis={null}><span
        id="edit-zone-and-location-delete-message"
        className={canBeDeleted ? "zone-and-location-visibility-hidden" : "edit-zone-and-location-delete-text"}
      >{constraintText}</span></FlexItem3>
    </Flex7>
  </>;
}, "DeleteNodeSection");

// ../vlncc-frontend/src/components/SiteTree/DeleteZoneAndLocationDialog/index.tsx
import "./delete-zone-and-location.scss";
import { Size as Size15, Button as Button7, ButtonType as ButtonType7, BodyText as BodyText3 } from "@vaisala-rockhopper/components";
import { useTranslation as useTranslation14 } from "react-i18next";
var DeleteZoneAndLocationDialog = /* @__PURE__ */ __name(({
  node_id,
  name,
  type,
  parent_id,
  deleteTreeNode
}) => {
  const { t } = useTranslation14();
  const dispatch = useAppDispatch();
  const onDismiss = /* @__PURE__ */ __name(() => dispatch(hideDialog()), "onDismiss");
  const deleteNodes = /* @__PURE__ */ __name(() => {
    deleteTreeNode({ node_id, type, parent_id, name });
    onDismiss();
  }, "deleteNodes");
  let modalHeader = null;
  if (type === ZONE_KEY) {
    modalHeader = t("site.deleteZone");
  } else if (type === LOCATION_KEY) {
    modalHeader = t("site.deleteLocation");
  }
  const modalButtons = <>
    <Button7
      id="delete-zones-and-locations-confirm"
      htmlId="delete-zones-and-locations-confirm"
      onClick={deleteNodes}
      buttonType={ButtonType7.Secondary}
    >{t("general.delete")}</Button7>
    <Button7 id="delete-zones-and-locations-cancel" htmlId="delete-zones-and-locations-cancel" onClick={onDismiss}>{t("general.cancel")}</Button7>
  </>;
  return <ModalContainer
    id="delete-zones-and-locations-dialog"
    isOpen
    htmlId="delete-zones-and-locations-dialog"
    onDismiss={onDismiss}
    width={Size15.M}
    showCloseIcon={true}
    dismissOnOverlayClick={false}
    title={modalHeader}
    role="alert-dialog"
    buttons={modalButtons}
  ><BodyText3 id="delete-zones-and-locations-body" className="delete-zones-and-locations-body">{type === ZONE_KEY ? t("site.deleteZonesAlert", { nodeName: name }) : t("site.deleteLocationsAlert", { nodeName: name })}</BodyText3></ModalContainer>;
}, "DeleteZoneAndLocationDialog");
var DeleteZoneAndLocationDialog_default = DeleteZoneAndLocationDialog;

// ../vlncc-frontend/src/utils/site.ts
import { VaiColor as VaiColor4, VaiIcon as VaiIcon4 } from "@vaisala-rockhopper/design-tokens";
var showMeasurementSymbol = /* @__PURE__ */ __name((symbol_id) => {
  const symbols = {
    celsius: "\xB0C",
    fahrenheit: "\xB0F",
    rh: "%RH",
    ppm: "PPM",
    percent: "%CO\u2082"
  };
  return symbols[symbol_id] || "";
}, "showMeasurementSymbol");
var getIcon = /* @__PURE__ */ __name((value) => {
  const icons = {
    OK: { name: VaiIcon4.AlertOk, color: VaiColor4.AlertOk },
    WARN: { name: VaiIcon4.AlertWarning, color: VaiColor4.AlertWarning },
    UNLINK: { name: VaiIcon4.Unlink, color: VaiColor4.BlueDark },
    ALARM: { name: VaiIcon4.AlertAlarm, color: VaiColor4.AlertAlarm },
    co2: { name: VaiIcon4.Dust, color: VaiColor4.BlueDark },
    temperature: { name: VaiIcon4.Thermometer, color: VaiColor4.BlueDark },
    humidity: { name: VaiIcon4.Humidity, color: VaiColor4.BlueDark },
    treeControl: { name: VaiIcon4.TreeControl, color: VaiColor4.BlueDark }
  };
  return icons[value];
}, "getIcon");
var sortTree = /* @__PURE__ */ __name((nodes, sortBy2) => {
  if (Array.isArray(nodes) && nodes.length > 1) {
    if (sortBy2 === "alphabetically") {
      nodes.sort((a, b) => {
        return a.text.localeCompare(b.text);
      });
    }
    if (sortBy2 === "reverseAlphabetically") {
      nodes.sort((a, b) => b.text.localeCompare(a.text));
    }
    return nodes;
  }
  return nodes;
}, "sortTree");

// ../vlncc-frontend/src/components/SiteTree/Site/SiteFormDialog.tsx
import { useState as useState8 } from "react";
import validator4 from "validator";
import { useTranslation as useTranslation15 } from "react-i18next";
import "../zone-and-location-dialog.scss";
var SiteFormDialog = /* @__PURE__ */ __name(({
  childNames,
  siblingNames,
  onSave,
  selectedItemObject,
  formAction
}) => {
  const { t } = useTranslation15();
  const dispatch = useAppDispatch();
  const [name, setName] = useState8(selectedItemObject?.text || "");
  const [nameError, setNameError] = useState8("");
  const [description, setDescription] = useState8(selectedItemObject?.description || "");
  const [descriptionError, setDescriptionError] = useState8("");
  const onDismiss = /* @__PURE__ */ __name(() => dispatch(hideDialog()), "onDismiss");
  const onNameChange = /* @__PURE__ */ __name((event) => {
    setNameError("");
    setName(event.target.value);
    if (!validateCharacterMaxLength(event.target.value, SITE_NAME_MAX_LENGTH)) {
      setNameError(t("site.characterMaxLengthError", { charLen: SITE_NAME_MAX_LENGTH }));
    }
  }, "onNameChange");
  const onDescriptionChange = /* @__PURE__ */ __name((event) => {
    setDescriptionError("");
    setDescription(event.target.value);
    if (!validateCharacterMaxLength(event.target.value, SITE_DESCRIPTION_MAX_LENGTH)) {
      setDescriptionError(t("site.characterMaxLengthError", { charLen: SITE_DESCRIPTION_MAX_LENGTH }));
    }
  }, "onDescriptionChange");
  const handleSave = /* @__PURE__ */ __name(() => {
    let errorExist = false;
    const trimmedName = validator4.trim(name);
    const trimmedDescription = validator4.trim(description);
    errorExist = !(validateCannotBeEmpty(trimmedName) && validateCharacterMaxLength(trimmedName, SITE_NAME_MAX_LENGTH) && validateCharacterMaxLength(trimmedDescription, SITE_DESCRIPTION_MAX_LENGTH, true));
    if (childNames && childNames.indexOf(trimmedName.toLowerCase()) !== -1) {
      setNameError(t("site.nameConnotmatchChild", { trimmedName }));
      errorExist = true;
    }
    if (!validateCannotBeEmpty(trimmedName)) {
      setNameError(t("site.nameCannotBeEmpty"));
    }
    if (!errorExist) {
      const newTreeNode = {
        name: trimmedName,
        description: trimmedDescription
      };
      onSave(newTreeNode);
      onDismiss();
    }
  }, "handleSave");
  const isNameInvalid = !name || nameError.length > 0;
  const isDescriptionInvalid = descriptionError.length > 0;
  const hasformChanged = selectedItemObject?.text !== name || selectedItemObject?.description !== description;
  return <SiteTreeFormDialog
    iconName=""
    action={formAction}
    onDismiss={onDismiss}
    onSave={handleSave}
    title="site.editSite"
    saveButtonDisabled={!hasformChanged || isNameInvalid || isDescriptionInvalid}
  >
    <Name
      action={formAction}
      label={t("general.name")}
      value={name}
      onChange={onNameChange}
      errorMessage={nameError}
    />
    <Description
      action={formAction}
      value={description}
      onChange={onDescriptionChange}
      errorMessage={descriptionError}
      label={t("general.description")}
    />
  </SiteTreeFormDialog>;
}, "SiteFormDialog");

// ../vlncc-frontend/src/components/SiteTree/SiteTree.tsx
import "./Tree/siteTree.scss";
import "./Tree/Resizable.scss";
import "@vaisala/rockhub-tree-menu/dist/style.css";
var getNodeObjectById = /* @__PURE__ */ __name((NodeId, tree) => {
  const filteredTree = tree.filter((site) => {
    return site.id === NodeId;
  });
  return filteredTree[0];
}, "getNodeObjectById");
var getChildList = /* @__PURE__ */ __name((parentId, tree) => {
  const list = [];
  tree.map((node) => {
    if (node.parent === parentId) {
      list.push(node.text.toLowerCase());
    }
  });
  return list;
}, "getChildList");
var SiteTree = /* @__PURE__ */ __name(({ site, canManageSites, siteLoading, userInfoLoading }) => {
  const { t } = useTranslation16();
  const ref = useRef2(null);
  const dispatch = useAppDispatch();
  const [searchCriteria, setSearchCriteria] = useState9("");
  const [selectedType, setSelectedType] = useState9(null);
  const [isTreeOpen, setIsTreeOpen] = useState9(false);
  const [treeData, setTreeData] = useState9([]);
  const [initialTreeData, setInitialTreeData] = useState9([]);
  const [editingTree, setEditingTree] = useState9(false);
  const treeDataRef = useRef2([]);
  const [sortBy2, setSortBy] = useState9("byDefault");
  const { createTreeNode, editTreeNode, deleteTreeNode, moveTreeNode } = useSiteTreeActions_default();
  const selectedNodeId = useAppSelector(selectSelectedNode);
  const openAll = /* @__PURE__ */ __name(() => {
    if (!isTreeOpen) {
      ref.current?.openAll();
      setIsTreeOpen(true);
    } else {
      ref.current?.closeAll();
      setIsTreeOpen(false);
    }
  }, "openAll");
  const updateSingleTree = /* @__PURE__ */ __name((index, tree, dragSource, dropTarget) => {
    const newTree = [...tree];
    const childList = getChildList(dropTarget.id, newTree).concat(getChildList(dragSource.id, newTree));
    const parentName = dropTarget.text;
    childList.push(parentName.toLowerCase());
    let sourceName = dragSource.text;
    const firstChildOccuranceIndex = childList.indexOf(sourceName.toLowerCase());
    if (firstChildOccuranceIndex > -1) {
      childList.splice(firstChildOccuranceIndex, 1);
    }
    let counter = 1;
    while (childList.filter((node) => node === sourceName.toLowerCase()).length) {
      if (counter === 1) {
        sourceName = sourceName + "(" + counter + ")";
      } else {
        sourceName = sourceName.substring(0, sourceName.lastIndexOf("(") + 1) + counter + ")";
      }
      counter++;
    }
    newTree.map((node, i) => {
      if (node.id === dragSource.id) {
        const newNode = { ...node };
        newNode.text = sourceName;
        newTree[i] = newNode;
      }
    });
    const newData = [...treeData];
    newData[index] = newTree;
    setTreeData(newData);
    const dragSourceNode = tree.find((node) => node.id === dragSource.id);
    const dropTargetChildren = tree.filter((node) => node.parent === dropTarget.id);
    const nodeAboveDropIndex = dropTargetChildren.findIndex((node) => node.id === dragSource.id) - 1;
    const position = nodeAboveDropIndex >= 0 ? dropTargetChildren[nodeAboveDropIndex].position + 1 : 1;
    if (dragSourceNode.position === position && dragSource.parent === dropTarget.id) {
      return;
    }
    moveTreeNode({
      id: dragSource.id.toString(),
      parent_id: dropTarget.id.toString(),
      name: sourceName,
      position,
      type: dragSourceNode.type
    });
  }, "updateSingleTree");
  useEffect7(() => {
    if (selectedNodeId && treeData[0]) {
      const selectedItemObject = getNodeObjectById(selectedNodeId, treeData[0]);
      if (selectedItemObject) {
        const openParents = getNodeParentsIds(selectedItemObject);
        ref.current?.open(openParents);
        setSelectedType(selectedItemObject.type);
      }
    }
  }, [site, selectedNodeId, treeData, ref.current]);
  useEffect7(() => {
    if (site && !userInfoLoading) {
      const flattenTreeData = siteTreeConvertor(site, [], PARENT_SITE_KEY, selectedNodeId);
      treeDataRef.current = flattenTreeData;
      setTreeData(flattenTreeData);
      setInitialTreeData(flattenTreeData);
    }
  }, [site, canManageSites, userInfoLoading]);
  useEffect7(() => {
    if (sortBy2 !== "byDefault" && !editingTree) {
      handleSortChange(sortBy2);
    }
  }, [initialTreeData]);
  const handleSortChange = /* @__PURE__ */ __name((selectedValue) => {
    setSortBy(selectedValue);
    if (selectedValue === "byDefault") {
      return setTreeData(siteTreeConvertor(site, [], PARENT_SITE_KEY, selectedNodeId));
    }
    return setTreeData([sortTree(treeData[0], selectedValue)]);
  }, "handleSortChange");
  const handleZonesAndLocations = /* @__PURE__ */ __name((handleAction) => {
    const selectedItemObject = getNodeObjectById(selectedNodeId, treeData[0]);
    const childNames = getChildList(selectedNodeId, treeData[0]).filter(
      (item) => item !== selectedItemObject.text.toLocaleLowerCase()
    );
    const position = selectedItemObject.children.length > 0 ? selectedItemObject.children[selectedItemObject.children.length - 1].position + 1 : 1;
    const iconName = selectedItemObject.type === SITE_KEY ? VaiIcon5.MapMarkerHexagon : VaiIcon5.FolderOpen;
    switch (handleAction) {
      case "newZone": {
        dispatch(
          showDialog(
            <ZoneFormDialog
              formAction={"create" /* CREATE */}
              onSave={(zoneNode) => createTreeNode({
                ...zoneNode,
                position,
                parent_id: selectedItemObject.id,
                type: ZONE_KEY
              })}
              icon={iconName}
              parentName={selectedItemObject.text}
              siblingNames={childNames}
            />
          )
        );
        break;
      }
      case "newLocation":
        dispatch(
          showDialog(
            <LocationFormDialog
              formAction={"create" /* CREATE */}
              parentName={selectedItemObject.text}
              icon={iconName}
              onSave={(locationNode) => createTreeNode({
                ...locationNode,
                position,
                parent_id: selectedItemObject.id,
                type: LOCATION_KEY
              })}
              siblingNames={childNames}
            />
          )
        );
        break;
      case "arrangeSiteTree":
        setEditingTree(!editingTree);
        handleSortChange("byDefault");
        break;
      case "editSelectedItem":
        showEditNode(selectedNodeId);
        break;
    }
  }, "handleZonesAndLocations");
  const getNodeParentsIds = /* @__PURE__ */ __name((node, ids = []) => {
    if (node) {
      const id = node.id;
      ids = [...ids, id];
      const parentNode = find(treeDataRef.current[0], (treeNode) => {
        return treeNode.id === node.parent;
      });
      if (parentNode && parentNode.parent !== null) {
        return getNodeParentsIds(parentNode, ids);
      }
      return ids;
    }
  }, "getNodeParentsIds");
  const getNodeParents = /* @__PURE__ */ __name((child, arr) => {
    const result = [];
    while (child.parent !== null) {
      for (const entity of initialTreeData[0]) {
        if (child.parent === entity.id) {
          if (!arr.some((e) => e.id === entity.id)) {
            result.push(entity);
          }
          child = entity;
        }
      }
    }
    return result;
  }, "getNodeParents");
  const getParents = /* @__PURE__ */ __name((arr) => {
    let entityArray = [...arr];
    for (const child of arr) {
      entityArray = entityArray.concat(getNodeParents(child, entityArray));
    }
    return entityArray;
  }, "getParents");
  const filter = /* @__PURE__ */ __name((e) => {
    const keyword = e.target.value;
    if (keyword !== "") {
      const results = initialTreeData[0].filter((site2) => {
        return site2.text.toLowerCase().includes(keyword.toLowerCase());
      });
      const treeArray = getParents(results);
      if (treeArray.length == 0) {
        setTreeData([
          initialTreeData[0].filter((site2) => {
            return site2.parent === null;
          })
        ]);
      } else {
        setTreeData([treeArray]);
      }
      if (!isTreeOpen) {
        openAll();
      }
    } else {
      setTreeData(initialTreeData);
      openAll();
    }
    setSearchCriteria(keyword);
  }, "filter");
  const showEditNode = /* @__PURE__ */ __name((SelectedNodeId) => {
    if (canManageSites) {
      if (SelectedNodeId === void 0) {
        SelectedNodeId = treeDataRef.current[0][0].id;
      }
      const selectedItemObject = getNodeObjectById(SelectedNodeId, treeDataRef.current[0]);
      const siblingNames = getChildList(selectedItemObject.parent, treeDataRef.current[0]).filter(
        (item) => item !== selectedItemObject.text.toLocaleLowerCase()
      );
      const childNames = getChildList(SelectedNodeId, treeDataRef.current[0]);
      const selectedItemParentObject = getNodeObjectById(selectedItemObject.parent, treeDataRef.current[0]);
      let removable = false;
      if (selectedItemObject.type === ZONE_KEY) {
        removable = !treeDataRef.current[0].some((node) => node.parent === SelectedNodeId);
      } else if (selectedItemObject.type === LOCATION_KEY) {
        removable = true;
        const dataRetentionMonths = getConstantFromLocalStorage(LS_DATA_RETENTION_MONTHS);
        if (selectedItemObject.timestamp && dataRetentionMonths) {
          const currentDate = Date.now();
          const timeStamp = new Date(selectedItemObject.timestamp);
          const expiryDate = timeStamp.setMonth(timeStamp.getMonth() + Number(dataRetentionMonths));
          removable = expiryDate < currentDate;
        }
      }
      const iconName = selectedItemObject.parentType === SITE_KEY ? VaiIcon5.MapMarkerHexagon : VaiIcon5.FolderOpen;
      const showDeleteConfirmDialog = /* @__PURE__ */ __name(() => {
        const { id, type, parent, text } = selectedItemObject;
        dispatch(
          showDialog(
            <DeleteZoneAndLocationDialog_default
              node_id={id}
              parent_id={parent}
              name={text}
              deleteTreeNode={deleteTreeNode}
              type={type}
            />
          )
        );
      }, "showDeleteConfirmDialog");
      dispatch(
        showDialog(
          selectedItemObject.type === LOCATION_KEY ? <LocationFormDialog
            icon={iconName}
            formAction={"edit" /* EDIT */}
            onSave={(node) => editTreeNode({
              editedNode: node,
              name: node.name,
              node_id: selectedItemObject.id,
              node_type: LOCATION_KEY
            })}
            selectedItemObject={selectedItemObject}
            parentName={selectedItemParentObject ? selectedItemParentObject.text : ""}
            siblingNames={siblingNames}
            Footer={<DeleteNodeSection
              onDelete={showDeleteConfirmDialog}
              constraintText={t("site.deleteLocationMsg")}
              label={t("site.deleteLocation")}
              canBeDeleted={removable}
            />}
          /> : selectedItemObject.type === ZONE_KEY ? <ZoneFormDialog
            icon={iconName}
            formAction={"edit" /* EDIT */}
            parentName={selectedItemParentObject ? selectedItemParentObject.text : ""}
            selectedItemObject={selectedItemObject}
            onSave={(zoneNode) => editTreeNode({
              editedNode: zoneNode,
              name: zoneNode.name,
              node_id: selectedItemObject.id,
              node_type: ZONE_KEY
            })}
            childNames={childNames}
            siblingNames={siblingNames}
            Footer={<DeleteNodeSection
              onDelete={showDeleteConfirmDialog}
              constraintText={t("site.deleteZoneMsg")}
              label={t("site.deleteZone")}
              canBeDeleted={removable}
            />}
          /> : <SiteFormDialog
            formAction={"edit" /* EDIT */}
            selectedItemObject={selectedItemObject}
            childNames={childNames}
            onSave={(zoneNode) => editTreeNode({
              editedNode: zoneNode,
              name: zoneNode.name,
              node_id: selectedItemObject.id,
              node_type: SITE_KEY
            })}
          />
        )
      );
    }
  }, "showEditNode");
  let siteContent = <CenteredSpinner_default htmlId="group-list-spinner" />;
  if (!canManageSites && !userInfoLoading && !site)
    siteContent = <EmptyState heading="site.noSiteRights" illustration={"nothingSelected" /* nothingSelected */} />;
  if (!siteLoading && site && Object.keys(site).length !== 0 && treeData[0] && treeData[0].length > 0) {
    siteContent = <TreeMenu
      ref={ref}
      trees={treeData}
      editing={editingTree}
      maxHeight={editingTree ? 650 : 800}
      defaultTreeIndex={0}
      emptyTreeRender={() => <EmptyTree message={searchCriteria.length > 0 ? t("site.emptySearchResult") : t("site.emptyEditTree")} />}
      forceChevron
      onAction={(props) => {
        if (props.action === "CLICK::NODE" && props.data.treeFamilyWithSelection) {
          let result = props.data.treeFamilyWithSelection[0].map(
            (site2) => site2.actions.includes("edit") ? { ...site2, actions: site2.actions.filter((item) => item !== "edit") } : site2
          );
          result = result.map(
            (site2) => site2.id === props.id ? { ...site2, actions: [...site2.actions, "edit"], states: ["selected"] } : site2
          );
          setTreeData([result]);
          dispatch(setSelectedNodeId(props.id));
        } else if (props.action === "CLICK::EDIT") {
          showEditNode(props.id);
        }
      }}
      onDrop={(tree, { treeIndex, dragSource, dropTarget }) => updateSingleTree(treeIndex, tree, dragSource, dropTarget)}
    />;
  }
  return <Flex8 className={editingTree ? "site-tree-editing-border" : ""} id="site-flex-container" style={{ height: "100%" }}><ResizableBox
    width={500}
    minConstraints={[350, 600]}
    maxConstraints={[800, 800]}
    handle={(h, ref2) => <div className="custom-handle" ref={ref2}><span /></div>}
    resizeHandles={["e"]}
  ><>
    <div id="site-tree-container" className={canManageSites ? "" : "no-permission"}>
      <InputField3
        htmlId="site-search-input"
        name="search"
        width={Size16.Container}
        placeholder="Search"
        value={searchCriteria}
        onChange={filter}
        endIcon={<Icon7 name={IconName7.Search} size={Size16.M} />}
      />
      <br />
      <Flex8 id="site-buttons-flex-container">
        <Flex8.Item id="site-buttons-flex-first" alignSelf="flex-start" flexBasis="33%"><Button8 buttonType={ButtonType8.Secondary} onClick={openAll} id="site-show-all">{isTreeOpen ? t("site.hideAll") : t("site.showAll")}</Button8></Flex8.Item>
        <Flex8.Item id="site-buttons-flex-second" alignSelf="flex-start" flexBasis="33%"><MenuButton id="site-sort-sites" style={{ marginLeft: VaiSpacing.M }} disabled={editingTree}>
          <MenuButtonToggle id="site-sort-sites-menu-toggle" buttonType={ButtonType8.Secondary}>{t("site.sort")}</MenuButtonToggle>
          <MenuButtonList id="site-sort-sites-menu-list">
            <MenuButtonListItem
              id="site-sort-sites-default"
              onSelect={() => handleSortChange("byDefault")}
              disabled={editingTree}
            >{t("site.sortByDefault")}</MenuButtonListItem>
            <MenuButtonListItem
              id="site-sort-sites-alphabet"
              onSelect={() => handleSortChange("alphabetically")}
              disabled={editingTree}
            >{t("site.sortAlphabetically")}</MenuButtonListItem>
            <MenuButtonListItem
              id="site-sort-sites-reverse-alphabet"
              onSelect={() => handleSortChange("reverseAlphabetically")}
              disabled={editingTree}
            >{t("site.sortReverseAlphabetically")}</MenuButtonListItem>
          </MenuButtonList>
        </MenuButton></Flex8.Item>
        {canManageSites && <Flex8.Item id="site-buttons-flex-third" alignSelf="flex-start" flexBasis="33%"><MenuButton id="site-edit-sites" style={{ marginLeft: VaiSpacing.M }} disabled={editingTree}>
          <MenuButtonToggle id="site-edit-sites-toggle">{t("site.edit")}</MenuButtonToggle>
          <MenuButtonList>
            <MenuButtonListItem
              id="site-edit-new-zone"
              disabled={selectedType === LOCATION_KEY || editingTree}
              onSelect={() => handleZonesAndLocations("newZone")}
            >
              <Icon7
                id="site-edit-new-zone-icon"
                className="site-tree-accordion-icon"
                name={VaiIcon5.FolderOpen}
              />
              {t("site.newZone")}
            </MenuButtonListItem>
            <MenuButtonListItem
              id="site-edit-new-location"
              disabled={selectedType === LOCATION_KEY || editingTree}
              onSelect={() => handleZonesAndLocations("newLocation")}
            >
              <Icon7
                id="site-edit-new-location-icon"
                className="site-tree-accordion-icon"
                name={VaiIcon5.MapMarker}
              />
              {t("site.newLocation")}
            </MenuButtonListItem>
            <MenuButtonListItem
              id="site-edit-arrange-site"
              onSelect={() => handleZonesAndLocations("arrangeSiteTree")}
            >
              <Icon7
                id="site-edit-arrange-site-icon"
                className="site-tree-accordion-icon"
                name={VaiIcon5.TreeControl}
              />
              {t("site.arrangeSiteTree")}
            </MenuButtonListItem>
            <MenuButtonListItem
              id="site-edit-selected"
              onSelect={() => handleZonesAndLocations("editSelectedItem")}
              disabled={editingTree}
            >
              <Icon7 className="site-edit-selected-icon" name={VaiIcon5.Edit} />
              {t("site.editSelectedItem")}
            </MenuButtonListItem>
          </MenuButtonList>
        </MenuButton></Flex8.Item>}
      </Flex8>
      <div id="site-tree-rearrange-message" className={editingTree ? "" : "site-tree-display-none"}>{t("site.rearrangeSiteMessage")}</div>
      <br />
      {siteContent}
      <section className="site-tree-exit-button-container"><Button8
        id="site-tree-exit-button"
        className={editingTree ? "" : "site-tree-display-none"}
        onClick={() => setEditingTree(!editingTree)}
      >{t("general.exit")}</Button8></section>
    </div>
    <Separator4 className={editingTree ? "site-tree-exit-button-separator" : "site-tree-display-none"} />
  </></ResizableBox></Flex8>;
}, "SiteTree");
var SiteTree_default = SiteTree;

// ../vlncc-frontend/src/containers/Site.tsx
import { Flex as Flex17, PageContainer, Paper as Paper2 } from "@vaisala-rockhopper/components";

// ../vlncc-frontend/src/components/Utils/TabNavigation/index.tsx
import { Flex as Flex9, NavTabs, Paper } from "@vaisala-rockhopper/components";
import { useEffect as useEffect8, useState as useState10 } from "react";
import { useTranslation as useTranslation17 } from "react-i18next";
import { NavLink, Outlet, useLocation as useLocation4, useParams } from "react-router-dom";
import "./tabNavigation.scss";
var TabNavigation = /* @__PURE__ */ __name(({ tabs, addRoutes, contentClassName, noPaper }) => {
  const { id, ...rest } = useParams();
  const location = useLocation4();
  const { t } = useTranslation17();
  const [currentTabs, setTabs] = useState10(tabs);
  const [selectedTab, setSelectedTab] = useState10(null);
  useEffect8(() => {
    setTabs(tabs);
  }, [tabs]);
  useEffect8(() => {
    setSelectedTab(rest["*"]);
  }, [location]);
  useEffect8(() => {
    const tabsCopy = tabs.map((tab) => {
      const newTab = { ...tab };
      if (addRoutes) {
        const currentPath = location.pathname.split("/").filter((path) => path !== "");
        const addRoute = addRoutes.filter((route) => currentPath.includes(route));
        if (addRoute.length > 0) {
          newTab.tabKey = `${tab.tabKey}/${addRoute[0]}`;
        }
      }
      if (id) {
        newTab.tabKey = `${newTab.tabKey}/${id}`;
      }
      return newTab;
    });
    setTabs(tabsCopy);
  }, [id]);
  return <><Flex9 flexDirection="column" alignContent="flex-start" style={{ width: "100%", height: "100%" }}>
    <NavTabs htmlId="tab-navigation" selectedTabKey={selectedTab} setSelectedTabKey={setSelectedTab}>{currentTabs.map((tab) => {
      const { tabKey, translationKey, title, id: id2 } = tab;
      return <NavTabs.Tab
        htmlId={id2}
        key={tabKey}
        tabKey={tabKey}
        title={<NavLink to={tabKey} onClick={() => setSelectedTab(tabKey)}>{translationKey ? t(translationKey) : title}</NavLink>}
      />;
    })}</NavTabs>
    {noPaper ? <Outlet /> : <Paper
      data-testid="paper"
      style={{ height: "100%", borderTop: "1px solid #DADADA" }}
      className={contentClassName}
    ><Outlet /></Paper>}
  </Flex9></>;
}, "TabNavigation");

// ../vlncc-frontend/src/components/Site/Status/Status.tsx
import { BodyText as BodyText6, Flex as Flex12, FlexItem as FlexItem6, Separator as Separator5 } from "@vaisala-rockhopper/components";
import { useMemo } from "react";
import { useTranslation as useTranslation20 } from "react-i18next";
import { Link as Link3, useParams as useParams2 } from "react-router-dom";

// ../vlncc-frontend/src/hooks/useLocationStatus.tsx
import { useState as useState11, useEffect as useEffect9 } from "react";
var useLocationStatus = /* @__PURE__ */ __name((data) => {
  const [locationStatus2, setLocationStatus] = useState11(LOCATION_STATUS.NO_DATA_SOURCE);
  const [deviceStatus, setDeviceStatus] = useState11(DEVICE_STATUS.UNLINKED);
  const [thresholdStatus, setThresholdStatus] = useState11(THRESHOLD_STATUS.NOT_SET);
  const [locationLastMeasurement, setLocationLastMeasurement] = useState11(null);
  useEffect9(() => {
    if (!data)
      return;
    if (data.active) {
      setLocationStatus(LOCATION_STATUS.OK);
    } else {
      setLocationStatus(LOCATION_STATUS.DEACTIVATED);
    }
    if (data.device) {
      setDeviceStatus(DEVICE_STATUS.OK);
    } else {
      setDeviceStatus(DEVICE_STATUS.UNLINKED);
    }
  }, [data]);
  return { locationStatus: locationStatus2, deviceStatus, thresholdStatus, locationLastMeasurement };
}, "useLocationStatus");

// ../vlncc-frontend/src/components/Site/Status/Status.tsx
import "./status.scss";

// ../vlncc-frontend/src/components/Site/Status/StatusItem.tsx
import { BodyText as BodyText4, Flex as Flex10, FlexItem as FlexItem4, Icon as Icon8, Size as Size17 } from "@vaisala-rockhopper/components";
import { VaiIcon as VaiIcon6 } from "@vaisala-rockhopper/design-tokens";
import { useTranslation as useTranslation18 } from "react-i18next";
var isStatusError = /* @__PURE__ */ __name((type, status) => {
  if (type === STATUS_TYPES.DEVICE) {
    if (status !== DEVICE_STATUS.OK) {
      return true;
    }
  }
  if (type === STATUS_TYPES.THRESHOLD) {
    if (status !== THRESHOLD_STATUS.UNKNOWN && status !== THRESHOLD_STATUS.WITHIN) {
      return true;
    }
  }
  if (type === STATUS_TYPES.MEASUREMENT) {
    if (typeof status !== "number") {
      return true;
    }
  }
  return false;
}, "isStatusError");
var StatusItem = /* @__PURE__ */ __name(({ status, label, type, translationKey }) => {
  const statusItemErrorCl = "status-item status-item--error";
  const { t } = useTranslation18();
  const getStatusValue = /* @__PURE__ */ __name((status2) => {
    if (typeof status2 === "string") {
      return t(status2);
    } else if (typeof status2 === "number") {
      return timestampToTimeString(status2);
    }
  }, "getStatusValue");
  return <FlexItem4 flexGrow={3} className={isStatusError(type, status) ? statusItemErrorCl : "status-item"}><Flex10 flexDirection="row" flexWrap="nowrap" alignContent="center">
    <FlexItem4 alignSelf="center">
      {type === STATUS_TYPES.THRESHOLD && <Icon8 className="status-item__icon" size={Size17.M} name={VaiIcon6.Thermometer} />}
      {type === STATUS_TYPES.DEVICE && <Icon8 size={Size17.M} className="status-item__icon" name={VaiIcon6.DataLogger} />}
    </FlexItem4>
    <FlexItem4 flexGrow={1}>
      <BodyText4 className="status-item__label">{translationKey ? t(translationKey) : label}</BodyText4>
      <BodyText4 className="status-item__value">
        {type === STATUS_TYPES.DEVICE && !isStatusError(type, status) && <Icon8 className="status-item__icon status-item__icon--ok" name={VaiIcon6.AlertOk} size={Size17.M} />}
        {getStatusValue(status)}
      </BodyText4>
    </FlexItem4>
  </Flex10></FlexItem4>;
}, "StatusItem");

// ../vlncc-frontend/src/components/Site/Location/LocationHeader.tsx
import { BodyText as BodyText5, Flex as Flex11, FlexItem as FlexItem5, Heading as Heading4, Toggle } from "@vaisala-rockhopper/components";
import { useTranslation as useTranslation19 } from "react-i18next";

// ../vlncc-frontend/src/components/Site/Location/LocationIcon.tsx
import { Icon as Icon9 } from "@vaisala-rockhopper/components";
import { VaiIcon as VaiIcon7 } from "@vaisala-rockhopper/design-tokens";
import "./locationIcon.scss";
var LocationIcon = /* @__PURE__ */ __name(({ status }) => {
  return <div className="location-icon" data-testid={TEST_IDS.location_icon}>
    {status === DEVICE_STATUS.UNLINKED ? <Icon9
      className="location-icon__link"
      data-testid={TEST_IDS.location_icon_unlink}
      style={{ fontSize: "24px" }}
      name={VaiIcon7.Unlink}
    /> : <Icon9
      className="location-icon__link"
      data-testid={TEST_IDS.location_icon_link}
      style={{ fontSize: "24px" }}
      name={VaiIcon7.Link}
    />}
    <Icon9 className="location-icon__map" style={{ fontSize: "50px" }} name={VaiIcon7.MapMarker} />
  </div>;
}, "LocationIcon");
var LocationIcon_default = LocationIcon;

// ../vlncc-frontend/src/components/Site/Location/LocationHeader.tsx
import "./locationHeader.scss";
var LocationHeader = /* @__PURE__ */ __name(({
  location,
  toggle = false,
  toggleActiveDisplay,
  deviceStatus,
  measurementType
}) => {
  const { t } = useTranslation19();
  return <Flex11 flexDirection="row" flexWrap="nowrap" className="location-header">
    <FlexItem5 className="location-header__icon-flex-item"><LocationIcon_default status={deviceStatus} /></FlexItem5>
    <FlexItem5 flexGrow={1} flexShrink={0} className="location-header__title-flex-item">
      <Heading4 level={1} className="location-header__title">{location.name}</Heading4>
      <BodyText5 className="location-header__description">{location.description ? location.description : t(`general.${measurementType}`)}</BodyText5>
    </FlexItem5>
    {toggle && <FlexItem5 alignSelf="flex-start" flexBasis="80px"><Toggle
      htmlId="user-show-active-groups-toggle"
      text={t("site.active")}
      uncheckedText={t("site.inactive")}
      checked={true}
      onChange={toggleActiveDisplay}
      disabled
      className="location-header__toggle"
    /></FlexItem5>}
  </Flex11>;
}, "LocationHeader");
var LocationHeader_default = LocationHeader;

// ../vlncc-frontend/src/components/Site/Status/Status.tsx
var Status = /* @__PURE__ */ __name(() => {
  const { id } = useParams2();
  const { t } = useTranslation20();
  const currentlyRemovingNodeId = useAppSelector(selectCurrentlyRemoving);
  const customerId = getConstantFromLocalStorage(LS_COMPANY_CUSTOMER_ID);
  const currentUser = useAppSelector(selectCurrentUser);
  const { data: location } = useGetLocationQuery({ customerId, id }, { skip: id === currentlyRemovingNodeId });
  const { locationStatus: locationStatus2, deviceStatus, thresholdStatus, locationLastMeasurement } = useLocationStatus(location);
  const statusValueClass = useMemo(() => {
    if (locationStatus2 === LOCATION_STATUS.DEACTIVATED) {
      return "status-value--inactive";
    }
    if (deviceStatus === DEVICE_STATUS.MISSED_CONNECTION || thresholdStatus === THRESHOLD_STATUS.UNKNOWN) {
      return "status-value--stale";
    }
    if (locationStatus2 === LOCATION_STATUS.NO_DATA_SOURCE || deviceStatus === DEVICE_STATUS.UNLINKED) {
      return "status-value--unlinked";
    }
    return "status-value--active";
  }, [locationStatus2, deviceStatus, thresholdStatus]);
  if (!location) {
    return <><CenteredSpinner_default /></>;
  }
  return <>
    <LocationHeader_default deviceStatus={deviceStatus} measurementType={location.meas_id} location={location} />
    <Flex12 data-testid={TEST_IDS.location_status_value} className={`status-value ${statusValueClass}`}>
      <FlexItem6 flexGrow={3}><Flex12 flexDirection="row" flexWrap="nowrap">
        <BodyText6 className="status-value__title">--</BodyText6>
        <BodyText6 className="status-value__title status-value__title--measurement">{showMeasurementSymbol(location.symbol_id)}</BodyText6>
      </Flex12></FlexItem6>
      {currentUser?.canManageSites && <Link3 className="status-value__settings" to={`../../settings/${location.node_id}`}>{t("site.statusDetailSettings")}</Link3>}
    </Flex12>
    <Separator5 />
    <Flex12
      flexDirection="row"
      flex-wrap="nowrap"
      alignItems="stretch"
      alignContent="stretch"
      justifyContent="space-between"
      className="status-collection"
      style={{ padding: "0.75rem 0 0.5rem" }}
    >
      <StatusItem
        type="measurement"
        status={locationLastMeasurement}
        label="Last measurement"
        translationKey="site.statusLastMeasurement"
      />
      <FlexItem6 flexBasis="1%" className="status-item"><hr className="status-item__vertical-separator" /></FlexItem6>
      <StatusItem
        status={thresholdStatus}
        label="Threshold status"
        type="threshold"
        translationKey="site.statusThreshold"
      />
      <FlexItem6 flexBasis="1%"><hr className="status-item__vertical-separator" /></FlexItem6>
      <StatusItem status={deviceStatus} type="device" label="Device status" translationKey="site.statusDevice" />
    </Flex12>
    <Separator5 />
  </>;
}, "Status");

// ../vlncc-frontend/src/components/Site/SiteTable.tsx
import { useRef as useRef3 } from "react";
import { DataTable } from "@vaisala-rockhopper/components";
import "./siteTable.scss";

// ../vlncc-frontend/src/components/Site/SiteTableFormatters.tsx
import { Icon as Icon10, Size as Size18 } from "@vaisala-rockhopper/components";
import { useTranslation as useTranslation21 } from "react-i18next";
var locationStatus = /* @__PURE__ */ __name((location) => {
  if (location.device == null) {
    return "UNLINK";
  }
  if (location.device_alarm_set === "SET" /* SET */) {
    return location.device_alarms;
  }
  if (location.thres_alarm_set === "SET" /* SET */) {
    return location.thres_alarms;
  }
  return location.status;
}, "locationStatus");
var formatDataForTable = /* @__PURE__ */ __name((data) => {
  const tableData = data.map((item) => {
    return {
      status: locationStatus(item),
      type: item.meas_id,
      // measurement type
      location: item.name,
      key: item.node_id,
      time: item.timestamp && timestampToTimeString(item.timestamp),
      device: item.device ? item.device : "site.settingsLocationNoDataSource",
      thres_alarm_set: item.thres_alarm_set,
      device_alarm_set: item.device_alarm_set,
      action: "treeControl"
    };
  });
  return tableData;
}, "formatDataForTable");
var IconFormatter = /* @__PURE__ */ __name(({ value }) => {
  return <div className="cell cell--icon"><Icon10
    size={Size18.L}
    {...getIcon(value)}
    data-testid="icon"
    className={value === "treeControl" ? "icon--disabled" : ""}
  /></div>;
}, "IconFormatter");
var ValueFormatter = /* @__PURE__ */ __name(({ value }) => {
  return <div>{value ? value : "--"}</div>;
}, "ValueFormatter");
var ThresholdAlarmFormatter = /* @__PURE__ */ __name(({ value }) => {
  const { t } = useTranslation21();
  if (value === "NONE" /* NOT_SET */) {
    return <div className="cell cell--deactive">{t("site.statusThresholdNotSet")}</div>;
  }
  if (value === "PAUSED" /* PAUSED */) {
    return <div>{t("site.settingsAlarmsPaused")}</div>;
  }
  return <div>{t("site.settingsThresholdAlarmsSet")}</div>;
}, "ThresholdAlarmFormatter");
var DeviceAlarmFormatter = /* @__PURE__ */ __name(({ value }) => {
  const { t } = useTranslation21();
  if (value === "default") {
    return <div>{t("site.settingsDeviceAlarmsDefault")}</div>;
  }
  if (value === "NONE" /* NOT_SET */) {
    return <div className="cell cell--deactive">{t("site.settingsDeviceAlarmsNotSet")}</div>;
  }
  if (value === "PAUSED" /* PAUSED */) {
    return <div>{t("site.settingsAlarmsPaused")}</div>;
  }
  return <div>{t("site.settingsDeviceAlarmsSet")}</div>;
}, "DeviceAlarmFormatter");
var DeviceFormatter = /* @__PURE__ */ __name(({ value }) => {
  const { t } = useTranslation21();
  if (typeof value === "string") {
    return <div className="cell cell--deactive">{t(value)}</div>;
  }
  return <div>{buildDeviceId(value.device_model, value.device_sn)}</div>;
}, "DeviceFormatter");

// ../vlncc-frontend/src/hooks/useResizeObserver.tsx
import { useLayoutEffect, useState as useState12 } from "react";
var useResizeObserver = /* @__PURE__ */ __name((ref, defaultHeight) => {
  const [width, setWidth] = useState12();
  const [height, setHeight] = useState12(defaultHeight);
  const handleResize = /* @__PURE__ */ __name((entries) => {
    if (!Array.isArray(entries)) {
      return;
    }
    const entry = entries[0];
    setWidth(entry.contentRect.width);
    setHeight(entry.contentRect.height);
  }, "handleResize");
  useLayoutEffect(() => {
    if (!ref.current) {
      return;
    }
    let observer = new ResizeObserver((entries) => handleResize(entries));
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
      observer = null;
    };
  }, [ref]);
  return [width, height];
}, "useResizeObserver");

// ../vlncc-frontend/src/components/Site/SiteTable.tsx
var SiteTable = /* @__PURE__ */ __name(({ data, type }) => {
  const tableData = formatDataForTable(data);
  const ref = useRef3();
  const [, height] = useResizeObserver(ref, 400);
  const getRows = /* @__PURE__ */ __name((rowIdx) => {
    return tableData[rowIdx];
  }, "getRows");
  const StatusColumns = [
    {
      key: "status",
      name: "Status",
      width: 56,
      formatter: IconFormatter
    },
    {
      key: "type",
      name: "Type",
      width: 56,
      formatter: IconFormatter
    },
    {
      key: "location",
      name: "Location",
      sortable: true
    },
    {
      key: "value",
      name: "Value",
      formatter: ValueFormatter
    },
    {
      key: "time",
      name: "Time",
      formatter: ValueFormatter
    },
    {
      key: "action",
      name: "Action",
      formatter: IconFormatter,
      width: 86
    }
  ];
  const SettingsColumns = [
    {
      key: "type",
      name: "Type",
      width: 56,
      formatter: IconFormatter
    },
    {
      key: "location",
      name: "Location",
      sortable: true
    },
    {
      // data source
      key: "device",
      name: "Data source",
      formatter: DeviceFormatter
    },
    {
      // threshold alarm
      key: "thres_alarm_set",
      name: "Threshold alarm",
      formatter: ThresholdAlarmFormatter
    },
    {
      // device alarm
      key: "device_alarm_set",
      name: "Device alarm",
      formatter: DeviceAlarmFormatter
    },
    {
      key: "action",
      name: "Action",
      formatter: IconFormatter,
      width: 86
    }
  ];
  return <div className="site-table__container" ref={ref}>{tableData && <DataTable
    className="site-table"
    columns={type === "status" ? StatusColumns : SettingsColumns}
    rowGetter={getRows}
    rowsCount={tableData.length}
    minColumnWidth={150}
    sortColumn="location"
    minHeight={height}
  />}</div>;
}, "SiteTable");

// ../vlncc-frontend/src/components/Site/Status/StatusList.tsx
import { useParams as useParams3 } from "react-router-dom";

// ../vlncc-frontend/src/hooks/useGetUsername.tsx
import { useEffect as useEffect10, useState as useState13 } from "react";
var useGetUserName = /* @__PURE__ */ __name(() => {
  const [username, setUserName] = useState13(null);
  useEffect10(() => {
    let mounted = true;
    const getUsername = /* @__PURE__ */ __name(async () => {
      const username2 = await getUserNameForAPI();
      if (mounted) {
        setUserName(username2);
      }
    }, "getUsername");
    getUsername();
    return () => {
      mounted = false;
    };
  }, []);
  return { username };
}, "useGetUserName");
var useGetUsername_default = useGetUserName;

// ../vlncc-frontend/src/components/Site/Status/StatusList.tsx
var StatusList = /* @__PURE__ */ __name(({ siteId }) => {
  const customerId = getConstantFromLocalStorage(LS_COMPANY_CUSTOMER_ID);
  const { username } = useGetUsername_default();
  const { id } = useParams3();
  const { data: nodes, isLoading } = useGetNodeLocationsQuery(
    { customerId, username, nodeId: id ? id : siteId },
    { skip: username === void 0 || username === "undefined" || username === null }
  );
  if (!nodes || isLoading) {
    return <><CenteredSpinner_default /></>;
  }
  if (nodes.length <= 0 && !id) {
    return <EmptyState
      illustration={"positive" /* positive */}
      heading="site.emptyHeader"
      description="site.emptyBody"
      link={{ to: "/", desc: "site.emptyTourLink" }}
    />;
  }
  if (nodes.length <= 0) {
    return <EmptyState illustration={"emptyFolder" /* emptyFolder */} heading="site.emptyZoneHeading" />;
  }
  return <SiteTable key={id} data={nodes} type="status" />;
}, "StatusList");

// ../vlncc-frontend/src/components/Site/AlarmsList.tsx
var AlarmsList = /* @__PURE__ */ __name(() => {
  return <h2>Alarms list</h2>;
}, "AlarmsList");

// ../vlncc-frontend/src/components/Site/Alarm.tsx
import { useParams as useParams4 } from "react-router-dom";
var Alarm = /* @__PURE__ */ __name(() => {
  const { id } = useParams4();
  return <><h2>
    {"Alarm for node: "}
    {id}
  </h2></>;
}, "Alarm");

// ../vlncc-frontend/src/components/Site/Setting/Settings.tsx
import {
  BodyText as BodyText7,
  Flex as Flex16,
  FlexItem as FlexItem10,
  Heading as Heading5,
  Icon as Icon16,
  Separator as Separator6,
  Button as Button12,
  ButtonType as ButtonType12,
  Accordion,
  AccordionList,
  Size as Size24
} from "@vaisala-rockhopper/components";
import { VaiIcon as VaiIcon12 } from "@vaisala-rockhopper/design-tokens";
import React23 from "react";
import { useParams as useParams5 } from "react-router-dom";
import "./settings.scss";
import { useTranslation as useTranslation26 } from "react-i18next";
import RFLImage from "../../../assets/images/RFL100_no_cable.png";

// ../vlncc-frontend/src/components/Site/LinkDataSourceDialog/index.tsx
import React22 from "react";
import { Button as Button11, ButtonType as ButtonType11, Flex as Flex15, FlexItem as FlexItem9, Icon as Icon15, IconName as IconName8, InputField as InputField4, Size as Size23 } from "@vaisala-rockhopper/components";
import { useTranslation as useTranslation25 } from "react-i18next";

// ../vlncc-frontend/src/components/Error/ListError.tsx
import { nanoid as nanoid2 } from "@reduxjs/toolkit";
import { Button as Button9, ButtonType as ButtonType9, Flex as Flex13, Icon as Icon11, Size as Size19, Stack } from "@vaisala-rockhopper/components";
import { VaiColor as VaiColor5, VaiIcon as VaiIcon8 } from "@vaisala-rockhopper/design-tokens";
import { useTranslation as useTranslation22 } from "react-i18next";
var ListError = /* @__PURE__ */ __name(({
  errorMsgTranslationKey,
  htmlId: htmlId3 = nanoid2(),
  separator,
  refreshResults = void 0,
  children
}) => {
  const { getId } = useHtmlId_default({ htmlId: htmlId3, separator });
  const { t } = useTranslation22();
  return <Stack data-testid={TEST_IDS.list_error_container} id={getId("error-container")} spacing={Size19.XS}>
    <Flex13
      data-testid={TEST_IDS.list_error_text_container}
      id={getId("error-text-container")}
      alignItems="center"
      justifyContent="center"
    >
      <Icon11
        id={getId("error-icon")}
        data-testid={TEST_IDS.list_error_icon}
        name={VaiIcon8.Warning}
        className="vai-margin-right-s"
        color={VaiColor5.Red}
        size={Size19.L}
      />
      <h3 data-testid={TEST_IDS.list_error_text} id={getId("error-text")}>{t(errorMsgTranslationKey)}</h3>
    </Flex13>
    {children}
    {refreshResults && <Flex13
      data-testid={TEST_IDS.list_error_refresh_button_container}
      id={getId("error-reload-button-container")}
      justifyContent="center"
    >
      {
        /* eslint-disable-next-line enforce-ids-in-jsx/missing-ids */
      }
      <Button9 id={getId("error-reload-button")} buttonType={ButtonType9.Secondary} onClick={refreshResults}>
        {t("general.refresh")}
        {
          /* <Icon name={VaiIcon.Refresh} size={Size.XS} style={{alignContent: "center"}} className="vai-margin-right-xs" /> */
        }
      </Button9>
    </Flex13>}
  </Stack>;
}, "ListError");
var ListError_default = ListError;

// ../vlncc-frontend/src/components/Utils/MeasurementTypeIcon/index.tsx
import { Icon as Icon12, Size as Size20 } from "@vaisala-rockhopper/components";
import { VaiColor as VaiColor6, VaiIcon as VaiIcon9 } from "@vaisala-rockhopper/design-tokens";
var MeasurementTypeIcon = /* @__PURE__ */ __name(({ size = Size20.M, type, htmlId: htmlId3, ...rest }) => {
  const getIconData = /* @__PURE__ */ __name((value) => {
    const icons = {
      [CO2_ID]: { name: VaiIcon9.Dust, color: VaiColor6.BlueDark },
      [TEMP_ID]: { name: VaiIcon9.Thermometer, color: VaiColor6.BlueDark },
      [HUMIDITY_ID]: { name: VaiIcon9.Humidity, color: VaiColor6.BlueDark }
    };
    return icons[value];
  }, "getIconData");
  return <Icon12
    htmlId={htmlId3}
    size={size}
    data-value={type}
    data-testid={TEST_IDS.measurement_icon}
    {...getIconData(type)}
    {...rest}
  />;
}, "MeasurementTypeIcon");
var MeasurementTypeIcon_default = MeasurementTypeIcon;

// ../vlncc-frontend/src/components/Site/LinkDataSourceDialog/DataSourceList.tsx
import React20 from "react";
import { List } from "@vaisala-rockhopper/components";

// ../vlncc-frontend/src/components/Site/LinkDataSourceDialog/DataSourceListItem.tsx
import { FlexItem as FlexItem7, ListItem, RadioButton, Icon as Icon13, Size as Size21 } from "@vaisala-rockhopper/components";
import { useTranslation as useTranslation23 } from "react-i18next";
import cx3 from "classnames";
import { nanoid as nanoid3 } from "@reduxjs/toolkit";
import { VaiIcon as VaiIcon10 } from "@vaisala-rockhopper/design-tokens";
import "./index.scss";
var DataSourceListItem = /* @__PURE__ */ __name(({
  dataSource,
  checked = false,
  initial,
  onSelect,
  symbolId,
  htmlId: htmlId3 = nanoid3(),
  separator = "-"
}) => {
  const className = cx3("cursor-pointer", { "user-selected-row": checked });
  const { t } = useTranslation23();
  const { getId } = useHtmlId_default({ htmlId: htmlId3, separator });
  const deviceId = buildDeviceId(dataSource.device_model, dataSource.device_sn);
  const probeId = buildDeviceId(dataSource.probe_model, dataSource.probe_sn);
  let messageString;
  let iconName;
  if (initial && checked) {
    messageString = "linkDataSourceDialog.initialDataSourceMessage";
    iconName = VaiIcon10.Link;
  } else if (initial && !checked) {
    messageString = "linkDataSourceDialog.unlinkDataSourceMessage";
    iconName = VaiIcon10.Unlink;
  } else if (!initial && checked) {
    messageString = "linkDataSourceDialog.linkDataSourceMessage";
    iconName = VaiIcon10.Link;
  }
  return <ListItem
    className={className}
    onClick={onSelect}
    data-testid={TEST_IDS.data_source_list_item_container}
    id={getId(`${TEST_IDS.data_source_list_item_container}-${probeId}-${dataSource.meas_group}`)}
  >
    <RadioButton
      className="vai-margin-left-m vai-margin-vertical-m vai-margin-right-none"
      data-testid={TEST_IDS.data_source_list_item_radio}
      value=""
      checked={checked}
    />
    <FlexItem7 className="vai-margin-right-m"><img data-testid={TEST_IDS.device_icon} src={getDeviceImage(dataSource.device_model)} className="icon-width" /></FlexItem7>
    <FlexItem7 flexGrow={1}>
      <span id={getId(TEST_IDS.device_id)} data-testid={TEST_IDS.device_id}>{deviceId}</span>
      <br />
      <span id={getId(TEST_IDS.probe_id)} data-testid={TEST_IDS.probe_id} className="grey-medium">{probeId}</span>
      <br />
      <span id={getId(TEST_IDS.status_msg_icon)} className="grey-medium">
        <Icon13 className="vai-margin-right-s status-msg-icon" size={Size21.M} name={iconName} />
        {t(messageString)}
      </span>
    </FlexItem7>
    <FlexItem7 flexBasis="50px">
      <span data-testid={TEST_IDS.data_source_list_item_latest_meas}>--</span>
      <span className="vai-margin-left-s" data-testid={TEST_IDS.data_source_list_item_symbol}>{showMeasurementSymbol(symbolId)}</span>
    </FlexItem7>
  </ListItem>;
}, "DataSourceListItem");
var DataSourceListItem_default = DataSourceListItem;

// ../vlncc-frontend/src/components/Site/LinkDataSourceDialog/DataSourceList.tsx
import { nanoid as nanoid4 } from "@reduxjs/toolkit";
var DataSourceList = /* @__PURE__ */ __name(({
  dataSources = [],
  symbolId,
  initialItem = null,
  onSelect,
  htmlId: htmlId3 = nanoid4(),
  separator = "-"
}) => {
  const { getId } = useHtmlId_default({ htmlId: htmlId3, separator });
  const [selectedItem, setSelectedItem] = React20.useState(initialItem);
  const isItemSelected = /* @__PURE__ */ __name((item) => {
    if (selectedItem == null) {
      return false;
    }
    return selectedItem.probe_sn === item.probe_sn && selectedItem.meas_group === item.meas_group;
  }, "isItemSelected");
  const isInitial = /* @__PURE__ */ __name((item) => {
    if (initialItem == null) {
      return false;
    }
    return initialItem.probe_sn === item.probe_sn && initialItem.meas_group === item.meas_group;
  }, "isInitial");
  const arrangedDataSources = React20.useMemo(() => {
    const items = initialItem ? [initialItem].concat(
      dataSources.filter(
        (dataSource) => dataSource.probe_sn === selectedItem.probe_sn ? dataSource.meas_group !== initialItem.meas_group : true
      )
    ) : dataSources;
    return items;
  }, [initialItem, dataSources]);
  return <List id={getId("data-source-list-container")} data-testid={TEST_IDS.data_source_list}>{arrangedDataSources.map((dataSource) => <DataSourceListItem_default
    key={buildDeviceId(dataSource.device_model, dataSource.device_sn)}
    htmlId={htmlId3}
    separator="-"
    dataSource={dataSource}
    onSelect={() => {
      let selected = dataSource;
      if (selectedItem && isItemSelected(dataSource)) {
        selected = null;
      }
      setSelectedItem(selected);
      onSelect && onSelect(selected);
    }}
    symbolId={symbolId}
    checked={selectedItem ? isItemSelected(dataSource) : false}
    initial={isInitial(dataSource)}
  />)}</List>;
}, "DataSourceList");
var DataSourceList_default = DataSourceList;

// ../vlncc-frontend/src/components/Site/LinkDataSourceDialog/DataSourceConfirmationModal.tsx
import React21, { useMemo as useMemo2 } from "react";
import { Button as Button10, ButtonType as ButtonType10, Flex as Flex14, FlexItem as FlexItem8, Icon as Icon14, Size as Size22 } from "@vaisala-rockhopper/components";
import { useTranslation as useTranslation24 } from "react-i18next";
import { VaiIcon as VaiIcon11 } from "@vaisala-rockhopper/design-tokens";
import "./index.scss";
var htmlId = "link-data-source-confirmation-modal";
var DataSourceConfirmationModal = /* @__PURE__ */ __name(({
  location = null,
  selectedItem,
  linkTreeNode,
  unlinkTreeNode
}) => {
  const { t } = useTranslation24();
  const [saving, setSaving] = React21.useState(false);
  const { getId } = useHtmlId_default({ htmlId, separator: "-" });
  const deviceId = buildDeviceId(selectedItem.device_model, selectedItem.device_sn);
  const probeId = buildDeviceId(selectedItem.probe_model, selectedItem.probe_sn);
  const oldDeviceId = location.device ? buildDeviceId(location.device.device_model, location.device.device_sn) : "";
  const oldProbeId = location.device ? buildDeviceId(location.device.probe_model, location.device.probe_sn) : "";
  const dispatch = useAppDispatch();
  const onDismiss = /* @__PURE__ */ __name(() => {
    dispatch(hideDialog());
  }, "onDismiss");
  const modalAction = useMemo2(() => {
    if (!location.device) {
      return "link" /* LINK */;
    } else if (probeId !== oldProbeId) {
      return "switch" /* SWITCH */;
    } else {
      return "unlink" /* UNLINK */;
    }
  }, [location, selectedItem]);
  const onConfirm = /* @__PURE__ */ __name(async () => {
    setSaving(true);
    const nodeLink = {
      linkedNode: {
        device_model: selectedItem.device_model,
        device_sn: selectedItem.device_sn,
        probe_model: selectedItem.probe_model,
        probe_sn: selectedItem.probe_sn,
        meas_group: selectedItem.meas_group,
        meas_id: selectedItem.meas_id
      },
      node_id: location.node_id,
      name: location.name,
      node_type: location.type
    };
    let nodeUnlink;
    if (location.device) {
      nodeUnlink = {
        node_id: location.node_id,
        name: location.name,
        dataSource: location.device
      };
    }
    if (modalAction === "link" /* LINK */) {
      linkTreeNode(nodeLink);
    } else if (modalAction === "unlink" /* UNLINK */) {
      unlinkTreeNode(nodeUnlink);
    } else if (modalAction === "switch" /* SWITCH */) {
      try {
        await unlinkTreeNode(nodeUnlink);
        linkTreeNode(nodeLink);
      } catch (error) {
        console.error("Error while unlinking:", error);
      }
    }
    onDismiss();
  }, "onConfirm");
  const cancelId = getId("cancel-button");
  const confirmId = getId("confirm-button");
  const ModalButtons = <>
    <Button10 id={confirmId} className="vai-space-inline-s" disabled={saving} onClick={onConfirm}>{t("general.confirm")}</Button10>
    <Button10 id={cancelId} htmlId={cancelId} buttonType={ButtonType10.Secondary} onClick={onDismiss}>{t("general.cancel")}</Button10>
  </>;
  return <ModalContainer
    id={getId()}
    isOpen
    showCloseIcon={false}
    dismissOnOverlayClick={false}
    title={modalAction === "unlink" /* UNLINK */ ? "unlinkDataSourceConfirmationModal.title" : "linkDataSourceConfirmationModal.title"}
    onDismiss={onDismiss}
    buttons={ModalButtons}
  >
    <Flex14>
      <FlexItem8 className="vai-margin-left-l vai-margin-top-m" flexBasis="35%" alignSelf="flex-start">{t("general.location")}</FlexItem8>
      <FlexItem8 flexBasis="65%" alignSelf="flex-end"><h3 id={getId("location-title")} data-testid={TEST_IDS.link_data_source_confirmation_modal_location_title}>
        <MeasurementTypeIcon_default
          type={location.meas_id}
          className="confirmation-modal-meas-icon"
          htmlId={getId("meas-icon")}
        />
        {location.name}
      </h3></FlexItem8>
    </Flex14>
    {modalAction === "switch" /* SWITCH */ && <Flex14>
      <FlexItem8 className="vai-margin-left-l vai-margin-top-m" flexBasis="35%" alignSelf="flex-start">{t("general.dataSource")}</FlexItem8>
      <FlexItem8 className="vai-margin-top-s" flexBasis="65%" alignSelf="flex-end"><Flex14
        id={getId("data-source-old-title")}
        flexDirection="row"
        data-testid={TEST_IDS.link_data_source_confirmation_modal_data_source_old_title}
      >
        <FlexItem8 alignSelf="center"><Icon14 className="vai-margin-right-s" size={Size22.L} name={VaiIcon11.Unlink} /></FlexItem8>
        <FlexItem8 flexBasis="100%">
          <b id={getId("old-device-id")} data-testid={TEST_IDS.link_data_source_confirmation_modal_old_device_id}>{oldDeviceId}</b>
          <br />
          <span
            id={getId("old-probe-id")}
            className="grey-medium"
            data-testid={TEST_IDS.link_data_source_confirmation_modal_old_probe_id}
          >{oldProbeId}</span>
        </FlexItem8>
      </Flex14></FlexItem8>
    </Flex14>}
    <Flex14>
      <FlexItem8 className="vai-margin-left-l vai-margin-top-m" flexBasis="35%" alignSelf="flex-start">{modalAction === "unlink" /* UNLINK */ ? t("unlinkDataSourceConfirmationModal.toBeLinked") : t("general.dataSource")}</FlexItem8>
      <FlexItem8 className="vai-margin-top-s" flexBasis="65%" alignSelf="flex-end"><Flex14
        id={getId("data-source-title")}
        flexDirection="row"
        data-testid={TEST_IDS.link_data_source_confirmation_modal_data_source_title}
      >
        <FlexItem8 alignSelf="center"><Icon14
          className="vai-margin-right-s"
          size={Size22.L}
          name={modalAction === "unlink" /* UNLINK */ ? VaiIcon11.Unlink : VaiIcon11.Link}
        /></FlexItem8>
        <FlexItem8 flexBasis="100%">
          <b id={getId("device-id")} data-testid={TEST_IDS.link_data_source_confirmation_modal_device_id}>{deviceId}</b>
          <br />
          <span
            id={getId("probe-id")}
            className="grey-medium"
            data-testid={TEST_IDS.link_data_source_confirmation_modal_probe_id}
          >{probeId}</span>
        </FlexItem8>
      </Flex14></FlexItem8>
    </Flex14>
    <Flex14><FlexItem8 className="vai-margin-left-s vai-margin-top-m" flexBasis="100%"><p id={getId("message")} data-testid={TEST_IDS.link_data_source_confirmation_modal_message}>{modalAction === "unlink" /* UNLINK */ ? t("unlinkDataSourceConfirmationModal.message") : t("linkDataSourceConfirmationModal.message")}</p></FlexItem8></Flex14>
  </ModalContainer>;
}, "DataSourceConfirmationModal");
var DataSourceConfirmationModal_default = DataSourceConfirmationModal;

// ../vlncc-frontend/src/components/Site/LinkDataSourceDialog/index.tsx
import "./index.scss";
var MOCK_DATA = [
  {
    device_model: "RFL100" /* RFL100 */,
    device_sn: "A0000001",
    probe_model: "HMT110",
    probe_sn: "S0000001",
    meas_id: 10,
    meas_group: 0
  },
  {
    device_model: "RFL100" /* RFL100 */,
    device_sn: "A0000002",
    probe_model: "HMT110",
    probe_sn: "S0000002",
    meas_id: 10,
    meas_group: 0
  }
];
var appName = APP_NAME;
var htmlId2 = "link-data-source-dialog";
var LinkDataSourceDialog = /* @__PURE__ */ __name(({ location = null, linkTreeNode, unlinkTreeNode }) => {
  const { t } = useTranslation25();
  const { getId } = useHtmlId_default({ htmlId: htmlId2, separator: "-" });
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = React22.useState("");
  const customerId = getConstantFromLocalStorage(LS_COMPANY_CUSTOMER_ID);
  const siteId = PARENT_SITE_KEY;
  const {
    data: dataSources = void 0,
    error,
    isLoading,
    isFetching,
    isSuccess,
    refetch
  } = useGetDataSourcesPerSiteQuery(
    { customerId, siteId, measId: location ? MEAS_ID_TO_NIMBUS_R[location.meas_id] : void 0 },
    { refetchOnFocus: false, refetchOnMountOrArgChange: true }
  );
  const [initialItem, setInitialItem] = React22.useState(location.device);
  const [selectedItem, setSelectedItem] = React22.useState(initialItem);
  const onDismiss = /* @__PURE__ */ __name(() => {
    dispatch(hideDialog());
  }, "onDismiss");
  const showDataSourceConfirmationModal = /* @__PURE__ */ __name(() => {
    const newSelectedItem = initialItem && selectedItem == null ? initialItem : selectedItem;
    dispatch(
      showDialog(
        <DataSourceConfirmationModal_default
          linkTreeNode={linkTreeNode}
          unlinkTreeNode={unlinkTreeNode}
          location={location}
          selectedItem={newSelectedItem}
        />
      )
    );
  }, "showDataSourceConfirmationModal");
  const onChange = /* @__PURE__ */ __name((e) => {
    const { value } = e.currentTarget;
    setSearchValue(value);
  }, "onChange");
  const itemHasChanged = /* @__PURE__ */ __name(() => {
    if (initialItem) {
      if (selectedItem == null) {
        return true;
      }
      return buildDeviceId(initialItem.probe_model, initialItem.probe_sn) !== buildDeviceId(selectedItem.probe_model, selectedItem.probe_sn);
    }
    return selectedItem != null;
  }, "itemHasChanged");
  React22.useEffect(() => {
    if (location.device) {
      setInitialItem(location.device);
    }
  }, [location]);
  const cancelId = getId("cancel-button");
  const saveId = getId("save-button");
  const ModalButtons = <>
    <Button11
      id={saveId}
      className="vai-space-inline-s"
      htmlId={saveId}
      onClick={showDataSourceConfirmationModal}
      disabled={!itemHasChanged()}
    >{t("general.save")}</Button11>
    <Button11 id={cancelId} htmlId={cancelId} buttonType={ButtonType11.Secondary} onClick={onDismiss}>{t("general.cancel")}</Button11>
  </>;
  const renderDataSources = /* @__PURE__ */ __name(() => {
    if (dataSources.length === 0) {
      return <EmptyState
        htmlId={getId("data-source-empty-state")}
        heading="linkDataSourceDialog.emptyHeader"
        description="linkDataSourceDialog.emptyDescription"
        illustration={"nothingFound" /* nothingFound */}
      />;
    }
    return <DataSourceList_default
      htmlId={htmlId2}
      onSelect={(selectedItem2) => setSelectedItem(selectedItem2)}
      initialItem={initialItem}
      dataSources={dataSources}
      symbolId={location.symbol_id}
    />;
  }, "renderDataSources");
  return <ModalContainer
    id={getId()}
    isOpen
    showCloseIcon={true}
    dismissOnOverlayClick={false}
    title="linkDataSourceDialog.title"
    onDismiss={onDismiss}
    buttons={ModalButtons}
  >
    <h3
      id={getId("title")}
      data-testid={TEST_IDS.link_data_source_dialog_location_title}
      className="vai-margin-top-none"
    >
      <MeasurementTypeIcon_default type={location.meas_id} className="vai-margin-right-s" htmlId={getId("meas-icon")} />
      {location.name}
    </h3>
    <Flex15 alignItems="center">
      <FlexItem9
        id={getId("blurb")}
        data-testid={TEST_IDS.link_data_source_dialog_blurb}
        flexGrow={1}
        className="grey-medium"
      >{t("linkDataSourceDialog.blurb")}</FlexItem9>
      <FlexItem9><Infotip_default data-testid={TEST_IDS.link_data_source_dialog_infotip} htmlId={getId("infotip")}>{t("infotip.linkDataSource", { appName })}</Infotip_default></FlexItem9>
    </Flex15>
    <InputField4
      htmlId={getId("search-data-sources-input")}
      name="search"
      className="vai-margin-top-m"
      width={Size23.Container}
      placeholder={t("general.search")}
      value={searchValue}
      onChange={onChange}
      data-testid={TEST_IDS.link_data_source_dialog_search_input}
      endIcon={<Icon15
        htmlId={getId("search-data-sources-input-icon")}
        data-testid={TEST_IDS.link_data_source_dialog_search_input_icon}
        name={IconName8.Search}
        size={Size23.M}
      />}
    />
    <div
      id={getId("data-source-list")}
      data-testid={TEST_IDS.data_source_list_container}
      className="data-source--list vai-margin-top-m"
    >{isLoading || isFetching ? <CenteredSpinner_default htmlId={getId("spinner")} /> : error ? <Flex15 className="margin-auto"><ListError_default
      htmlId={htmlId2}
      errorMsgTranslationKey="linkDataSourceDialog.errorLoadingResults"
      refreshResults={refetch}
    /></Flex15> : renderDataSources()}</div>
  </ModalContainer>;
}, "LinkDataSourceDialog");
var LinkDataSourceDialog_default = LinkDataSourceDialog;

// ../vlncc-frontend/src/components/Site/Setting/Settings.tsx
var Settings2 = /* @__PURE__ */ __name(() => {
  const { id } = useParams5();
  const { t } = useTranslation26();
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectCurrentUser);
  const currentlyRemovingNodeId = useAppSelector(selectCurrentlyRemoving);
  const customerId = getConstantFromLocalStorage(LS_COMPANY_CUSTOMER_ID);
  const { data: location } = useGetLocationQuery({ customerId, id }, { skip: id === currentlyRemovingNodeId });
  const { linkTreeNode, unlinkTreeNode } = useSiteTreeActions_default();
  const { locationStatus: locationStatus2, deviceStatus } = useLocationStatus(location);
  const [openAccordion, setOpenAccordion] = React23.useState("");
  const handleAccordionChange = /* @__PURE__ */ __name((isExpanded, accordionKey) => {
    setOpenAccordion(accordionKey);
  }, "handleAccordionChange");
  const renderLinkDataSourceDialog = /* @__PURE__ */ __name(() => {
    currentUser?.canManageSites && dispatch(
      showDialog(
        <LinkDataSourceDialog_default linkTreeNode={linkTreeNode} unlinkTreeNode={unlinkTreeNode} location={location} />
      )
    );
  }, "renderLinkDataSourceDialog");
  const toggleActiveDisplay = /* @__PURE__ */ __name(() => {
    console.log("toggle");
  }, "toggleActiveDisplay");
  if (!location) {
    return <><CenteredSpinner_default /></>;
  }
  return <>
    <LocationHeader_default
      location={location}
      toggle={true}
      toggleActiveDisplay={toggleActiveDisplay}
      deviceStatus={deviceStatus}
      measurementType={location.meas_id}
    />
    <Separator6 />
    <Flex16 flexDirection="row" flexWrap="nowrap" className="settings-data-source">
      <FlexItem10 alignSelf="center" flexBasis="" flexGrow={0}><Heading5 level={3} className="settings-data-source__title">{t("site.linkedDataSource")}</Heading5></FlexItem10>
      <FlexItem10><Button12
        id="site-settings-link-button"
        data-testid={TEST_IDS.site_settings_link_button}
        buttonType={ButtonType12.Link}
        onClick={renderLinkDataSourceDialog}
        buttonSize={Size24.S}
        disabled={!currentUser?.canManageSites}
      >{t("general.edit")}</Button12></FlexItem10>
    </Flex16>
    {deviceStatus !== DEVICE_STATUS.UNLINKED && location.device ? <Flex16 flexDirection="row" flexWrap="nowrap" alignItems="center">
      <FlexItem10><div className="setting-icon"><img src={RFLImage} width={50} /></div></FlexItem10>
      <Flex16 flexDirection="column">
        <Flex16 flexDirection="row" flexWrap="nowrap" alignItems="center">
          <Heading5 level={4} className="setting-title">
            {buildDeviceId(location.device.device_model, location.device.device_sn)}
            {
              /* {`${location.device.device_model} ${location.device.device_sn}`} */
            }
          </Heading5>
          <BodyText7 className="setting-status">
            {t("site.online")}
            <Icon16 className="setting-ok-icon" name={VaiIcon12.AlertOk} />
          </BodyText7>
        </Flex16>
        <FlexItem10><BodyText7 className="grey-medium">{buildDeviceId(location.device.probe_model, location.device.probe_sn)}</BodyText7></FlexItem10>
      </Flex16>
    </Flex16> : <div>
      <BodyText7 className="setting-alert-message">{t("site.noLinkedSource")}</BodyText7>
      <BodyText7 className="grey-medium">{t("site.noLinkedSourceMsg")}</BodyText7>
    </div>}
    <Separator6 />
    <Flex16 flexDirection="row" flexWrap="nowrap" className="settings-alarms">
      <FlexItem10 alignSelf="center" flexGrow={1}><Heading5 level={3} className="settings-alarms__title">{t("site.alarmSettings")}</Heading5></FlexItem10>
      <FlexItem10 alignSelf="center" flexBasis="130px"><Button12 id="settings-alarms__pause" buttonType={ButtonType12.Link} startIcon={<Icon16 name={VaiIcon12.Pause} />}>{t("site.pauseAlarms")}</Button12></FlexItem10>
    </Flex16>
    <AccordionList onChange={handleAccordionChange} defaultKeys={openAccordion} className="dm-accordion-list">
      <Accordion accordionKey="threshholdAccordion" title={t("site.ThreshholdAlaramSettings")}>Coming soon.</Accordion>
      <Accordion accordionKey="deviceAccordion" title={t("site.deviceAlarmSettings")}>Coming soon.</Accordion>
    </AccordionList>
  </>;
}, "Settings");

// ../vlncc-frontend/src/components/Site/Setting/SettingsList.tsx
import { useParams as useParams6 } from "react-router-dom";
var SettingsList = /* @__PURE__ */ __name(({ siteId }) => {
  const customerId = getConstantFromLocalStorage(LS_COMPANY_CUSTOMER_ID);
  const { username } = useGetUsername_default();
  const { id } = useParams6();
  const { data: nodes, isLoading } = useGetNodeLocationsQuery(
    { customerId, username, nodeId: id ? id : siteId },
    { skip: username === void 0 || username === "undefined" || username === null }
  );
  if (!nodes || isLoading) {
    return <><CenteredSpinner_default /></>;
  }
  if (nodes.length <= 0 && !id) {
    return <EmptyState
      illustration={"positive" /* positive */}
      heading="site.emptyHeader"
      description="site.emptyBody"
      link={{ to: "/", desc: "site.emptyTourLink" }}
    />;
  }
  if (nodes.length <= 0) {
    return <EmptyState illustration={"emptyFolder" /* emptyFolder */} heading="site.emptyZoneHeading" />;
  }
  return <SiteTable key={id} data={nodes} type="settings" />;
}, "SettingsList");

// ../vlncc-frontend/src/components/Site/RightsList.tsx
var RightsList = /* @__PURE__ */ __name(() => {
  return <h2>Rights list</h2>;
}, "RightsList");

// ../vlncc-frontend/src/components/Site/Rights.tsx
import { useParams as useParams7 } from "react-router-dom";
var Rights = /* @__PURE__ */ __name(() => {
  const { id } = useParams7();
  return <><h2>
    {"Rights for node: "}
    {id}
  </h2></>;
}, "Rights");

// ../vlncc-frontend/src/containers/Site.tsx
import { connect as connect4 } from "react-redux";
var siteTabs = [
  {
    tabKey: "status" /* status */,
    title: "Status",
    translationKey: "site.status"
  },
  {
    tabKey: "alarms" /* alarms */,
    title: "Alarms",
    translationKey: "site.alarms"
  },
  {
    tabKey: "settings" /* settings */,
    title: "Settings",
    translationKey: "site.settings"
  },
  {
    tabKey: "rights" /* rights */,
    title: "Rights",
    translationKey: "site.rights"
  }
];
var mapStateToProps4 = /* @__PURE__ */ __name(({ profile }) => ({
  canManageSites: profile.currentUser?.canManageSites || false,
  canPauseAlarms: profile.currentUser?.canPauseAlarms || false,
  canManageAlarms: profile.currentUser?.canManageAlarms || false,
  userInfoLoading: profile.initProfileLoading
}), "mapStateToProps");
var SiteTreeContainer = /* @__PURE__ */ __name(({
  canManageSites,
  userInfoLoading,
  canManageAlarms,
  canPauseAlarms
}) => {
  const customerId = getConstantFromLocalStorage(LS_COMPANY_CUSTOMER_ID);
  const siteId = PARENT_SITE_KEY;
  const { username } = useGetUsername_default();
  const navigate = useNavigate();
  const selectedNodeId = useAppSelector(selectSelectedNode);
  const dispatch = useAppDispatch();
  const location = useLocation5();
  const { data: site, isLoading } = useGetSiteQuery(
    { customerId, username, siteId },
    { skip: username === void 0 || username === "undefined" || username === null }
  );
  React24.useEffect(() => {
    if (selectedNodeId) {
      const pathParts = location.pathname.split("/").filter((path) => path !== "");
      const pathTab = pathParts[1];
      if (selectedNodeId === PARENT_SITE_KEY) {
        return navigate(pathTab);
      }
      let nodeTypePath = "";
      if (selectedNodeId.substring(0, 2) === "ZN") {
        nodeTypePath = "zone/";
      }
      navigate(`${pathTab}/${nodeTypePath}${selectedNodeId}`);
    }
  }, [selectedNodeId]);
  React24.useEffect(() => {
    if (!selectedNodeId) {
      const pathParts = location.pathname.split("/").filter((path) => path !== "");
      const pathPartsLength = pathParts.length;
      const pathId = pathParts[pathPartsLength - 1];
      const isZoneOrLocation = SITE_OR_ZONE_SUBSTRING.includes(pathId.substring(0, 2));
      if (pathId && isZoneOrLocation) {
        dispatch(setSelectedNodeId(pathId));
      } else {
        dispatch(setSelectedNodeId(PARENT_SITE_KEY));
      }
    }
  }, [location]);
  const canSeeSettings = canManageAlarms || canPauseAlarms || canManageSites;
  const currentTabs = !canSeeSettings ? siteTabs.filter((tab) => tab.tabKey !== "settings" /* settings */) : siteTabs;
  return <PageContainer.Content style={{ height: "100%" }}><Flex17 style={{ height: "100%", display: "flex" }}>
    <Flex17 style={{ height: "100%", display: "flex" }} className="vai-margin-right-75-rem"><Paper2><SiteTree_default
      site={site}
      canManageSites={canManageSites}
      userInfoLoading={userInfoLoading}
      siteLoading={isLoading}
    /></Paper2></Flex17>
    <Flex17 style={{ height: "100%", display: "flex", width: "100%" }}><Routes><Route path="/" element={<TabNavigation tabs={currentTabs} addRoutes={["zone"]} />}>
      <Route index element={<Navigate to="status" />} />
      <Route path="status">
        <Route index element={<StatusList siteId={siteId} />} />
        <Route path="zone/:id" element={<StatusList siteId={siteId} />} />
        <Route path=":id" element={<Status />} />
      </Route>
      <Route path="alarms">
        <Route index element={<AlarmsList />} />
        <Route path="zone/:id" element={<Alarm />} />
        <Route path=":id" element={<Alarm />} />
      </Route>
      {canSeeSettings && <Route path="settings">
        <Route index element={<SettingsList siteId={siteId} />} />
        <Route path="zone/:id" element={<SettingsList siteId={siteId} />} />
        <Route path=":id" element={<Settings2 />} />
      </Route>}
      <Route path="rights">
        <Route index element={<RightsList />} />
        <Route path="zone/:id" element={<Rights />} />
        <Route path=":id" element={<Rights />} />
      </Route>
    </Route></Routes></Flex17>
  </Flex17></PageContainer.Content>;
}, "SiteTreeContainer");
var Site_default = connect4(mapStateToProps4)(SiteTreeContainer);

// ../vlncc-frontend/src/components/auth/Login.tsx
import * as React25 from "react";
import { Login as VaiLogin } from "@vaisala-rockhopper/components";
import { Routes as Routes2, Route as Route2 } from "react-router";
import "./login.scss";
import { useTranslation as useTranslation27 } from "react-i18next";
var Login = /* @__PURE__ */ __name(({
  auth,
  sendResetCode: sendResetCode2,
  resetPassword: resetPassword2,
  sendResetCodeInit: sendResetCodeInit2,
  setAuthError: setAuthError2,
  setResettingPasswordError: setResettingPasswordError2,
  setUpProfile: setUpProfile2,
  login: login2,
  setUpPasswordPolicy: setUpPasswordPolicy2,
  setUpPassword: setUpPassword2,
  changeLanguage: changeLanguage2,
  language,
  setUpMFA: setUpMFA2,
  resendMFA: resendMFA2,
  MFABackToLogin: MFABackToLogin2
}) => {
  const { t } = useTranslation27();
  const translateError = React25.useCallback(
    (error) => {
      if (error == null) {
        return;
      }
      switch (error) {
        case 0 /* invalidUserCredentialError */:
          return t("auth.invalidUserCredentialError");
        case 3 /* firstLoginInvalidCredentialError */:
          return t("auth.linkExpired");
        case 2 /* networkError */:
          return t("general.networkError");
        case "NotAuthorizedException" /* NotAuthorizedException */:
          return t("auth.codeExpired");
        case "CodeMismatchException" /* CodeMismatchException */:
          return t("mfa.wrongCode");
        case "ResendException" /* ResendException */:
          return t("mfa.resendFailure");
        case 6 /* InactivityError */:
          return t("auth.logoutDueToInactivity");
        case 7 /* SessionExpiredError */:
          return t("auth.sessionExpired", { appName: APP_NAME });
        default:
          return t("validationErrors.unknownError");
      }
    },
    [auth.error, t]
  );
  const translatePasswordResetError = React25.useCallback(
    (error) => {
      if (error == null) {
        return;
      }
      switch (error) {
        case "ExpiredCodeException" /* ExpiredCodeException */:
          return t("auth.codeExpired");
        case "CodeMismatchException" /* CodeMismatchException */:
          return t("auth.codeMismatch");
        case "InvalidPasswordException" /* InvalidPasswordException */:
          return t("auth.couldNotResetPassword");
        default:
          return t("validationErrors.unknownError");
      }
    },
    [auth.resettingPasswordError, t]
  );
  const onLogin = /* @__PURE__ */ __name((username, password, companyName) => {
    if (!auth.loading) {
      login2(username, password, companyName, false);
    }
  }, "onLogin");
  const hasAuthError = auth.error !== null && typeof auth.error !== "undefined";
  return <VaiLogin
    copyright={t("general.copyright")}
    productName={PRODUCT_NAME}
    error={hasAuthError ? translateError(auth.error) : translatePasswordResetError(auth.resettingPasswordError)}
    productVersion={APP_Version ? t("general.versionName") + " " + APP_Version : t("general.version")}
    htmlId="login-container"
    privacyPolicyText={t("general.privacyPolicy")}
  ><Routes2>
    <Route2
      path={routes.login.forgotPassword.url}
      element={<ForgotPassword_default
        sendingResetCode={auth.sendingResetCode}
        sendingResetCodeError={auth.sendingResetCodeError}
        sendResetCode={sendResetCode2}
      />}
    />
    {
      /**
      * TODO: Simplify ResetPassword props by just passing,
      * the auth object as prop instead of individual props.
      */
    }
    <Route2
      path={routes.login.resetPassword.url}
      element={<ResetPassword_default
        resettingPassword={auth.resettingPassword}
        isPasswordReset={auth.isPasswordReset}
        resetPassword={resetPassword2}
        setUpPasswordPolicy={setUpPasswordPolicy2}
        setResettingPasswordError={setResettingPasswordError2}
        language={language}
        passwordPolicyLength={auth.passwordPolicyLength}
        passwordPolicyMaxLength={auth.passwordPolicyMaxLength}
        passwordPolicyNumberRequired={auth.passwordPolicyNumberRequired}
        passwordPolicySpecialCharRequired={auth.passwordPolicySpecialCharRequired}
        passwordPolicyUpperCaseRequired={auth.passwordPolicyUpperCaseRequired}
        passwordPolicyLowerCaseRequired={auth.passwordPolicyLowerCaseRequired}
        resettingPasswordError={auth.resettingPasswordError}
        changeLanguage={changeLanguage2}
      />}
    />
    <Route2 path={routes.login.resetPasswordConfirmation.url} element={<ResetPasswordConfirmation_default />} />
    <Route2 path={routes.login.passwordReset.url} element={<PasswordReset_default />} />
    <Route2
      path={routes.login.setUpProfile.url}
      element={<SetUpProfile_default
        setUpProfile={setUpProfile2}
        changeLanguage={changeLanguage2}
        language={language}
        userName={auth.userName}
      />}
    />
    {
      /**
      * TODO: Simplify SetUpPassword props by just passing,
      * the auth object as prop instead of individual props.
      */
    }
    <Route2
      path={routes.login.setUpPassword.url}
      element={<SetUpPassword_default
        login={login2}
        isSignUp={auth.isSignUp}
        setUpPassword={setUpPassword2}
        setUpPasswordPolicy={setUpPasswordPolicy2}
        changingPasswordError={auth.changingPasswordError}
        changeLanguage={changeLanguage2}
        language={language}
        passwordPolicyLength={auth.passwordPolicyLength}
        passwordPolicyMaxLength={auth.passwordPolicyMaxLength}
        passwordPolicyNumberRequired={auth.passwordPolicyNumberRequired}
        passwordPolicySpecialCharRequired={auth.passwordPolicySpecialCharRequired}
        passwordPolicyUpperCaseRequired={auth.passwordPolicyUpperCaseRequired}
        passwordPolicyLowerCaseRequired={auth.passwordPolicyLowerCaseRequired}
        firstLoginError={auth.error}
        loading={auth.loading}
      />}
    />
    <Route2
      path={routes.login.setUpMfa.url}
      element={<SetUpMFA_default
        loading={auth.loading}
        error={auth.error}
        setUpMFA={setUpMFA2}
        resendMFA={resendMFA2}
        setAuthError={setAuthError2}
        MFABackToLogin={MFABackToLogin2}
      />}
    />
    <Route2
      path="*"
      element={<LoginForm_default loading={auth.loading} onLogin={onLogin} sendResetCodeInit={sendResetCodeInit2} />}
    />
  </Routes2></VaiLogin>;
}, "Login");
var Login_default = Login;

// ../vlncc-frontend/src/components/auth/LoginRedirect.tsx
import * as React26 from "react";
import { connect as connect5 } from "react-redux";
import { stringify as stringify2 } from "querystring";
import { useLocation as useLocation6, useNavigate as useNavigate2 } from "react-router-dom";
var mapStateToProps5 = /* @__PURE__ */ __name(({ auth }) => ({ isAuthenticated: auth.isAuthenticated }), "mapStateToProps");
var LoginRedirect = /* @__PURE__ */ __name(({ children, isAuthenticated }) => {
  const location = useLocation6();
  const navigate = useNavigate2();
  React26.useEffect(() => {
    if (!isAuthenticated) {
      const { pathname, search } = location;
      const query = stringify2({ returnUrl: pathname + search });
      navigate(`/login?${query}`, { replace: true });
    }
  }, [isAuthenticated]);
  return children;
}, "LoginRedirect");
var LoginRedirect_default = connect5(mapStateToProps5)(LoginRedirect);

// ../vlncc-frontend/src/components/auth/Logout.tsx
function AppLogout() {
  window.location.pathname = routes.login.url;
  return null;
}
__name(AppLogout, "AppLogout");

// ../vlncc-frontend/src/components/auth/MainRedirect.tsx
import { useEffect as useEffect13 } from "react";
import { useLocation as useLocation7, useNavigate as useNavigate3 } from "react-router-dom";
import { connect as connect6 } from "react-redux";
import { parse as parse2 } from "querystring";
var mapStateToProps6 = /* @__PURE__ */ __name(({ auth }) => ({ auth }), "mapStateToProps");
var mapDispatchToProps4 = /* @__PURE__ */ __name((dispatch) => ({
  getAuthInfo: () => dispatch(authDispatchActions.getAuthInfo())
}), "mapDispatchToProps");
var MainRedirect = /* @__PURE__ */ __name(({ getAuthInfo: getAuthInfo2, auth, children }) => {
  const location = useLocation7();
  const navigate = useNavigate3();
  useEffect13(() => {
    getAuthInfo2();
  }, []);
  useEffect13(() => {
    if (auth.isAuthenticated) {
      const { returnUrl = "/" } = parse2(location.search.substring(1));
      navigate(returnUrl, { replace: true });
    }
  }, [auth.isAuthenticated]);
  return <>{children}</>;
}, "MainRedirect");
var MainRedirect_default = connect6(mapStateToProps6, mapDispatchToProps4)(MainRedirect);

// ../vlncc-frontend/src/components/auth/ForgotPassword.tsx
import * as React27 from "react";
import validator5 from "validator";
import { Form as Form7, Heading as Heading6, Label as Label3, InputField as InputField5, Size as Size25, Button as Button13, Spinner as Spinner2 } from "@vaisala-rockhopper/components";
import { Link as Link4, useNavigate as useNavigate4 } from "react-router-dom";
import "./forgot-password.scss";
import { useTranslation as useTranslation28 } from "react-i18next";
var ForgotPassword = /* @__PURE__ */ __name(({
  sendingResetCode,
  sendingResetCodeError,
  sendResetCode: sendResetCode2
}) => {
  const navigate = useNavigate4();
  const { t } = useTranslation28();
  const [email, setEmail] = React27.useState("");
  const [companyName, setCompanyName] = React27.useState(getConstantFromLocalStorage(LS_COMPANY_ALIAS) || "");
  const [requestSent, setRequestSent] = React27.useState(false);
  const [inputError, setInputError] = React27.useState("");
  const [companyError, setCompanyError] = React27.useState(false);
  const [emailError, setEmailError] = React27.useState(false);
  React27.useEffect(() => {
    if (!requestSent) {
      return;
    }
    if (!sendingResetCode) {
      if (!sendingResetCodeError) {
        const loginURL = "/login/";
        navigate(loginURL + routes.login.resetPasswordConfirmation.url);
      } else {
        setRequestSent(false);
      }
    }
  }, [sendingResetCode]);
  React27.useEffect(() => {
    if (sendingResetCodeError) {
      if (sendingResetCodeError === "UserNotFoundException" /* UserNotFoundException */) {
        setInputError(t("auth.userNotFoundWithEmail"));
      } else if (sendingResetCodeError === "NetworkError" /* NetworkError */) {
        setInputError(t("general.networkError"));
      } else {
        setInputError(t("auth.couldNotSendEmail"));
      }
    }
  }, [sendingResetCodeError]);
  const onSubmit = /* @__PURE__ */ __name(() => {
    const trimmedEmail = validator5.trim(email);
    const trimmedCompanyName = validator5.trim(companyName);
    sendResetCode2(trimmedEmail, trimmedCompanyName);
    setRequestSent(true);
  }, "onSubmit");
  const onChange = /* @__PURE__ */ __name((e) => {
    const { value, name } = e.currentTarget;
    setInputError("");
    if (name === "email") {
      setEmail(value);
      value.length > USERNAME_MAX_CHARACTERS_LENGTH ? setEmailError(true) : setEmailError(false);
    } else if (name === "companyName") {
      setCompanyName(value);
      value.length > COMPANY_NAME_MAX_CHARACTERS_LENGTH ? setCompanyError(true) : setCompanyError(false);
    }
  }, "onChange");
  const isButtonDisabled = React27.useCallback(() => {
    return emailError || !email || !validator5.isEmail(validator5.trim(email)) || validator5.trim(companyName).length < COMPANY_NAME_MIN_CHARACTERS_LENGTH || companyError;
  }, [sendingResetCode, companyName, email, companyError]);
  return <Form7 htmlId="forgot-password-form" preventDefault={true} onSubmit={onSubmit}>
    <Heading6 htmlId="forgot-password-heading" level={2} className="forgot-password-title">{t("auth.forgotPasswordTitle")}</Heading6>
    <p id="forgot-password-help-text" className="forgot-help">{t("auth.typeUsernameForCode")}</p>
    <Label3 htmlId="company-name-label" className="vai-padding-right-none">
      {t("auth.companyID")}
      <InputField5
        htmlId="login-company-name"
        value={companyName}
        name="companyName"
        onChange={onChange}
        width={Size25.Container}
        autoComplete="companyName"
        className={getErrorClass(companyError ? t("auth.companyIDCharacterLimit") : "")}
      />
      <span id="company-name-error" className="input-error">{companyError ? t("auth.companyIDCharacterLimit") : ""}</span>
    </Label3>
    <Label3 htmlId="email-label" className="vai-padding-right-none">
      {t("auth.email")}
      <InputField5 value={email} name="email" onChange={onChange} width={Size25.Container} />
      <span id="email-error" className="input-error">{inputError}</span>
      <span id="email-error" className="input-error">{emailError ? t("auth.usernameCharacterLimit") : ""}</span>
    </Label3>
    <div id="buttons-container" className="app-login-submit vai-margin-top-m">
      <Link4 id="back-link" to={routes.login.url}>{t("general.back")}</Link4>
      <Button13 id="forgot-password" disabled={isButtonDisabled()} type="submit">{sendingResetCode ? <Spinner2 htmlId="login-spinner" /> : t("auth.sendEmailButton")}</Button13>
    </div>
  </Form7>;
}, "ForgotPassword");
var ForgotPassword_default = ForgotPassword;

// ../vlncc-frontend/src/components/auth/ResetPassword.tsx
import * as React28 from "react";
import { Buffer as Buffer4 } from "buffer";
import { Form as Form8, Heading as Heading7, Button as Button14 } from "@vaisala-rockhopper/components";
import { Link as Link5, useLocation as useLocation8, useNavigate as useNavigate5 } from "react-router-dom";
import { useTranslation as useTranslation29 } from "react-i18next";
import "./reset-password.scss";
var ResetPassword = /* @__PURE__ */ __name(({
  isPasswordReset,
  resetPassword: resetPassword2,
  setUpPasswordPolicy: setUpPasswordPolicy2,
  setResettingPasswordError: setResettingPasswordError2,
  resettingPassword,
  language,
  passwordPolicyLength,
  passwordPolicyMaxLength,
  passwordPolicyNumberRequired,
  passwordPolicySpecialCharRequired,
  passwordPolicyUpperCaseRequired,
  passwordPolicyLowerCaseRequired,
  resettingPasswordError,
  changeLanguage: changeLanguage2
}) => {
  const { t, ready } = useTranslation29("english", { useSuspense: false });
  const navigate = useNavigate5();
  const location = useLocation8();
  const [resetCode, setResetCode] = React28.useState("");
  const [userName, setUserName] = React28.useState("");
  const [isLinkConfigured, setIsLinkConfigured] = React28.useState(false);
  const [passwordBlackList2, setPasswordBlackList] = React28.useState([]);
  const passwordPolicy = {
    minimumLength: passwordPolicyLength,
    maximumLength: passwordPolicyMaxLength,
    isNumberRequired: passwordPolicyNumberRequired,
    isSpecialCharRequired: passwordPolicySpecialCharRequired,
    isUpperCaseRequired: passwordPolicyUpperCaseRequired,
    isLowerCaseRequired: passwordPolicyLowerCaseRequired
  };
  React28.useEffect(() => {
    if (resettingPasswordError) {
      if (resettingPasswordError === "InvalidPasswordException" /* InvalidPasswordException */) {
        setNewPasswordError(t("auth.doNotMeetCriteria"));
      } else {
        setResettingPasswordError2(resettingPasswordError);
      }
    }
    if (isPasswordReset) {
      navigate(routes.login.url);
    }
  }, [resettingPasswordError, isPasswordReset]);
  React28.useEffect(() => {
    const decodedString = Buffer4.from(location.search, "base64").toString("ascii");
    const decodedArray = decodedString.split("&");
    let userParameters = [];
    let hasCompanyAlias = false;
    let hasUsername = false;
    let hasResetCode = false;
    const blacklist = [];
    decodedArray.map((param) => {
      userParameters = param.split("=");
      const urlKey = userParameters[0];
      const urlValue = decodeURIComponent(userParameters[1]);
      if (typeof urlValue !== "undefined") {
        switch (urlKey) {
          case "username":
            setUserName(urlValue);
            hasUsername = Boolean(urlValue);
            if (hasUsername) {
              blacklist.push(urlValue);
            }
            break;
          case LS_LOCALE:
            changeLanguage2(decodeURI(userParameters[1]));
            break;
          case "code":
            setResetCode(urlValue);
            hasResetCode = Boolean(urlValue);
            break;
          case LS_COMPANY_ALIAS:
            hasCompanyAlias = Boolean(urlValue);
            if (hasCompanyAlias) {
              localStorage.setItem(LS_COMPANY_ALIAS, urlValue);
              blacklist.push(urlValue);
              setUpPasswordPolicy2();
            }
            break;
        }
      }
    });
    const hasAllRequiredParams = hasCompanyAlias && hasUsername && hasResetCode;
    setIsLinkConfigured(hasAllRequiredParams);
    setPasswordBlackList([...passwordBlackList2, ...blacklist]);
    return () => setResettingPasswordError2(null);
  }, []);
  React28.useEffect(() => {
    if (!ready) {
      return;
    }
    if (!isLinkConfigured) {
      setResettingPasswordError2("CodeMismatchException" /* CodeMismatchException */);
    }
  }, [ready, isLinkConfigured]);
  const {
    isButtonDisabled,
    renderConfirmPassword,
    renderNewPassword,
    setNewPasswordError,
    newPassword
  } = usePasswordValidators_default({
    loading: resettingPassword,
    // TODO: This may not be needed, but was something that was inherited from past password component code. It may be useful
    // when we start targeting more screen sizes.
    // displaySize: displaySize,
    t,
    language,
    passwordPolicy,
    passwordBlackList: passwordBlackList2
  });
  const canSend = isLinkConfigured && !isButtonDisabled;
  const onSubmit = React28.useCallback(() => {
    if (canSend) {
      resetPassword2(userName, resetCode, newPassword);
    }
  }, [resetPassword2, canSend]);
  return <Form8 htmlId="reset-password-form" preventDefault={true} onSubmit={onSubmit} className="login-form">
    <Heading7 htmlId="reset-password-heading" level={2} className="reset-password-title">{t("auth.createNewPasswordTitle")}</Heading7>
    <PasswordHelpText passwordPolicy={passwordPolicy} />
    {renderNewPassword()}
    {renderConfirmPassword()}
    <div id="buttons-container" className="app-login-submit vai-margin-top-m">
      <Link5 id="return-to-login-link" to={routes.login.url}>{t("general.back")}</Link5>
      <Button14 htmlId="reset-password" id="reset-password" disabled={!canSend} type="submit">{resettingPassword ? <CenteredSpinner_default htmlId="reset-password-spinner" className="" /> : t("general.save")}</Button14>
    </div>
  </Form8>;
}, "ResetPassword");
var ResetPassword_default = ResetPassword;

// ../vlncc-frontend/src/components/auth/ResetPasswordConfirmation.tsx
import { Heading as Heading8, Button as Button15, ButtonType as ButtonType13 } from "@vaisala-rockhopper/components";
import "./reset-password-confirmation.scss";
import { useNavigate as useNavigate6 } from "react-router-dom";
import { useTranslation as useTranslation30 } from "react-i18next";
var ResetPasswordConfirmation = /* @__PURE__ */ __name(() => {
  const navigate = useNavigate6();
  const { t } = useTranslation30();
  const goBack = /* @__PURE__ */ __name(() => {
    navigate(routes.login.url);
  }, "goBack");
  return <div>
    <Heading8 id="reset-password-confirmation-help-heading" level={2}>{t("auth.checkEmailTitle")}</Heading8>
    <p id="reset-password-confirmation-help-check-email-body" className="reset-password-confirmation-help">{t("auth.checkEmailBodyText", { appName: APP_NAME_FULL })}</p>
    <p
      id="reset-password-confirmation-help-check-email-warning"
      className="reset-password-confirmation-help vai-margin-top-m"
    >{t("auth.checkEmailWarning")}</p>
    <Button15
      id="reset-password-confirmation-button-back"
      buttonType={ButtonType13.Link}
      className="vai-margin-top-m"
      htmlId="reset-password-confirmation-button-back"
      onClick={goBack}
    >{t("general.back")}</Button15>
  </div>;
}, "ResetPasswordConfirmation");
var ResetPasswordConfirmation_default = ResetPasswordConfirmation;

// ../vlncc-frontend/src/components/auth/LoginForm.tsx
import * as React29 from "react";
import validator6 from "validator";
import { Button as Button16, Form as Form9, Heading as Heading9, InputField as InputField6, PasswordInput as PasswordInput3, Label as Label4, Size as Size26 } from "@vaisala-rockhopper/components";
import { Link as Link6 } from "react-router-dom";
import { useTranslation as useTranslation31 } from "react-i18next";
var LoginForm = /* @__PURE__ */ __name(({ loading, sendResetCodeInit: sendResetCodeInit2, onLogin }) => {
  const { t } = useTranslation31();
  const [username, setUsername] = React29.useState("");
  const [password, setPassword] = React29.useState("");
  const [companyName, setCompanyName] = React29.useState(getConstantFromLocalStorage(LS_COMPANY_ALIAS) || "");
  const [usernameError, setUsernameError] = React29.useState(false);
  const [companyError, setCompanyError] = React29.useState(false);
  const [passwordError, setPasswordError] = React29.useState(false);
  const onChange = /* @__PURE__ */ __name((e) => {
    const { value, name } = e.currentTarget;
    if (name === "username") {
      setUsername(value);
      value.length > USERNAME_MAX_CHARACTERS_LENGTH ? setUsernameError(true) : setUsernameError(false);
    } else if (name === "password") {
      setPassword(value);
      value.length > PASSWORD_MAX_LENGTH ? setPasswordError(true) : setPasswordError(false);
    } else if (name === "companyName") {
      setCompanyName(value);
      value.length > COMPANY_NAME_MAX_CHARACTERS_LENGTH ? setCompanyError(true) : setCompanyError(false);
    }
  }, "onChange");
  const onLoginSubmit = /* @__PURE__ */ __name(() => {
    onLogin(validator6.trim(username).toLowerCase(), password, validator6.trim(companyName).toLowerCase());
  }, "onLoginSubmit");
  const isButtonDisabled = React29.useCallback(() => {
    return loading || !password || !username || !companyName || companyError || usernameError || passwordError;
  }, [loading, password, username, companyName, companyError, usernameError, passwordError]);
  return <Form9 htmlId="login-form" preventDefault={true} onSubmit={onLoginSubmit}>
    <Heading9 htmlId="login-title" level="2" className="vai-margin-top-none">{t("auth.login")}</Heading9>
    <Label4 id="login-company-id-label" className="vai-padding-right-none">
      {t("auth.companyID")}
      <InputField6
        htmlId="login-company-id"
        value={companyName}
        name="companyName"
        onChange={onChange}
        width={Size26.Container}
        autoComplete="companyName"
        className={getErrorClass(companyError ? t("auth.companyIDCharacterLimit") : "")}
      />
      <span id="login-company-id-error" className="input-error">{companyError ? t("auth.companyIDCharacterLimit") : ""}</span>
    </Label4>
    <Label4 id="login-username-label" className="vai-padding-right-none">
      {t("auth.username")}
      <InputField6
        htmlId="login-username"
        value={username}
        name="username"
        onChange={onChange}
        width={Size26.Container}
        autoComplete="username"
        className={getErrorClass(usernameError ? t("auth.usernameCharacterLimit") : "")}
      />
      <span id="login-username-error" className="input-error">{usernameError ? t("auth.usernameCharacterLimit") : ""}</span>
    </Label4>
    <Label4 id="login-password-label" className="vai-padding-right-none">
      {t("auth.password")}
      <PasswordInput3
        htmlId="login-password"
        value={password}
        name="password"
        onChange={onChange}
        width={Size26.Container}
        autoComplete="current-password"
      />
      <span id="login-password-error" className="input-error">{passwordError ? t("auth.passwordCharsLimit", { length: PASSWORD_MAX_LENGTH }) : ""}</span>
    </Label4>
    <div id="buttons-container" className="app-login-submit vai-margin-top-m">
      <Link6 id="login-forgot-password-link" to={routes.login.forgotPassword.url} onClick={sendResetCodeInit2}>{t("auth.forgotPassword")}</Link6>
      <Button16 id="login-submit" htmlId="login-submit" disabled={isButtonDisabled()} type="submit">{loading ? <CenteredSpinner_default htmlId="save-button-spinner" className="" /> : t("login")}</Button16>
    </div>
  </Form9>;
}, "LoginForm");
var LoginForm_default = LoginForm;

// ../vlncc-frontend/src/components/auth/PasswordReset.tsx
import { Heading as Heading10 } from "@vaisala-rockhopper/components";
import { Link as Link7 } from "react-router-dom";
import { useTranslation as useTranslation32 } from "react-i18next";
var PasswordReset = /* @__PURE__ */ __name(() => {
  const { t } = useTranslation32();
  return <div>
    <Heading10 id="password-rest-title" level={2} className="reset-password-title">{t("auth.passwordResetTitle")}</Heading10>
    <p id="password-reset-help" className="vai-margin-left-none">{t("auth.passwordResetHelp")}</p>
    <div id="password-reset-back-link-container" className="app-login-submit vai-margin-top-m"><Link7 id="password-reset-back-link" to={routes.login.url}>{t("general.back")}</Link7></div>
  </div>;
}, "PasswordReset");
var PasswordReset_default = PasswordReset;

// ../vlncc-frontend/src/components/auth/SetUpPassword.tsx
import * as React30 from "react";
import { Buffer as Buffer5 } from "buffer";
import { includes as includes3 } from "lodash";
import { Form as Form10, Heading as Heading11, Button as Button17 } from "@vaisala-rockhopper/components";
import { useLocation as useLocation9, useNavigate as useNavigate7 } from "react-router-dom";
import { useTranslation as useTranslation33 } from "react-i18next";
var SetUpPassword = /* @__PURE__ */ __name(({
  login: login2,
  setUpPassword: setUpPassword2,
  changeLanguage: changeLanguage2,
  language,
  passwordPolicyLength,
  passwordPolicyMaxLength,
  passwordPolicyNumberRequired,
  passwordPolicySpecialCharRequired,
  passwordPolicyUpperCaseRequired,
  passwordPolicyLowerCaseRequired,
  changingPasswordError,
  setUpPasswordPolicy: setUpPasswordPolicy2,
  isSignUp,
  firstLoginError,
  loading
}) => {
  const location = useLocation9();
  const navigate = useNavigate7();
  const { t } = useTranslation33();
  const [urlUsername, setUrlUsername] = React30.useState("");
  const [urlPassword, setUrlPassword] = React30.useState("");
  const passwordBlackList2 = [];
  const companyAlias = localStorage.getItem(LS_COMPANY_ALIAS);
  if (companyAlias)
    passwordBlackList2.push(companyAlias);
  const passwordPolicy = {
    minimumLength: passwordPolicyLength,
    maximumLength: passwordPolicyMaxLength,
    isNumberRequired: passwordPolicyNumberRequired,
    isSpecialCharRequired: passwordPolicySpecialCharRequired,
    isUpperCaseRequired: passwordPolicyUpperCaseRequired,
    isLowerCaseRequired: passwordPolicyLowerCaseRequired
  };
  const {
    isButtonDisabled,
    renderConfirmPassword,
    renderNewPassword,
    setNewPasswordError,
    newPassword
  } = usePasswordValidators_default({
    loading,
    // displaySize: displaySize,
    t,
    language,
    passwordPolicy,
    passwordBlackList: passwordBlackList2
  });
  React30.useEffect(() => {
    if (includes3(
      ["NotAuthorizedException" /* NotAuthorizedException */, "InvalidParameterException" /* InvalidParameterException */],
      changingPasswordError
    )) {
      setNewPasswordError("auth.invalidPassword");
    } else if (changingPasswordError === "LimitExceededException" /* LimitExceededException */) {
      setNewPasswordError("auth.limitExceeded");
    } else if (changingPasswordError === "InvalidPasswordException" /* InvalidPasswordException */) {
      setNewPasswordError("auth.doNotMeetCriteria");
    } else {
      setNewPasswordError("");
    }
  }, [changingPasswordError]);
  React30.useEffect(() => {
    if (!isSignUp) {
      let urlCompanyAlias = "";
      let urlUsernameParameter = "";
      let urlPasswordParameter = "";
      const decodedString = Buffer5.from(location.search, "base64").toString("ascii");
      const decodedArray = decodedString.split("&");
      let userParameters = [];
      decodedArray.map((param) => {
        userParameters = param.split("=");
        if (userParameters[0] === "username") {
          urlUsernameParameter = decodeURI2(userParameters[1]);
          setUrlUsername(urlUsernameParameter);
          passwordBlackList2.push(urlUsernameParameter);
        }
        if (userParameters[0] === "password") {
          urlPasswordParameter = decodeURI2(userParameters[1]);
          setUrlPassword(urlPasswordParameter);
        }
        if (userParameters[0] === LS_LOCALE) {
          changeLanguage2(decodeURI2(userParameters[1]));
        }
        if (userParameters[0] === LS_COMPANY_ALIAS) {
          urlCompanyAlias = decodeURI2(userParameters[1]);
          localStorage.setItem(LS_COMPANY_ALIAS, urlCompanyAlias);
          passwordBlackList2.push(urlCompanyAlias);
          setUpPasswordPolicy2();
        }
      });
      login2(urlUsernameParameter, urlPasswordParameter, urlCompanyAlias, true);
    }
  }, []);
  const onChangePassword = /* @__PURE__ */ __name(() => {
    setUpPassword2(urlUsername, urlPassword, newPassword);
  }, "onChangePassword");
  if (firstLoginError === 3 /* firstLoginInvalidCredentialError */) {
    navigate(routes.login.url);
  }
  let content = <CenteredSpinner_default style={{ marginLeft: "-17px" }} htmlId="setup-password-spinner" className="vai-padding-m" />;
  if (isSignUp) {
    content = <Form10 htmlId="setup-password-form">
      <Heading11 htmlId="setup-password-label" level={2}>{t("signup.dialogTitle")}</Heading11>
      <PasswordHelpText passwordPolicy={passwordPolicy} />
      {renderNewPassword()}
      {renderConfirmPassword()}
      <div id="buttons-container" className="vai-margin-top-m flex-end"><Button17
        disabled={isButtonDisabled}
        id="setup-password-next-button"
        htmlId="setup-password-next-button"
        onClick={onChangePassword}
      >{loading ? <CenteredSpinner_default htmlId="save-button-spinner" className="" /> : t("auth.next")}</Button17></div>
    </Form10>;
  }
  return <div id="setup-password-wrapper">{content}</div>;
}, "SetUpPassword");
var SetUpPassword_default = SetUpPassword;

// ../vlncc-frontend/src/components/auth/SetUpMFA.tsx
import * as React31 from "react";
import { Form as Form11, Heading as Heading12, InputField as InputField7, Label as Label5, Size as Size27, Button as Button18, ButtonType as ButtonType14, Flex as Flex18 } from "@vaisala-rockhopper/components";
import { useNavigate as useNavigate8 } from "react-router-dom";
import { useTranslation as useTranslation34 } from "react-i18next";
import "./setup-mfa.scss";
var SetUpMFA = /* @__PURE__ */ __name(({
  setUpMFA: setUpMFA2,
  resendMFA: resendMFA2,
  setAuthError: setAuthError2,
  MFABackToLogin: MFABackToLogin2,
  error,
  loading
}) => {
  const { t } = useTranslation34();
  const navigate = useNavigate8();
  const [mfa, setMfa] = React31.useState("");
  React31.useEffect(() => {
    const browserBackCb = /* @__PURE__ */ __name(() => MFABackToLogin2(), "browserBackCb");
    window.addEventListener("popstate", browserBackCb);
    return () => {
      window.removeEventListener("popstate", browserBackCb);
    };
  }, []);
  const onSubmitMFA = /* @__PURE__ */ __name(() => {
    if (canSend()) {
      setUpMFA2(mfa);
    }
  }, "onSubmitMFA");
  const goBack = /* @__PURE__ */ __name(() => {
    navigate(routes.login.url);
    MFABackToLogin2();
  }, "goBack");
  const canSend = React31.useCallback(() => {
    return mfa.length === MFA_LENGTH;
  }, [mfa]);
  const onMFAChange = /* @__PURE__ */ __name((event) => {
    const { value } = event.currentTarget;
    error != null && setAuthError2(void 0);
    const re = /^[0-9\b]+$/;
    if (value === "" || re.test(value)) {
      setMfa(value);
    }
  }, "onMFAChange");
  const onMFAResend = /* @__PURE__ */ __name(() => {
    resendMFA2();
  }, "onMFAResend");
  return <div id="mfa-wrapper"><Form11 htmlId="mfa-form">
    <Heading12 htmlId="mfa-title" level={2}>{t("mfa.title")}</Heading12>
    <p id="mfa-explanation" className="mfa-explanation">{t("mfa.explanation")}</p>
    <Label5 id="mfa-code-label">{t("mfa.inputLabel")}</Label5>
    <InputField7 required={true} htmlId="mfa-input-code" onChange={onMFAChange} width={Size27.Container} value={mfa} />
    <Flex18 className="vai-margin-top-m">
      <Flex18.Item alignSelf="flex-start" flexBasis="70%">
        <Button18
          id="mfa-button-resend"
          buttonType={ButtonType14.Link}
          htmlId="mfa-button-resend"
          onClick={onMFAResend}
        >{t("mfa.resendButton")}</Button18>
        <br />
        <Button18 id="mfa-button-back" buttonType={ButtonType14.Link} htmlId="mfa-button-back" onClick={goBack}>{t("general.back")}</Button18>
      </Flex18.Item>
      <Flex18.Item alignSelf="flex-start" flexBasis="30%"><Button18
        id="mfa-enter-button"
        className="vai-margin-top-l"
        htmlId="mfa-enter-button"
        onClick={onSubmitMFA}
        disabled={!canSend() || loading}
      >{loading ? <CenteredSpinner_default htmlId="save-button-spinner" className="" /> : t("mfa.enter")}</Button18></Flex18.Item>
    </Flex18>
  </Form11></div>;
}, "SetUpMFA");
var SetUpMFA_default = SetUpMFA;

// ../vlncc-frontend/src/components/auth/SetUpProfile.tsx
import * as React32 from "react";
import {
  Form as Form12,
  Heading as Heading13,
  InputField as InputField8,
  PasswordInput as PasswordInput4,
  Size as Size28,
  Button as Button19,
  Select as Select5,
  Label as Label6,
  RequiredAsterisk as RequiredAsterisk3,
  Flex as Flex19,
  FlexItem as FlexItem11
} from "@vaisala-rockhopper/components";
import validator7 from "validator";
import PhoneInput2 from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useTranslation as useTranslation35 } from "react-i18next";
import { Auth as Auth6 } from "aws-amplify";
import "./setup-profile.scss";
var SetUpProfile = /* @__PURE__ */ __name((props) => {
  const { t } = useTranslation35();
  const [saving, setSaving] = React32.useState(false);
  const { setUpProfile: setUpProfile2, changeLanguage: changeLanguage2, userName } = props;
  const getTimeZoneFromBrowser = /* @__PURE__ */ __name(() => {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  }, "getTimeZoneFromBrowser");
  const [firstName, setFirstName] = React32.useState("");
  const [firstNameEmptyError, setFirstNameEmptyError] = React32.useState(false);
  const [firstNameMaxLengthError, setFirstNameMaxLengthError] = React32.useState(false);
  const [lastName, setLastName] = React32.useState("");
  const [lastNameEmptyError, setLastNameEmptyError] = React32.useState(false);
  const [lastNameMaxLengthError, setLastNameMaxLengthError] = React32.useState(false);
  const [language, setLanguage] = React32.useState("en-US" /* en */);
  const [languageError, setLanguageError] = React32.useState(false);
  const [phoneNumber, setPhoneNumber] = React32.useState("");
  const [phoneNumberError, setPhoneNumberError] = React32.useState(false);
  const [pin, setPin] = React32.useState("");
  const [pinError, setPinError] = React32.useState(false);
  const [timeZone, setTimeZone] = React32.useState(getTimeZoneFromBrowser());
  const [timeZoneError, setTimeZoneError] = React32.useState(false);
  const [profilePictureFile, setProfilePictureFile] = React32.useState(null);
  React32.useEffect(() => {
    const setLanguageFromSession = /* @__PURE__ */ __name(async () => {
      try {
        const session = await Auth6.currentSession();
        const { locale } = session.getIdToken().payload;
        setLanguage(locale);
      } catch (exception) {
      }
    }, "setLanguageFromSession");
    setLanguageFromSession();
  }, []);
  const onFirstNameChange = /* @__PURE__ */ __name((event) => {
    setFirstNameEmptyError(false);
    setFirstNameMaxLengthError(false);
    setFirstName(event.target.value);
    const trimmedFirstName = validator7.trim(event.target.value);
    if (!trimmedFirstName) {
      setFirstNameEmptyError(true);
    }
    if (trimmedFirstName && trimmedFirstName.length > NAME_MAX_LENGTH) {
      setFirstNameMaxLengthError(true);
    }
  }, "onFirstNameChange");
  const onLastNameChange = /* @__PURE__ */ __name((event) => {
    setLastNameEmptyError(false);
    setLastNameMaxLengthError(false);
    setLastName(event.target.value);
    const trimmedLastName = validator7.trim(event.target.value);
    if (!trimmedLastName) {
      setLastNameEmptyError(true);
    }
    if (trimmedLastName && trimmedLastName.length > NAME_MAX_LENGTH) {
      setLastNameMaxLengthError(true);
    }
  }, "onLastNameChange");
  const onPhoneNumberChange = /* @__PURE__ */ __name((event) => {
    setPhoneNumberError(false);
    setPhoneNumber(event);
  }, "onPhoneNumberChange");
  const onTimeZoneChange = /* @__PURE__ */ __name((event) => {
    setTimeZoneError(false);
    setTimeZone(event);
    if (!timeZone) {
      setTimeZoneError(true);
    }
  }, "onTimeZoneChange");
  const onLanguageChange = /* @__PURE__ */ __name((event) => {
    setLanguageError(false);
    setLanguage(event);
    if (props.language !== event) {
      changeLanguage2(event);
    }
  }, "onLanguageChange");
  const onPinChange = /* @__PURE__ */ __name((event) => {
    setPinError(false);
    setPin(event.target.value);
    if (event.target.value && (!/^\d+$/.test(event.target.value) || event.target.value.length < PIN_MIN_LENGTH || event.target.value.length > PIN_MAX_LENGTH)) {
      setPinError(true);
    }
  }, "onPinChange");
  const onSetUpProfile = /* @__PURE__ */ __name(async () => {
    setSaving(true);
    let errorExist = false;
    const trimmedFirstName = validator7.trim(firstName);
    const trimmedLastName = validator7.trim(lastName);
    if (!trimmedFirstName) {
      setFirstNameEmptyError(true);
      errorExist = true;
    }
    if (trimmedFirstName && trimmedFirstName.length > NAME_MAX_LENGTH) {
      setFirstNameMaxLengthError(true);
      errorExist = true;
    }
    if (!trimmedLastName) {
      setLastNameEmptyError(true);
      errorExist = true;
    }
    if (trimmedLastName && trimmedLastName.length > NAME_MAX_LENGTH) {
      setLastNameMaxLengthError(true);
      errorExist = true;
    }
    const phone = checkPlusForPhoneNumber(phoneNumber);
    if (!phoneNumber || phoneNumber && !validator7.isMobilePhone(phone, "any")) {
      setPhoneNumberError(true);
      errorExist = true;
    }
    if (!language) {
      setLanguageError(true);
      errorExist = true;
    }
    if (!timeZone) {
      setTimeZoneError(true);
      errorExist = true;
    }
    if (pin && (!/^\d+$/.test(pin) || pin.length < PIN_MIN_LENGTH || pin.length > PIN_MAX_LENGTH)) {
      setPinError(true);
      errorExist = true;
    }
    if (!errorExist) {
      const userProfile = {
        first_name: trimmedFirstName,
        last_name: trimmedLastName,
        locale: language,
        tz: timeZone,
        phone: checkPlusForPhoneNumber(phoneNumber),
        pin,
        user_name: userName,
        picture: profilePictureFile
      };
      await setUpProfile2(userProfile);
    }
    setSaving(false);
  }, "onSetUpProfile");
  const isDisabled = saving || !phoneNumber || !firstName || !lastName || !language || !timeZone;
  const getFirstNameError = /* @__PURE__ */ __name(() => {
    if (firstNameEmptyError) {
      return t("signup.firstNameCannotBeEmpty");
    } else if (firstNameMaxLengthError) {
      return t("signup.characterLengthError");
    } else {
      return "";
    }
  }, "getFirstNameError");
  const getLastNameError = /* @__PURE__ */ __name(() => {
    if (lastNameEmptyError) {
      return t("signup.lastNameCannotBeEmpty");
    } else if (lastNameMaxLengthError) {
      return t("signup.characterLengthError");
    } else {
      return "";
    }
  }, "getLastNameError");
  return <Form12 mode="wide" htmlId="signup-setup-profile-form">
    <Heading13 level={2}>{t("signup.setupccounttitle")}</Heading13>
    <PictureUploader_default
      title={t("signup.addProfilePicture")}
      disabled={false}
      htmlId="signup-image-uploader"
      pictureUrl=""
      onChange={(file) => {
        setProfilePictureFile(file);
      }}
    />
    <Form12.Item
      component={InputField8}
      label={t("signup.firstName")}
      required={true}
      htmlId="signup-first-name"
      width={Size28.M}
      value={firstName}
      onChange={onFirstNameChange}
      className={getErrorClass(getFirstNameError())}
      errors={getFirstNameError()}
    />
    <Form12.Item
      label={t("signup.lastName")}
      component={InputField8}
      required={true}
      htmlId="signup-last-name"
      width={Size28.M}
      value={lastName}
      onChange={onLastNameChange}
      className={getErrorClass(getLastNameError())}
      errors={getLastNameError()}
    />
    <Form12.Item
      label={t("signup.language")}
      component={Select5}
      showSearch
      filterOption={true}
      optionFilterProp="title"
      required={true}
      htmlId="signup-language"
      defaultValue={t("general.selectEllipsis")}
      value={language}
      width={Size28.M}
      onChange={onLanguageChange}
      className={getErrorClass(languageError ? t("signup.languageCannotBeEmpty") : "")}
    >{Object.values(Languages).map((value) => {
      const langText = LANGUAGE_TEXT[value];
      return <Select5.Option
        id={`signup-language-list-${value}`}
        key={value}
        title={langText}
        value={value}
        data-testid="language-option"
      >{langText}</Select5.Option>;
    })}</Form12.Item>
    <span id="signup-language-error" className="input-error">{languageError ? t("signup.languageCannotBeEmpty") : ""}</span>
    <Form12.Item
      label={t("signup.timeZone")}
      component={Select5}
      showSearch
      required={true}
      htmlId="signup-time-zone"
      defaultValue={t("general.selectEllipsis")}
      value={timeZone}
      width={Size28.M}
      onChange={onTimeZoneChange}
      className={getErrorClass(timeZoneError ? t("signup.timeZoneCannotBeEmpty") : "")}
    >{timeZones_default.map((option) => <Select5.Option
      id={`signup-time-zone-list-${option.value}`}
      key={`${option.value}`}
      title={option.label}
      value={option.value}
    >{option.label}</Select5.Option>)}</Form12.Item>
    <span id="signup-time-zone-error" className="input-error">{timeZoneError ? t("signup.timeZoneCannotBeEmpty") : ""}</span>
    <Label6 id="phone-input-label" className="vai-padding-right-none edit-prfile-flex">
      <span className="edit-profile-asterisk"><RequiredAsterisk3 /></span>
      <span id="signup-phone-number-label" className="edit-profile-phone-number-label">{t("signup.phoneNumber")}</span>
      <PhoneInput2
        containerClass="signup-phone-input-container"
        country={DEFAULTCOUNTRYCODE}
        value={phoneNumber}
        onChange={onPhoneNumberChange}
        disableDropdown={true}
        inputClass="signup-phone-input"
      />
    </Label6>
    <div id="signup-phone-number-container" className="signup-setup-profile-phone-error vai-form-error">{phoneNumberError ? t("signup.phoneNumberIsNotValid") : ""}</div>
    <Form12.Item
      label={<Flex19>
        <FlexItem11 id="signup-pin-label" flexGrow={1}>{t("signup.pin")}</FlexItem11>
        <FlexItem11><Infotip_default htmlId="signup-setup-profile-pin-infotip" iconProps={{ className: "vai-margin-horizontal-xs" }}>{t("infotip.pin")}</Infotip_default></FlexItem11>
      </Flex19>}
      htmlId="signup-pin"
      errors={pinError ? t("signup.invalidPin") : ""}
    ><PasswordInput4
      htmlId="signup-pin-input"
      value={pin}
      name="pin"
      autoComplete="new-password"
      onChange={onPinChange}
      width={Size28.M}
      className={getErrorClass(pinError ? t("signup.invalidPin") : "")}
    /></Form12.Item>
    <div className="vai-margin-top-m flex-end"><Button19
      id="signup-finish-button"
      className="vai-space-inline-s"
      htmlId="signup-finish-button"
      type="submit"
      onClick={onSetUpProfile}
      disabled={isDisabled}
    >{saving ? <CenteredSpinner_default htmlId="signup-finish-button-spinner" className="" /> : t("signup.finishBtn")}</Button19></div>
  </Form12>;
}, "SetUpProfile");
var SetUpProfile_default = SetUpProfile;

// ../vlncc-frontend/src/containers/Profile.tsx
import * as React46 from "react";
import { connect as connect8 } from "react-redux";

// ../vlncc-frontend/src/components/profile/index.tsx
import { Routes as Routes3, Route as Route3, Navigate as Navigate2 } from "react-router-dom";

// ../vlncc-frontend/src/components/profile/User.tsx
import * as React41 from "react";
import cx4 from "classnames";
import {
  Paper as Paper3,
  Table as Table5,
  TableStyle as TableStyle4,
  TableHead,
  TableBody as TableBody5,
  MenuButton as MenuButton2,
  MenuButtonToggle as MenuButtonToggle2,
  MenuButtonList as MenuButtonList2,
  MenuButtonListItem as MenuButtonListItem2,
  TableRow as TableRow5,
  TableCell as TableCell5,
  Icon as Icon21,
  IconName as IconName13,
  InputField as InputField12,
  Size as Size38,
  Button as Button26,
  ButtonType as ButtonType21,
  Flex as Flex23,
  FlexItem as FlexItem14,
  Toggle as Toggle2,
  Separator as Separator8,
  Checkbox as Checkbox5
} from "@vaisala-rockhopper/components";
import { VaiSpacing as VaiSpacing2, VaiIcon as VaiIcon14 } from "@vaisala-rockhopper/design-tokens";

// ../vlncc-frontend/src/components/profile/CreateGroupsDialog/index.tsx
import * as React33 from "react";
import validator8 from "validator";
import { IconName as IconName9, Size as Size29, InputField as InputField9, Form as Form13, Label as Label7, Button as Button20, ButtonType as ButtonType15, TextArea as TextArea2 } from "@vaisala-rockhopper/components";
import { useTranslation as useTranslation36 } from "react-i18next";
var CreateGroupsDialog = /* @__PURE__ */ __name((props) => {
  const { t } = useTranslation36();
  const [groupName, setGroupName] = React33.useState("");
  const [groupNameError, setGroupNameError] = React33.useState("");
  const [description, setDescription] = React33.useState("");
  const [descriptionError, setDescriptionError] = React33.useState("");
  const dispatch = useAppDispatch();
  const onChange = /* @__PURE__ */ __name((e) => {
    const { value, name } = e.currentTarget;
    if (name === "groupName") {
      setGroupName(value);
      value.length > GROUP_NAME_MAX_CHARACHTERS_LENGTH ? setGroupNameError(t("profile.createGroupsMaxLengthError", { charLen: GROUP_NAME_MAX_CHARACHTERS_LENGTH })) : setGroupNameError("");
    } else if (name === "description") {
      setDescription(value);
      value.length > GROUP_DESCRIPTION_MAX_CHARACHTERS_LENGTH ? setDescriptionError(
        t("profile.createGroupsMaxLengthError", { charLen: GROUP_DESCRIPTION_MAX_CHARACHTERS_LENGTH })
      ) : setDescriptionError("");
    }
  }, "onChange");
  const onDismiss = /* @__PURE__ */ __name(() => {
    dispatch(hideDialog());
  }, "onDismiss");
  const onCreateGroup = /* @__PURE__ */ __name(() => {
    let errorExist = false;
    const trimmedGroupName = validator8.trim(groupName);
    const trimmedDescription = validator8.trim(description);
    setGroupNameError("");
    setDescriptionError("");
    if (!trimmedGroupName) {
      errorExist = true;
      setGroupNameError(t("profile.groupNameEmptyError"));
    } else if (trimmedGroupName.length > GROUP_NAME_MAX_CHARACHTERS_LENGTH) {
      errorExist = true;
      setGroupNameError(t("profile.createGroupsMaxLengthError"));
    } else if (props.groups.map((a) => a.group_name).includes(trimmedGroupName)) {
      errorExist = true;
      setGroupNameError(t("profile.groupNameDuplicateError"));
    } else if (trimmedGroupName.length < GROUP_NAME_MIN_CHARACHTERS_LENGTH) {
      errorExist = true;
      setGroupNameError(t("profile.createGroupsMinLengthError", { charLen: GROUP_NAME_MIN_CHARACHTERS_LENGTH }));
    } else if (trimmedDescription.length > GROUP_DESCRIPTION_MAX_CHARACHTERS_LENGTH) {
      errorExist = true;
    }
    if (!errorExist) {
      const newGroup = {
        group_name: trimmedGroupName,
        description: trimmedDescription
      };
      props.createGroups(newGroup);
      dispatch(hideDialog());
    }
  }, "onCreateGroup");
  const modalButtons = <>
    <Button20
      id="create-groups-confirm"
      htmlId="create-groups-confirm"
      disabled={groupName.length === 0 || !!groupNameError.length}
      onClick={onCreateGroup}
    >{t("profile.createGroupsConfirmation")}</Button20>
    <Button20
      id="create-groups-cancel"
      htmlId="create-groups-cancel"
      onClick={onDismiss}
      buttonType={ButtonType15.Secondary}
    >{t("profile.cancel")}</Button20>
  </>;
  return <ModalContainer
    id="create-groups-dialog"
    isOpen
    htmlId="create-groups-dialog"
    showCloseIcon={true}
    onDismiss={onDismiss}
    width={Size29.S}
    dismissOnOverlayClick={false}
    buttons={modalButtons}
    iconName={IconName9.UserGroup}
    title="profile.createGroupsTitle"
  ><Form13 id="create-groups-form">
    <Label7 id="create-groups-name-label">
      {t("profile.creaGroupsName")}
      <InputField9
        required={true}
        htmlId="create-groups-name"
        width={Size29.Container}
        value={groupName}
        name="groupName"
        onChange={onChange}
        className={getErrorClass(groupNameError)}
      />
      <span className="input-error">{groupNameError}</span>
    </Label7>
    <Label7 id="create-groups-description-label">
      {t("profile.createGroupsDescription")}
      <TextArea2
        htmlId="create-groups-description"
        width={Size29.Container}
        value={description}
        name="description"
        onChange={onChange}
        rows={2}
        className={getErrorClass(descriptionError)}
      />
      <span className="input-error">{descriptionError}</span>
    </Label7>
  </Form13></ModalContainer>;
}, "CreateGroupsDialog");
var CreateGroupsDialog_default = CreateGroupsDialog;

// ../vlncc-frontend/src/components/profile/UserActivationDialog/index.tsx
import "./user-activation-dialog.scss";
import { Size as Size30, Button as Button21, ButtonType as ButtonType16, BodyText as BodyText8 } from "@vaisala-rockhopper/components";
import { useTranslation as useTranslation37 } from "react-i18next";
var UserActivationDialog = /* @__PURE__ */ __name((props) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation37();
  const onDismiss = /* @__PURE__ */ __name(() => dispatch(hideDialog()), "onDismiss");
  const confirmAlertModal = /* @__PURE__ */ __name(() => {
    props.toggleUserActivation(props.userActive, props.userProfile.user_name);
    onDismiss();
  }, "confirmAlertModal");
  const alertModalVisibleMsg = props.userActive ? t("profile.activateUserMsg", {
    name: props.userProfile.first_name || props.userProfile.last_name ? props.userProfile.first_name + " " + props.userProfile.last_name : props.userProfile.user_name
  }) : t("profile.deactivateUserMsg", {
    name: props.userProfile.first_name || props.userProfile.last_name ? props.userProfile.first_name + " " + props.userProfile.last_name : props.userProfile.user_name,
    user: props.userProfile.user_name
  });
  const modalButtons = <>
    <Button21
      id="user-activation-confirm"
      htmlId="user-activation-confirm"
      onClick={confirmAlertModal}
      buttonType={ButtonType16.Secondary}
    >{props.userActive ? t("profile.activateUserBtn") : t("profile.deactivateUserBtn")}</Button21>
    <Button21 id="user-activation-cancel" htmlId="user-activation-cancel" onClick={onDismiss}>{t("profile.cancel")}</Button21>
  </>;
  return <ModalContainer
    id="user-activation-dialog"
    isOpen
    htmlId="user-activation-dialog"
    showCloseIcon={true}
    onDismiss={onDismiss}
    width={Size30.S}
    dismissOnOverlayClick={false}
    role="alert-dialog"
    title={props.userActive ? "profile.activateUserHeader" : "profile.deactivateUserHeader"}
    buttons={modalButtons}
  ><BodyText8 id="user-activation-text" className="activate-user-body">{alertModalVisibleMsg}</BodyText8></ModalContainer>;
}, "UserActivationDialog");
var UserActivationDialog_default = UserActivationDialog;

// ../vlncc-frontend/src/components/profile/InviteUsersDialog/index.tsx
import * as React37 from "react";
import {
  InputField as InputField10,
  Size as Size33,
  Button as Button23,
  Select as Select6,
  ButtonType as ButtonType18,
  Icon as Icon18,
  IconName as IconName10,
  Flex as Flex20,
  Table as Table2,
  TableStyle as TableStyle2,
  TableBody as TableBody2,
  TableRow as TableRow2,
  TableCell as TableCell2,
  Separator as Separator7,
  Checkbox,
  FlexItem as FlexItem12
} from "@vaisala-rockhopper/components";

// ../vlncc-frontend/src/components/profile/UserRejectionDialog/index.tsx
import * as React36 from "react";
import "./user-rejection-dialog.scss";
import { Size as Size32, Button as Button22, ButtonType as ButtonType17, BodyText as BodyText9 } from "@vaisala-rockhopper/components";
import { useTranslation as useTranslation38 } from "react-i18next";

// ../vlncc-frontend/src/hooks/useEmails.tsx
import React35 from "react";

// ../vlncc-frontend/src/components/Utils/TagInput/TagInput.tsx
import { Icon as Icon17, Size as Size31 } from "@vaisala-rockhopper/components";
import { VaiIcon as VaiIcon13 } from "@vaisala-rockhopper/design-tokens";
import * as React34 from "react";
import validator9 from "validator";
import "./tag-input.scss";
var TagInput = /* @__PURE__ */ __name((props) => {
  const [tags, setTags] = React34.useState([]);
  const { getId } = useHtmlId_default({ htmlId: props.htmlId });
  React34.useEffect(() => {
    const temp = [];
    const validTags = [];
    props.tags.map((tag) => {
      const valid = props.validation === "email" ? validator9.isEmail(tag) : true;
      if (valid)
        validTags.push(tag);
      temp.push({ name: tag, valid });
    });
    props.onTagsUpdated?.(validTags);
    setTags(temp);
  }, [props.tags]);
  const handleBlur = /* @__PURE__ */ __name((event) => {
    const { value } = event.target;
    const valid = props.validation === "email" ? validator9.isEmail(value) : true;
    if (valid) {
      props.addTagData(event);
    }
  }, "handleBlur");
  return <div id={getId("container")} className="tag-input">
    <ul id={getId("ul")} className="tags">{tags.map((tag, index) => <li
      data-ta={TEST_IDS.tag_input_list_item}
      key={index}
      id={getId(`tag-${tag.name}`)}
      className={tag.valid ? "tag valid-tag" : "tag invalid-tag"}
    >
      <span id={getId(`tag-title-${tag.name}`)} className="tag-title">{tag.name}</span>
      <Icon17
        id={getId(`tag-close-icon-${tag.name}`)}
        className="tag-close-icon"
        onClick={() => props.removeTagData(index)}
        name={VaiIcon13.Cross}
        size={Size31.XS}
      />
    </li>)}</ul>
    {
      /* eslint-disable-next-line enforce-ids-in-jsx/missing-ids */
    }
    <input
      id={props.htmlId}
      data-ta={TEST_IDS.tag_input_field}
      type="text"
      onKeyUp={(event) => event.key === "Enter" || event.key === "," || event.key === " " || event.key === ";" ? props.addTagData(event) : null}
      onBlur={handleBlur}
      placeholder={tags.length > 0 ? "" : props.placeholder}
    />
  </div>;
}, "TagInput");
var TagInput_default = TagInput;

// ../vlncc-frontend/src/hooks/useEmails.tsx
var useEmails = /* @__PURE__ */ __name((props) => {
  const [emails, setEmails] = React35.useState(props ? props.emails || [] : []);
  const [validEmails, setValidEmails] = React35.useState(props ? props.emails || [] : []);
  const nextItemTriggers = [",", ";", " "];
  const addTagData = /* @__PURE__ */ __name((event) => {
    const text = event.target.value;
    if (isTriggerInValue(text)) {
      const textArray = text.replace(/[;,]/g, " ").split(" ") || [];
      const updatedTextArray = textArray.map((item) => {
        if (item !== "" && item !== "," && item !== ";") {
          return item.replace(/[;,]/g, " ");
        }
      });
      handleLoopTesting(updatedTextArray, 0, []);
      event.target.value = "";
    } else {
      findEmailExistence(event);
    }
  }, "addTagData");
  function handleLoopTesting(data, index, mutableArray) {
    if (index === data.length) {
      return setEmails([...emails, ...mutableArray]);
    } else {
      if (data[index]) {
        const emailExists = emails.find((email) => email.toLowerCase() === data[index].toLowerCase());
        if (!emailExists) {
          mutableArray.push(data[index]);
        }
      }
      return handleLoopTesting(data, index + 1, mutableArray);
    }
  }
  __name(handleLoopTesting, "handleLoopTesting");
  const isTriggerInValue = /* @__PURE__ */ __name((value) => {
    return nextItemTriggers.some((el) => value.indexOf(el) > -1);
  }, "isTriggerInValue");
  const findEmailExistence = /* @__PURE__ */ __name((event) => {
    let userEmail = event.target.value;
    if (userEmail !== "") {
      if (isTriggerInValue(userEmail)) {
        userEmail = userEmail.substring(0, userEmail.length - 1);
      }
      const emailExists = emails.find((email) => email.toLowerCase() === userEmail.toLowerCase());
      if (!emailExists) {
        setEmails([...emails, userEmail]);
      }
      event.target.value = "";
    }
  }, "findEmailExistence");
  const removeTagData = /* @__PURE__ */ __name((indexToRemove) => {
    setEmails([...emails.filter((_, index) => index !== indexToRemove)]);
  }, "removeTagData");
  const onTagsUpdated = /* @__PURE__ */ __name((validTags) => {
    setValidEmails(validTags);
  }, "onTagsUpdated");
  const renderTagInput = /* @__PURE__ */ __name((inputProps) => {
    return <TagInput_default
      {...inputProps}
      tags={emails}
      onTagsUpdated={onTagsUpdated}
      addTagData={addTagData}
      removeTagData={removeTagData}
      validation="email"
    />;
  }, "renderTagInput");
  return {
    emails,
    setEmails,
    validEmails,
    renderTagInput,
    setValidEmails,
    addTagData,
    removeTagData,
    onTagsUpdated
  };
}, "useEmails");
var useEmails_default = useEmails;

// ../vlncc-frontend/src/components/profile/UserRejectionDialog/index.tsx
var UserRejectionDialog = /* @__PURE__ */ __name((props) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation38();
  const [saving, setSaving] = React36.useState(false);
  const { setEmails, validEmails, setValidEmails, renderTagInput } = useEmails_default({ emails: props.rejectedUsers });
  const handleInviteUsers = /* @__PURE__ */ __name(async () => {
    setSaving(true);
    const invitedUsers = [];
    props.rejectedUsers.map((email) => {
      const invitedUser = {
        user_name: email,
        locale: props.selectedLanguage,
        // TODO: Use timezone from the user's profile. It won't necessarily match that of the browser.
        tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
        group_ids: props.selectedGroupIds
      };
      invitedUsers.push(invitedUser);
    });
    const users = {
      users: invitedUsers
    };
    const rejectedUsers = await props.inviteUsers(users, INVITE_USER_FROM_USER);
    if (rejectedUsers.length === 0) {
      onDismiss();
    } else {
      const emailsToKeep = validEmails.filter((a) => rejectedUsers.includes(a));
      setEmails(emailsToKeep);
      setValidEmails(emailsToKeep);
    }
    setSaving(false);
  }, "handleInviteUsers");
  const onDismiss = /* @__PURE__ */ __name(() => dispatch(hideDialog()), "onDismiss");
  const modalButtons = <div id="user-rejection-dialog-buttons" className="vai-margin-top-m reject-user-button-container">
    <Button22
      id="user-rejection-confirm"
      htmlId="user-rejection-confirm"
      onClick={handleInviteUsers}
      disabled={validEmails.length === 0 || saving}
    >{t("inviteUsers.invite")}</Button22>
    <Button22
      id="user-rejection-cancel"
      htmlId="user-rejection-cancel"
      onClick={onDismiss}
      buttonType={ButtonType17.Secondary}
    >{t("inviteUsers.cancel")}</Button22>
  </div>;
  return <ModalContainer
    id="user-rejection-dialog"
    isOpen
    htmlId="user-rejection-dialog"
    showCloseIcon={true}
    onDismiss={onDismiss}
    width={Size32.S}
    dismissOnOverlayClick={false}
    title="inviteUsers.userRejectionTitle"
    buttons={modalButtons}
    role="alert-dialog"
  >
    <BodyText9 id="reject-user-body-text" className="reject-user-body">{t("inviteUsers.userRejectionMsg")}</BodyText9>
    {renderTagInput({ htmlId: "user-rejection-tag-input", placeholder: "" })}
  </ModalContainer>;
}, "UserRejectionDialog");
var UserRejectionDialog_default = UserRejectionDialog;

// ../vlncc-frontend/src/components/profile/InviteUsersDialog/index.tsx
import { useTranslation as useTranslation39 } from "react-i18next";
import "./invite-users.scss";
var InviteUsersDialog = /* @__PURE__ */ __name((props) => {
  const { t } = useTranslation39();
  const dispatch = useAppDispatch();
  const [searchCriteria, setSearchCriteria] = React37.useState("");
  const [foundGroups, setFoundGroups] = React37.useState([]);
  const [selectedLanguage, setSelectedLanguage] = React37.useState(props.locale);
  const [groupSelected, isGroupSelected] = React37.useState(false);
  const [saving, setSaving] = React37.useState(false);
  const { validEmails, renderTagInput } = useEmails_default();
  const onDismiss = /* @__PURE__ */ __name(() => dispatch(hideDialog()), "onDismiss");
  const initializeGroups = /* @__PURE__ */ __name(() => {
    const temp = [];
    props.groups.map((group) => {
      temp.push({ ...group, checked: false });
    });
    setFoundGroups(temp);
  }, "initializeGroups");
  React37.useEffect(() => {
    initializeGroups();
  }, [props.groups]);
  const onLanguageChange = /* @__PURE__ */ __name((value) => {
    setSelectedLanguage(value);
  }, "onLanguageChange");
  const filter = /* @__PURE__ */ __name((e) => {
    const keyword = e.currentTarget.value;
    if (keyword !== "") {
      const results = foundGroups.filter((group) => {
        return group.group_name.toLowerCase().includes(keyword.toLowerCase());
      });
      setFoundGroups(results);
    } else {
      initializeGroups();
    }
    setSearchCriteria(keyword);
  }, "filter");
  const checkBoxChangeHandler = /* @__PURE__ */ __name((index) => {
    const temp = [...foundGroups];
    temp[index].checked = !temp[index].checked;
    setFoundGroups(temp);
    isGroupSelected(false);
    temp.map((group) => {
      if (group.checked) {
        isGroupSelected(true);
        return;
      }
    });
  }, "checkBoxChangeHandler");
  const inviteUsers2 = /* @__PURE__ */ __name(async () => {
    setSaving(true);
    const selectedGroupIds = [];
    foundGroups.map((group) => {
      if (group.checked) {
        selectedGroupIds.push(group.group_id);
      }
    });
    const invitedUsers = [];
    validEmails.map((email) => {
      const invitedUser = {
        user_name: email,
        locale: selectedLanguage,
        tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
        group_ids: selectedGroupIds
      };
      invitedUsers.push(invitedUser);
    });
    const users = {
      users: invitedUsers
    };
    const rejectedUsers = await props.inviteUsers(users, INVITE_USER_FROM_USER);
    setSaving(false);
    if (rejectedUsers.length > 0) {
      dispatch(
        showDialog(
          <UserRejectionDialog_default
            inviteUsers={props.inviteUsers}
            rejectedUsers={rejectedUsers}
            selectedGroupIds={selectedGroupIds}
            selectedLanguage={selectedLanguage}
          />
        )
      );
    } else {
      onDismiss();
    }
  }, "inviteUsers");
  const modalButtons = <>
    <Button23
      id="invite-users-invite-button"
      className="vai-space-inline-s"
      htmlId="invite-users-invite-button"
      onClick={inviteUsers2}
      disabled={!groupSelected || validEmails.length === 0 || saving}
    >{t("inviteUsers.invite")}</Button23>
    <Button23
      id="invite-users-cancel-button"
      htmlId="invite-users-cancel-button"
      buttonType={ButtonType18.Secondary}
      onClick={onDismiss}
    >{t("inviteUsers.cancel")}</Button23>
  </>;
  return <ModalContainer
    id="invite-users-dialog"
    isOpen
    htmlId="invite-users-dialog"
    showCloseIcon={true}
    onDismiss={onDismiss}
    width={Size33.L}
    dismissOnOverlayClick={false}
    title="inviteUsers.inviteUsersTitle"
    iconName={IconName10.User}
    buttons={modalButtons}
  ><Flex20 id="invite-users-container" className="invite-users-container">
    <Flex20 flexDirection="column"><Flex20.Item id="invite-users-left-container" alignSelf="flex-start" flexBasis="100%">
      <span id="invite-users-email-field-help-text">{t("inviteUsers.enterEmail")}</span>
      <Flex20>
        <FlexItem12 className="margin-auto" flexGrow={1}><div id="invite-users-email-field-container" className="invite-users-email-invite-container">{renderTagInput({ htmlId: "invite-users-add-email-input", placeholder: t("inviteUsers.email") })}</div></FlexItem12>
        <FlexItem12><Infotip_default
          htmlId="invite-users-email-infotip"
          iconProps={{ size: Size33.L, className: "vai-margin-horizontal-xs", style: { marginTop: "16px" } }}
        >{t("infotip.emailInput")}</Infotip_default></FlexItem12>
      </Flex20>
      <div id="invite-users-language-field-container" style={{ marginTop: "auto" }}>
        <span id="invite-users-language-field-help-text">{t("inviteUsers.invitationLanguage")}</span>
        <Select6
          id="invite-users-language-select"
          htmlId="invite-users-language-select"
          placeholder={t("general.selectEllipsis")}
          showSearch
          filterOption={true}
          optionFilterProp="title"
          value={selectedLanguage}
          onChange={onLanguageChange}
          width={Size33.Container}
        >{Object.entries(LANGUAGE_TEXT).map(([key, value]) => <Select6.Option key={key} title={value} value={key} id={`invite-users-language-select-option-${key}`}>{value}</Select6.Option>)}</Select6>
      </div>
    </Flex20.Item></Flex20>
    <Flex20.Item
      id="invite-users-vertical-separator-container"
      alignSelf="center"
      flexBasis="2%"
      style={{ height: "100%" }}
    ><hr id="invite-users-vertical-separator" className="vertical-separator" /></Flex20.Item>
    <Flex20.Item
      id="invite-users-right-container"
      alignSelf="flex-end"
      flexBasis="49%"
      style={{ height: "100%", maxWidth: "50%" }}
    >
      <div id="invite-users-search-groups-container" className="invite-users-field-container">
        <span id="invite-users-search-groups-help-text">{t("inviteUsers.addUserToGroups")}</span>
        <br />
        <InputField10
          htmlId="invite-users-search-groups-input"
          name="search"
          className="vai-margin-top-m"
          width={Size33.Container}
          placeholder={t("general.search")}
          value={searchCriteria}
          onChange={filter}
          endIcon={<Icon18 htmlId="invite-users-search-groups-input-icon" name={IconName10.Search} size={Size33.M} />}
        />
      </div>
      <br />
      <div id="invite-users-groups-container" className="invite-users-groups-container"><Table2 htmlId="invite-users-groups-table" tableStyle={TableStyle2.Plain} className="user-and-group-table"><TableBody2>{foundGroups.map((row, index) => {
        const cbId = `invite-users-group-checkbox__${row.group_id}`;
        return <TableRow2 htmlId={`invite-users-group-tr__${row.group_id}`} key={`invite-user-group-tr__${index}`}><TableCell2 htmlId={`invite-users-group-td__${row.group_id}`} className="aqua-medium"><Checkbox
          id={cbId}
          htmlId={cbId}
          dataTa="checkbox"
          checked={row.checked}
          label={<span title={row.group_name} className="invite-user-group-label">{row.group_name}</span>}
          onChange={() => checkBoxChangeHandler(index)}
        /></TableCell2></TableRow2>;
      })}</TableBody2></Table2></div>
      <Separator7 />
    </Flex20.Item>
  </Flex20></ModalContainer>;
}, "InviteUsersDialog");
var InviteUsersDialog_default = InviteUsersDialog;

// ../vlncc-frontend/src/components/profile/UserDeletionDialog/index.tsx
import "./user-deletion-dialog.scss";
import { Size as Size34, Button as Button24, ButtonType as ButtonType19, BodyText as BodyText10 } from "@vaisala-rockhopper/components";
import { useTranslation as useTranslation40 } from "react-i18next";
var UserDeletionDialog = /* @__PURE__ */ __name((props) => {
  const { t } = useTranslation40();
  const dispatch = useAppDispatch();
  const onDismiss = /* @__PURE__ */ __name(() => dispatch(hideDialog()), "onDismiss");
  const deleteUser2 = /* @__PURE__ */ __name(() => {
    props.deleteUser(props.userName);
    onDismiss();
  }, "deleteUser");
  const modalButtons = <>
    <Button24 id="user-deletion-confirm" htmlId="user-deletion-confirm" onClick={deleteUser2}>{t("profile.delete")}</Button24>
    <Button24
      id="user-deletion-cancel"
      htmlId="user-deletion-cancel"
      onClick={onDismiss}
      buttonType={ButtonType19.Secondary}
    >{t("profile.cancel")}</Button24>
  </>;
  return <ModalContainer
    id="user-deletion-dialog"
    isOpen
    htmlId="user-deletion-dialog"
    onDismiss={onDismiss}
    width={Size34.S}
    showCloseIcon
    dismissOnOverlayClick={false}
    title="profile.userDeletionTitle"
    role="alert-dialog"
    buttons={modalButtons}
  ><BodyText10 id="delete-user-text" className="delete-user-body">{t("profile.userDeletionMsg", { userName: props.userName })}</BodyText10></ModalContainer>;
}, "UserDeletionDialog");
var UserDeletionDialog_default = UserDeletionDialog;

// ../vlncc-frontend/src/components/profile/userEffectiveRightsDialog/index.tsx
import { Size as Size36, Modal as Modal3, Heading as Heading14 } from "@vaisala-rockhopper/components";

// ../vlncc-frontend/src/components/profile/GroupsRights/index.tsx
import * as React39 from "react";
import { connect as connect7 } from "react-redux";
import { cloneDeep as cloneDeep2 } from "lodash";
import { Flex as Flex21 } from "@vaisala-rockhopper/components";

// ../vlncc-frontend/src/components/Utils/SiteTreeAccordion/index.tsx
import * as React38 from "react";
import { Checkbox as Checkbox2, Accordion as Accordion2, Icon as Icon19, IconName as IconName11, Size as Size35, Grid } from "@vaisala-rockhopper/components";
import "./site-tree-accordion.scss";
var SiteTreeAccordion = /* @__PURE__ */ __name((props) => {
  const { nodeId, nodeName, nodeType, nodeRights, nodeChildren, level, smallView = false, isReadonly, ...rest } = props;
  const hasRights = nodeRights && nodeRights[0] && nodeRights[0].value;
  const defaultExpandState = nodeType === "SITE" /* SITE */ && !isReadonly && { [nodeId]: true } || {};
  const [hasExpanded, setExpanded] = React38.useState(defaultExpandState);
  const handleAccordionChange = /* @__PURE__ */ __name((expanded, accordionKey) => {
    const rightsExpandedData = { [accordionKey]: expanded };
    setExpanded((prev) => {
      return { ...prev, ...rightsExpandedData };
    });
  }, "handleAccordionChange");
  React38.useEffect(() => {
    props.onExpanded?.(hasExpanded);
  }, [hasExpanded]);
  const handleCheckboxChange = /* @__PURE__ */ __name((right) => (e) => {
    right.value = e.target.checked ? 1 /* FULLY_CHECKED */ : 0 /* NOT_CHECKED */;
    rest.siteChangesCb({ level, nodeId, right });
  }, "handleCheckboxChange");
  const rightsCheckBox = /* @__PURE__ */ __name((cloneRights) => cloneRights.map((right) => {
    const { id, value } = right;
    const htmlId3 = `${id}--${nodeId}`;
    const isPartiallyCheck = value === 2 /* PARTIALLY_CHECKED */ ? "partially" : "";
    const isInvertedCheck = value === 3 /* INVERTED_CHECKED */ ? "inverted-check" : "";
    const checkBoxClasses = `group-rights-accordion-checkbox ${isPartiallyCheck}${isInvertedCheck}`;
    return <Grid.Col className="group-right--column-padding" key={id} xs={12} sm={12} md={4} lg={4} xl={4}><div data-ta={TEST_IDS.groups_rights_accordion_checkbox} className={checkBoxClasses}><Checkbox2
      id={htmlId3}
      onChange={handleCheckboxChange(right)}
      checked={value !== 0 /* NOT_CHECKED */ && value !== 2 /* PARTIALLY_CHECKED */}
      label={props.t(`profile.${id}`)}
      disabled={isReadonly}
    /></div></Grid.Col>;
  }), "rightsCheckBox");
  const showGroupRights = /* @__PURE__ */ __name(() => {
    if (nodeRights?.length > 0) {
      const cloneRights = nodeRights.reduce(
        (mem, value) => {
          if (value.key.includes("MANAGE" /* MANAGE */)) {
            mem[1].push(value);
          } else {
            mem[0].push(value);
          }
          return mem;
        },
        [[], []]
      );
      const [viewRights, manageRights] = cloneRights;
      viewRights.splice(0, 2);
      return viewRights?.length > 0 ? <Grid padding={Size35.M}><Grid.Row className="group-rights-row">
        <div className="view-rights">{rightsCheckBox(viewRights)}</div>
        {manageRights.length > 0 && <div className="manage-rights">{rightsCheckBox(manageRights)}</div>}
      </Grid.Row></Grid> : null;
    }
    return;
  }, "showGroupRights");
  const showChildrenNode = React38.useCallback(() => {
    if (nodeRights?.length > 0 && hasExpanded[nodeId]) {
      const sortedByPositionChildren = [...nodeChildren].sort((a, b) => a.position - b.position);
      return <div className="groups-rights-children-container-margin">{sortedByPositionChildren.map(
        (value, key) => value.type !== "LOC" /* LOC */ && <div key={value.node_id}><SiteTreeAccordion
          {...{
            isReadonly,
            nodeId: value.node_id,
            nodeName: value.name,
            nodeType: value.type,
            nodeRights: value.rights,
            nodeChildren: value?.children || [],
            level: `${level}_children_${key}`,
            ...rest
          }}
        /></div>
      )}</div>;
    }
    return;
  }, [nodeRights, hasExpanded, nodeId]);
  const getAccordionTitle = /* @__PURE__ */ __name(() => {
    let iconName = IconName11.MapMarkerHexagon;
    if (nodeType === "ZONE" /* ZONE */) {
      iconName = hasExpanded[nodeId] ? IconName11.FolderOpen : IconName11.Folder;
    }
    return <>
      <Icon19 name={iconName} size={Size35.M} />
      <span className="groups-rights--accordion-margin">{nodeName}</span>
    </>;
  }, "getAccordionTitle");
  const getAccordionSummary = /* @__PURE__ */ __name(() => {
    if (rest.deviceType === "MOBILE_PHONE" || nodeType === "SITE" /* SITE */) {
      return;
    }
    const hasGroupRights = hasRights === 0 ? false : true;
    return hasGroupRights ? <>
      <Icon19 name={IconName11.Check} size={Size35.M} />
      <span className="groups-rights--accordion-margin">{rest.t("groupsRights.hasRights")}</span>
    </> : <span className="groups-rights--accordion-margin">{rest.t("groupsRights.noRights")}</span>;
  }, "getAccordionSummary");
  const containerSize = `groups-rights-accordion ${smallView ? "groups-rights-accordion--small" : nodeType === "SITE" /* SITE */ ? "groups-rights-accordion--parent" : ""}`;
  const title = getAccordionTitle();
  return <div id="groups-rights-accordion-container" className={containerSize}>
    <Accordion2
      key={nodeId}
      accordionKey={nodeId}
      className="groups-rights-accordion-height"
      isExpanded={hasExpanded[nodeId]}
      onChangeAccordionExpanded={handleAccordionChange}
      title={<span data-ta={`${TEST_IDS.groups_rights_accordion_title_$NAME}${title}`}>{getAccordionTitle()}</span>}
      summary={getAccordionSummary()}
      dataTa={`${TEST_IDS.groups_rights_accordion_$NAME}${nodeName}`}
    >{showGroupRights()}</Accordion2>
    {showChildrenNode()}
  </div>;
}, "SiteTreeAccordion");
var SiteTreeAccordion_default = withDisplaySize(SiteTreeAccordion);

// ../vlncc-frontend/src/components/profile/GroupsRights/Infotip.tsx
import { Checkbox as Checkbox3, Table as Table3, TableBody as TableBody3, TableCell as TableCell3, TableRow as TableRow3 } from "@vaisala-rockhopper/components";
import { useTranslation as useTranslation41 } from "react-i18next";
var GroupRightsInfotip = /* @__PURE__ */ __name((props) => {
  const { t } = useTranslation41();
  const renderRightsTableHelp = /* @__PURE__ */ __name(() => {
    const values = [
      [
        <div key="dummy-checked" className="group-rights-accordion-checkbox"><Checkbox3 disabled={true} id="dummy-checked" checked={true} /></div>,
        t("infotip.rights.checked")
      ],
      [
        <div key="dummy-not-checked" className="group-rights-accordion-checkbox"><Checkbox3 disabled={true} id="dummy-not-checked" checked={false} /></div>,
        t("infotip.rights.notChecked")
      ],
      [
        <div key="dummy-partially-checked" className="group-rights-accordion-checkbox partially"><Checkbox3 id="dummy-partially-checked" disabled={true} checked={true} /></div>,
        t("infotip.rights.partial")
      ],
      [
        <div key="dummy-kinda-checked" className="group-rights-accordion-checkbox inverted-check"><Checkbox3 id="dummy-kinda-checked" disabled={true} checked={true} /></div>,
        t("infotip.rights.inverted")
      ]
    ];
    return values.map((value, index) => {
      const [cb, text] = value;
      return <TableRow3 key={`rights-checkbox--${index}`}>
        <TableCell3>{cb}</TableCell3>
        <TableCell3 className="vai-padding-vertical-s">{text}</TableCell3>
      </TableRow3>;
    });
  }, "renderRightsTableHelp");
  return <Infotip_default {...props}>
    <h4>{t("infotip.rights.heading")}</h4>
    <Table3><TableBody3>{renderRightsTableHelp()}</TableBody3></Table3>
    <p className="vai-margin-top-m vai-margin-horizontal-none">{t("infotip.rights.para1")}</p>
  </Infotip_default>;
}, "GroupRightsInfotip");
var Infotip_default2 = GroupRightsInfotip;

// ../vlncc-frontend/src/components/profile/GroupsRights/index.tsx
import "./groups-rights.scss";
var GroupsRights = /* @__PURE__ */ __name((props) => {
  const [groupSites, setGroupSites] = React39.useState([]);
  React39.useEffect(() => {
    if (props.site) {
      const cloneSite = cloneDeep2(props.site);
      const verifiedRights = validateNodesAccess(cloneSite, props.rights);
      let groupSiteRights = [verifiedRights];
      const iterate = /* @__PURE__ */ __name((node, path = "0") => {
        if (node.children?.length > 0) {
          node.children.forEach((zone, index) => {
            if (zone.type === "LOC" /* LOC */) {
              return;
            }
            const innerPath = `${path}_children_${index}`;
            const pathLen = innerPath.split("_").length;
            const THIRD_LEVEL_THRESHOLD = 5;
            if (pathLen >= THIRD_LEVEL_THRESHOLD) {
              zone.rights?.filter(
                (right) => !["VIEW_NON_INHERITABLE" /* VIEW_NON_INHERITABLE */, "HAS_RIGHT" /* HAS_RIGHT */].includes(right.key)
              ).forEach((right) => {
                const { value } = right;
                const splitPath = innerPath.split("_");
                if (value === 1 /* FULLY_CHECKED */) {
                  groupSiteRights = updateParentNodes(groupSiteRights, splitPath);
                }
              });
            }
            iterate(zone, innerPath);
          });
        }
      }, "iterate");
      const siteRights = groupSiteRights[0];
      iterate(siteRights);
      const bitwiseNumber = calculateNodeBitwiseNumber(siteRights);
      props.onRightsChange && props.onRightsChange(bitwiseNumber);
      props.onRightsInit && props.onRightsInit(bitwiseNumber);
      setGroupSites(groupSiteRights);
    }
  }, [props.rights]);
  React39.useEffect(() => {
    if (props.groupsRightSaveClicked) {
      const save = /* @__PURE__ */ __name(async () => {
        const updatedGroupDetails = {
          group_id: props.groupId,
          rights: groupSites.length > 0 ? calculateNodeBitwiseNumber(groupSites[0], true) : {},
          rights_global: props.rightsGlobal
        };
        await props.editGroup(updatedGroupDetails);
        props.onSave && props.onSave();
      }, "save");
      save();
    }
  }, [props.groupsRightSaveClicked]);
  const handleSiteChanges = /* @__PURE__ */ __name((selectedRight) => {
    const { id, value } = selectedRight.right;
    const path = selectedRight.level.split("_");
    const clonedGroupsites = cloneDeep2(groupSites);
    const updatedGroupSites = updateGroupSiteRights(clonedGroupsites, path, id, value);
    setGroupSites(updatedGroupSites);
    if (props.onRightsChange && updatedGroupSites.length > 0) {
      props.onRightsChange(calculateNodeBitwiseNumber(updatedGroupSites[0]));
    }
  }, "handleSiteChanges");
  return <div id="groups-rights-container">
    {!props.isReadonly && <Flex21 id="groups-rights-flex-container" justifyContent="space-between">
      <Flex21 flexDirection="column">
        <Flex21.Item id="groups-rights-container-name" className="vai-font-size-m groups-rights-title">{props.name}</Flex21.Item>
        <Flex21.Item id="groups-rights-flex-first"><div id="groups-rights-note" className="vai-font-size-xs vai-margin-bottom-m groups-rights-subtitle">{props.t("groupsRightsDialog.note")}</div></Flex21.Item>
      </Flex21>
      <Flex21.Item id="groups-rights-flex-second" alignSelf="center"><Infotip_default2
        htmlId="groups-rights-help-icon"
        popoverProps={{ className: "group-rights-infotip" }}
        iconProps={{ className: "vai-margin-vertical-s vai-margin-left-m" }}
      /></Flex21.Item>
    </Flex21>}
    {groupSites.length > 0 && groupSites.map((site, index) => {
      return <div key={site.parent_id}><SiteTreeAccordion_default
        {...{
          nodeName: site.name,
          nodeId: site.node_id,
          nodeType: "SITE" /* SITE */,
          nodeChildren: site.children,
          nodeRights: site.rights,
          siteRight: props.rights,
          t: props.t,
          level: `${index}`,
          isReadonly: props.isReadonly,
          siteChangesCb: handleSiteChanges,
          smallView: props.smallView,
          onExpanded: props.onExpanded
        }}
      /></div>;
    })}
  </div>;
}, "GroupsRights");
var mapDispatchToProps5 = /* @__PURE__ */ __name((dispatch) => ({
  editGroup: (group) => dispatch(profileDispatchActions.editGroup(group))
}), "mapDispatchToProps");
var GroupsRights_default = connect7(null, mapDispatchToProps5)(GroupsRights);

// ../vlncc-frontend/src/components/profile/userEffectiveRightsDialog/index.tsx
import "./user-effective-rights.scss";
import { useTranslation as useTranslation42 } from "react-i18next";
var UserEffectiveRightsDialog = /* @__PURE__ */ __name((props) => {
  const { t } = useTranslation42();
  const dispatch = useAppDispatch();
  const onDismiss = /* @__PURE__ */ __name(() => dispatch(hideDialog()), "onDismiss");
  return <Modal3
    id="user-effective-rights-dialog"
    isOpen
    showCloseIcon={true}
    onDismiss={onDismiss}
    width={Size36.L}
    dismissOnOverlayClick={false}
  >
    <Heading14 id="user-effective-rights-header" className="user-effective-rights-header vai-margin-top-none"><span id="user-effective-rights-summary">{t("profile.rightSummary", {
      userName: props.userProfile.first_name.length > 0 ? props.userProfile.first_name + " " + props.userProfile.last_name : props.userProfile.email
    })}</span></Heading14>
    <p id="user-effective-rights-name" className="user-effective-rights-name">{props.userProfile.first_name.length > 0 ? props.userProfile.first_name + " " + props.userProfile.last_name : props.userProfile.email}</p>
    <p id="user-effective-rights-description" className="user-effective-rights-description">{t("profile.rightSummaryMessage")}</p>
    <br />
    <GroupsRights_default isReadonly={true} t={t} site={props.site} rights={props.userProfile.rights} />
  </Modal3>;
}, "UserEffectiveRightsDialog");
var UserEffectiveRightsDialog_default = UserEffectiveRightsDialog;

// ../vlncc-frontend/src/components/profile/AddGroupsToUserDialog/index.tsx
import * as React40 from "react";
import validator10 from "validator";
import {
  InputField as InputField11,
  Size as Size37,
  Button as Button25,
  ButtonType as ButtonType20,
  Icon as Icon20,
  IconName as IconName12,
  Flex as Flex22,
  FlexItem as FlexItem13,
  Table as Table4,
  TableStyle as TableStyle3,
  TableBody as TableBody4,
  TableRow as TableRow4,
  TableCell as TableCell4,
  Checkbox as Checkbox4
} from "@vaisala-rockhopper/components";
import "./add-groups-to-user.scss";
import { useTranslation as useTranslation43 } from "react-i18next";
var AddGroupsToUserDialog = /* @__PURE__ */ __name((props) => {
  const { t } = useTranslation43();
  const dispatch = useAppDispatch();
  const [searchCriteria, setSearchCriteria] = React40.useState("");
  const [foundGroups, setFoundGroups] = React40.useState([]);
  const [saving, setSaving] = React40.useState(false);
  const [groupSelected, isGroupSelected] = React40.useState(false);
  const onDismiss = /* @__PURE__ */ __name(() => dispatch(hideDialog()), "onDismiss");
  const initializeGroups = /* @__PURE__ */ __name(() => {
    const temp = [];
    const existingGroups = [];
    props.userProfile.groups.forEach((group) => {
      existingGroups.push(group.group_id);
    });
    props.groups.forEach((group) => {
      if (!existingGroups.includes(group.group_id) && group.active) {
        temp.push({ ...group, checked: false });
      }
    });
    setFoundGroups(temp);
  }, "initializeGroups");
  React40.useEffect(() => {
    initializeGroups();
  }, [props.groups]);
  const filter = /* @__PURE__ */ __name((e) => {
    let keyword = e.currentTarget.value;
    keyword = validator10.ltrim(keyword);
    if (keyword !== "") {
      const results = foundGroups.filter((group) => {
        return group.group_name.toLowerCase().includes(keyword.toLowerCase());
      });
      setFoundGroups(results);
    } else {
      initializeGroups();
    }
    setSearchCriteria(keyword);
  }, "filter");
  const checkBoxChangeHandler = /* @__PURE__ */ __name((index) => {
    const temp = [...foundGroups];
    temp[index].checked = !temp[index].checked;
    setFoundGroups(temp);
    isGroupSelected(false);
    temp.forEach((group) => {
      if (group.checked) {
        isGroupSelected(true);
        return;
      }
    });
  }, "checkBoxChangeHandler");
  const getUserTitle = /* @__PURE__ */ __name(() => {
    return props.userProfile.first_name || props.userProfile.last_name ? props.userProfile.first_name + " " + props.userProfile.last_name : props.userProfile.user_name;
  }, "getUserTitle");
  const inviteUsers2 = /* @__PURE__ */ __name(async () => {
    setSaving(true);
    const name = getUserTitle();
    const invitedGroups = [];
    foundGroups.forEach((group) => {
      if (group.checked) {
        invitedGroups.push(group.group_id);
      }
    });
    const userLocale = getConstantFromLocalStorage(LS_LOCALE);
    const invitedUser = {
      user_name: props.userProfile.email,
      locale: userLocale,
      tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
      group_ids: invitedGroups
    };
    const users = {
      users: [invitedUser]
    };
    await props.inviteUsers(users, ADD_GROUP_TO_USER, name);
    onDismiss();
  }, "inviteUsers");
  let userListContent;
  if (foundGroups.length > 0) {
    userListContent = foundGroups.map((row, index) => <TableRow4
      data-ta={TEST_IDS.users_add_to_group_dialog_users_list_item}
      htmlId={`add-groups-to-users-row-${index}`}
      key={index}
    >
      <TableCell4 id={`add-groups-to-users-checkbox-${index}`} className="add-groups-to-users-checkbox aqua-medium"><Checkbox4
        id="add-groups-to-users"
        checked={row.checked}
        label=""
        onChange={() => checkBoxChangeHandler(index)}
      /></TableCell4>
      <TableCell4 id={`add-groups-to-users-profile-picture-cell-${index}`}><Flex22><FlexItem13
        id={`add-groups-to-users-profile-name-${index}`}
        className="vai-margin-bottom-s"
        alignSelf="flex-end"
        flexBasis="40%"
      >
        <p data-ta={TEST_IDS.users_add_to_group_dialog_users_list_item_group_name}>
          {" "}
          {row.group_name.trim()}
        </p>
        <p className="grey-medium">{row.description ? row.description.trim() : ""}</p>
      </FlexItem13></Flex22></TableCell4>
    </TableRow4>);
  } else {
    userListContent = <div id="add-groups-to-users-empty-message" className="add-groups-to-users-empty-list">{t("addGroupsToUser.noAvailableGroups")}</div>;
  }
  const ModalButtons = <>
    <Button25
      id="add-groups-to-users-invite-button"
      className="vai-space-inline-s"
      htmlId="add-groups-to-users-invite-button"
      onClick={inviteUsers2}
      disabled={!groupSelected || saving}
      data-ta={TEST_IDS.users_add_to_group_dialog_save}
    >{t("general.save")}</Button25>
    <Button25
      id="add-groups-to-users-cancel-button"
      htmlId="add-groups-to-users-cancel-button"
      buttonType={ButtonType20.Secondary}
      onClick={onDismiss}
      data-ta={TEST_IDS.users_add_to_group_dialog_cancel}
    >{t("general.cancel")}</Button25>
  </>;
  return <ModalContainer
    id="add-groups-to-users-title"
    isOpen
    htmlId="addgroup-members-dialog"
    showCloseIcon={true}
    onDismiss={onDismiss}
    width={Size37.M}
    dismissOnOverlayClick={false}
    title="addGroupsToUser.title"
    buttons={ModalButtons}
  >
    <p data-ta={TEST_IDS.users_add_to_group_dialog_user_name} id="add-groups-to-users-instruction">{t("addGroupsToUser.instructions", {
      name: getUserTitle()
    })}</p>
    <div id="add-groups-to-users-field-search-container" className="vai-margin-top-m"><InputField11
      htmlId="add-groups-to-users-search-groups-input"
      name="search"
      width={Size37.Container}
      placeholder={t("general.search")}
      value={searchCriteria}
      onChange={filter}
      endIcon={<Icon20 name={IconName12.Search} size={Size37.M} />}
      data-ta={TEST_IDS.users_add_to_group_dialog_search_field}
    /></div>
    <br />
    <div id="add-groups-to-users-users-container" className="add-groups-to-users-users-container"><Table4
      id="add-groups-to-users-users-list-table"
      tableStyle={TableStyle3.Plain}
      className="add-groups-to-users-users-list-table"
    ><TableBody4 htmlId="add-groups-to-users-users-list-table-body">{userListContent}</TableBody4></Table4></div>
  </ModalContainer>;
}, "AddGroupsToUserDialog");
var AddGroupsToUserDialog_default = AddGroupsToUserDialog;

// ../vlncc-frontend/src/components/profile/User.tsx
import { useTranslation as useTranslation44 } from "react-i18next";

// ../vlncc-frontend/src/hooks/useUserSettings.tsx
var useUserSettings = /* @__PURE__ */ __name(() => {
  const username = getConstantFromLocalStorage(LS_USERNAME);
  const showInactiveUsers = parseOrDefault(
    userSettings.get(username, "userSettings.userListShowInactive" /* USER_LIST_SHOW_INACTIVE */, "true"),
    true
  );
  const userListSorting = userSettings.sortValueOrDefault(
    username,
    "userSettings.userListSorting" /* USER_LIST_SORTING */,
    "byName" /* byName */,
    Object.values(UserSortValue)
  );
  const showInactiveGroups = parseOrDefault(
    userSettings.get(username, "userSettings.groupListShowInactive" /* GROUP_LIST_SHOW_INACTIVE */, "true"),
    true
  );
  const groupListSorting = userSettings.sortValueOrDefault(
    username,
    "userSettings.groupListSorting" /* GROUP_LIST_SORTING */,
    "byName" /* byName */,
    Object.values(GroupSortValue)
  );
  const timezone = getConstantFromLocalStorage(LS_TIME_ZONE) || Intl.DateTimeFormat().resolvedOptions().timeZone;
  return { username, showInactiveUsers, showInactiveGroups, groupListSorting, userListSorting, timezone };
}, "useUserSettings");
var useUserSettings_default = useUserSettings;

// ../vlncc-frontend/src/components/profile/User.tsx
import "./user-and-group.scss";
var User = /* @__PURE__ */ __name((props) => {
  const { username, userListSorting, showInactiveUsers } = useUserSettings_default();
  const dispatch = useAppDispatch();
  const { t } = useTranslation44();
  const [foundUsers, setFoundUsers] = React41.useState(props.users);
  const [searchCriteria, setSearchCriteria] = React41.useState("");
  const [sortValue, setSortValue] = React41.useState(userListSorting);
  const [userActive, setUserActive] = React41.useState(false);
  const [pinVisibility, setPinVisibility] = React41.useState(false);
  const [displayInactiveUsers, setDisplayInactiveUsers] = React41.useState(showInactiveUsers);
  React41.useEffect(() => {
    props.getMyProfile();
  }, []);
  React41.useEffect(() => {
    let sortedUsers = [...props.users];
    if (sortValue) {
      sortedUsers = sortUsers(sortedUsers, sortValue);
    }
    if (!displayInactiveUsers) {
      sortedUsers = sortedUsers.filter((user) => user.active);
    }
    setFoundUsers(sortedUsers);
    if (sortedUsers.length > 0) {
      props.userProfile ? props.getUserProfile(props.userProfile.user_name, true) : props.getUserProfile(sortedUsers[0].user_name, true);
    }
  }, [props.users]);
  React41.useEffect(() => {
    if (props.userProfile && !props.userProfileLoading && !props.userListLoading) {
      setUserActive(props.userProfile.active);
      addTableRowHandler();
    }
  }, [foundUsers, props.userProfile]);
  const showEditProfileModal = /* @__PURE__ */ __name(() => {
    dispatch(
      showDialog(
        <EditProfileDialog_default
          disableUserInputs={props.userProfile.email !== props.myProfile?.email}
          userProfile={props.userProfile}
          editProfile={props.editProfile}
        />
      )
    );
  }, "showEditProfileModal");
  const showCreateGroupsModal = /* @__PURE__ */ __name(() => {
    dispatch(showDialog(<CreateGroupsDialog_default groups={props.groups} createGroups={props.createGroups} />));
  }, "showCreateGroupsModal");
  const showInviteUsersModal = /* @__PURE__ */ __name(() => {
    dispatch(
      showDialog(
        <InviteUsersDialog_default
          locale={getConstantFromLocalStorage(LS_LOCALE)}
          groups={props.groups}
          inviteUsers={props.inviteUsers}
          rejectedUsers={props.rejectedUsers}
        />
      )
    );
  }, "showInviteUsersModal");
  const showAddGroupsToUserDialog = /* @__PURE__ */ __name(() => {
    dispatch(
      showDialog(
        <AddGroupsToUserDialog_default groups={props.groups} userProfile={props.userProfile} inviteUsers={props.inviteUsers} />
      )
    );
  }, "showAddGroupsToUserDialog");
  const deleteUser2 = /* @__PURE__ */ __name(() => {
    dispatch(showDialog(<UserDeletionDialog_default userName={props.userProfile.user_name} deleteUser={props.deleteUser} />));
  }, "deleteUser");
  const showRightSummary = /* @__PURE__ */ __name(() => {
    dispatch(showDialog(<UserEffectiveRightsDialog_default userProfile={props.userProfile} site={props.site} />));
  }, "showRightSummary");
  const addTableRowHandler = /* @__PURE__ */ __name(() => {
    const table = document.getElementById("user-list-table");
    const rows = table.getElementsByTagName("tr");
    for (let i = 0; i < rows.length; i++) {
      const currentRow = rows[i];
      if (currentRow.getAttribute("id") === props.userProfile.user_name) {
        currentRow.classList.add("user-selected-row");
      }
      const createClickHandler = /* @__PURE__ */ __name(() => {
        if (!currentRow.classList.contains("user-selected-row")) {
          props.getUserProfile(foundUsers[i].user_name, true);
          removeSiblingsBorder(currentRow);
        }
        currentRow.classList.add("user-selected-row");
      }, "createClickHandler");
      currentRow.onclick = createClickHandler;
    }
  }, "addTableRowHandler");
  const removeSiblingsBorder = /* @__PURE__ */ __name((e) => {
    if (!e.parentNode) {
      return;
    }
    let sibling = e.parentNode.firstChild;
    e.parentNode.firstChild.classList.remove("user-selected-row");
    while (sibling) {
      if (sibling.nodeType === 1 && sibling !== e) {
        sibling.classList.remove("user-selected-row");
      }
      sibling = sibling.nextSibling;
    }
    return;
  }, "removeSiblingsBorder");
  const filter = /* @__PURE__ */ __name((e) => {
    const keyword = e.target.value;
    let sortedUsers = [...props.users];
    if (!displayInactiveUsers) {
      sortedUsers = sortedUsers.filter((user) => user.active);
    }
    if (keyword !== "") {
      const results = sortedUsers.filter((user) => {
        if (user.first_name || user.last_name) {
          return (user.first_name + " " + user.last_name).toLowerCase().includes(keyword.toLowerCase());
        } else {
          return user.email.toLowerCase().includes(keyword.toLowerCase());
        }
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(sortedUsers);
    }
    setSearchCriteria(keyword);
  }, "filter");
  const handleChange = /* @__PURE__ */ __name((selectedValue) => () => {
    userSettings.set(username, "userSettings.userListSorting" /* USER_LIST_SORTING */, selectedValue);
    setSortValue(selectedValue);
    let sortedUsers = [...props.users];
    sortedUsers = sortUsers(sortedUsers, selectedValue);
    setFoundUsers(sortedUsers);
  }, "handleChange");
  const handleNewChange = /* @__PURE__ */ __name((selectedValue) => () => {
    switch (selectedValue) {
      case "newUser" /* newUser */:
        showInviteUsersModal();
        break;
      case "newGroup" /* newGroup */:
        showCreateGroupsModal();
        break;
    }
  }, "handleNewChange");
  const toggleActiveUsersDiplay = /* @__PURE__ */ __name(() => {
    const changed = !displayInactiveUsers;
    userSettings.set(username, "userSettings.userListShowInactive" /* USER_LIST_SHOW_INACTIVE */, changed);
    setDisplayInactiveUsers(changed);
    let sortedUsers = [...props.users];
    if (displayInactiveUsers) {
      sortedUsers = sortedUsers.filter((user) => user.active);
    }
    setFoundUsers(sortedUsers);
    if (!props.userProfile.active) {
      props.getUserProfile(sortedUsers[0].user_name);
    } else {
      props.getUserProfile(props.userProfile.user_name);
    }
  }, "toggleActiveUsersDiplay");
  const activeToggleChange = /* @__PURE__ */ __name((toggleVal) => {
    dispatch(
      showDialog(
        <UserActivationDialog_default
          userProfile={props.userProfile}
          toggleUserActivation={props.toggleUserActivation}
          userActive={toggleVal}
        />
      )
    );
  }, "activeToggleChange");
  const toggleVisibility = /* @__PURE__ */ __name(() => {
    setPinVisibility(!pinVisibility);
  }, "toggleVisibility");
  const isSortActiveClass = React41.useCallback(
    (value) => {
      return cx4({ "vai-menu-button__list-item--active": sortValue && sortValue === value });
    },
    [sortValue]
  );
  let userListContent = <CenteredSpinner_default htmlId="user-list-spinner" />;
  if (!props.userListLoading) {
    userListContent = <Table5 htmlId="user-list-table" tableStyle={TableStyle4.Plain} className="user-and-group-table"><TableBody5 htmlId="user-list-table__tbody">{foundUsers.map((row) => <TableRow5
      key={row.user_name}
      className={cx4({ "user-and-group-row-deactive": !row.active })}
      htmlId={row.user_name}
    >
      <TableCell5>{row.picture ? <img src={row.picture} className="user-profile-picture-icon" /> : <Icon21 name={IconName13.User} />}</TableCell5>
      <TableCell5>{row.first_name || row.last_name ? (row.first_name + " " + row.last_name).trim() : row.email.trim()}</TableCell5>
      <TableCell5 className="grey-medium">
        {row.groups.length}
        {" "}
        {row.groups.length > 1 || row.groups.length === 0 ? t("profile.groups") : t("profile.group")}
      </TableCell5>
    </TableRow5>)}</TableBody5></Table5>;
  }
  if (foundUsers.length < 1 && searchCriteria.length > 0) {
    userListContent = <Table5 tableStyle={TableStyle4.Plain} className="user-and-group-table" htmlId="user-list-table"><TableBody5><TableRow5 htmlId="user-empty-search-result">{displayInactiveUsers ? t("profile.InactiveUsersEmptySearchResult") : t("profile.ActiveUsersEmptySearchResult")}</TableRow5></TableBody5></Table5>;
  }
  let groupListContent = <CenteredSpinner_default htmlId="user-group-list-spinner" />;
  if (!props.userProfileLoading && !props.userListLoading) {
    groupListContent = <Table5 tableStyle={TableStyle4.Plain} className="user-and-group-table vai-margin-left-s"><TableBody5>{props.userProfile.groups.map((row, index) => <TableRow5 key={index}>
      <TableCell5 className="groups-table-checkbox-cell"><Checkbox5 id="user-groups-cell-checkbox" readOnly /></TableCell5>
      <TableCell5 id={`user-group-list-${row.group_name}`} className="aqua-medium">{row.group_name}</TableCell5>
      <TableCell5>
        {row.users ? row.users.length : "0"}
        {" "}
        {row.users ? row.users.length > 1 || row.users.length === 0 ? t("profile.users") : t("profile.user") : t("profile.users")}
      </TableCell5>
      <TableCell5 id={`user-group-list-trash-${row.group_name}`}><Icon21 name={IconName13.Trash} /></TableCell5>
    </TableRow5>)}</TableBody5></Table5>;
  }
  const renderDetails = /* @__PURE__ */ __name(() => {
    if (!props.userProfile) {
      return;
    }
    if (props.userProfileLoading) {
      return <CenteredSpinner_default htmlId="user-profile-spinner" />;
    }
    return <>
      <Flex23>
        <FlexItem14 alignSelf="flex-start" flexBasis="80%">
          {props.userProfile.picture && <img src={props.userProfile.picture} alt="Profile picture" />}
          <span id="user-profile-full-name" className="user-full-name">{props.userProfile.first_name || props.userProfile.last_name ? (props.userProfile.first_name + " " + props.userProfile.last_name).trim() : props.userProfile.email.trim()}</span>
        </FlexItem14>
        <FlexItem14 alignSelf="flex-end" flexBasis="20%" style={{ textAlign: "right" }}><Toggle2
          htmlId="user-activation-toggle"
          text={t("profile.active")}
          uncheckedText={t("profile.inactive")}
          disabled={props.userProfile && props.myProfile && props.userProfile.user_name === props.myProfile.user_name}
          checked={userActive}
          onChange={(userActive2) => activeToggleChange(userActive2)}
        /></FlexItem14>
      </Flex23>
      <Separator8 />
      <Flex23 className="user-profile-info-container">
        <FlexItem14 alignSelf="flex-start" flexBasis="49%" style={{ height: "100%" }}>
          <Flex23 className="vai-margin-top-m vai-margin-bottom-s">
            <FlexItem14><p id="user-profile-information" className="user-header">{t("profile.profileInformation")}</p></FlexItem14>
            <FlexItem14 className="user-top-right-button-container aqua-medium"><Button26
              id="user-edit-profile-button"
              htmlId="user-edit-profile-button"
              buttonType={ButtonType21.Secondary}
              className="user-top-right-button"
              onClick={showEditProfileModal}
            >{t("profile.editProfile")}</Button26></FlexItem14>
          </Flex23>
          <Table5
            htmlId="user-profile-panel__table"
            tableStyle={TableStyle4.Plain}
            className="user-and-group-table user-borderless-table vai-margin-left-s"
          ><TableBody5 htmlId="user-profile-panel__tbody">
            <TableRow5 htmlId="user-profile-panel__tr--company-id">
              <TableCell5 dataTa="label">{t("profile.companyID")}</TableCell5>
              <TableCell5 dataTa="value" className="grey-medium">{props.userProfile.company_alias}</TableCell5>
            </TableRow5>
            <TableRow5 htmlId="user-profile-panel__tr--username-email">
              <TableCell5 dataTa="label">{t("profile.unsernameEmail")}</TableCell5>
              <TableCell5 dataTa="value" className="grey-medium">{props.userProfile.user_name}</TableCell5>
            </TableRow5>
            <TableRow5 htmlId="user-profile-panel__tr--locale">
              <TableCell5 dataTa="label">{t("profile.language")}</TableCell5>
              <TableCell5 dataTa="value">{LANGUAGE_TEXT[props.userProfile.locale]}</TableCell5>
            </TableRow5>
            <TableRow5 htmlId="user-profile-panel__tr--timezone">
              <TableCell5 dataTa="label">{t("profile.timeZone")}</TableCell5>
              <TableCell5 dataTa="value">{props.userProfile.tz}</TableCell5>
            </TableRow5>
            <TableRow5 htmlId="user-profile-panel__tr--email">
              <TableCell5 dataTa="label">{t("profile.notificationEmail")}</TableCell5>
              <TableCell5 dataTa="value">{props.userProfile.email}</TableCell5>
            </TableRow5>
            <TableRow5 htmlId="user-profile-panel__tr--phone">
              <TableCell5 dataTa="label">{t("profile.phone")}</TableCell5>
              <TableCell5 dataTa="value">{props.userProfile.phone}</TableCell5>
            </TableRow5>
            <TableRow5
              htmlId="user-profile-panel__tr--pin"
              className={props?.userProfile?.email === props?.myProfile?.email ? "" : "display-none"}
            >
              <TableCell5 dataTa="label">{t("profile.pin")}</TableCell5>
              <TableCell5 dataTa="value"><span>{pinVisibility ? props.userProfile.pin : "*****"}</span></TableCell5>
              <TableCell5 dataTa="vis-button"><Button26
                id="user-visibility-icon-button"
                buttonType={ButtonType21.Secondary}
                buttonSize={Size38.S}
                onClick={toggleVisibility}
              ><Icon21 name={pinVisibility ? IconName13.VisibilityOn : IconName13.VisibilityOff} /></Button26></TableCell5>
            </TableRow5>
          </TableBody5></Table5>
          {props.userProfile?.first_name || props.userProfile?.last_name ? " " : <Button26
            id="user-delete-button"
            htmlId="user-delete-button"
            buttonType={ButtonType21.Secondary}
            onClick={deleteUser2}
            className="user-deletion-button vai-margin-right-s"
          >{t("profile.deleteUser")}</Button26>}
        </FlexItem14>
        <FlexItem14 alignSelf="center" flexBasis="2%" style={{ height: "100%" }}><hr className="vertical-separator" /></FlexItem14>
        <FlexItem14 alignSelf="flex-end" flexBasis="49%" style={{ height: "100%" }}>
          <Flex23 className="vai-margin-top-m vai-margin-bottom-s">
            <FlexItem14><p id="user-groups-heading" className="user-header">{t("profile.groups")}</p></FlexItem14>
            <FlexItem14 className="user-top-right-button-container aqua-medium"><Button26
              className="aqua-medium vai-margin-top-l user-top-right-button"
              id="user-add-to-group-button"
              data-ta={TEST_IDS.users_add_to_group}
              buttonType={ButtonType21.Secondary}
              onClick={showAddGroupsToUserDialog}
            >{t("profile.addToGroup")}</Button26></FlexItem14>
          </Flex23>
          <p id="user-group-rights-blurb" className="grey-medium vai-margin-top-m vai-margin-bottom-l">{t("profile.accessRight")}</p>
          {groupListContent}
          <br />
          <Button26
            className="aqua-medium vai-margin-top-l"
            id="show-rights-summary-button"
            buttonType={ButtonType21.Secondary}
            onClick={showRightSummary}
          >{t("profile.viewRightsSummary")}</Button26>
          <p id="user-latest-activity-label" className="user-header vai-margin-top-l vai-margin-bottom-l">{t("profile.latestActivity")}</p>
          <Table5
            tableStyle={TableStyle4.Plain}
            className="user-borderless-table user-and-group-table vai-margin-left-s"
          >
            <TableHead><TableRow5>
              <TableCell5>{t("profile.when")}</TableCell5>
              <TableCell5>{t("profile.what")}</TableCell5>
            </TableRow5></TableHead>
            <TableBody5 />
          </Table5>
          {
            /* <p className="user-center-align aqua-medium vai-margin-top-l">{t('profile.viewEvents')}</p> */
          }
        </FlexItem14>
      </Flex23>
    </>;
  }, "renderDetails");
  const userProfileContent = <Paper3 className="user-profile-paper">{renderDetails()}</Paper3>;
  const renderListHeader = /* @__PURE__ */ __name(() => {
    return <>
      <InputField12
        htmlId="user-search-input"
        name="search"
        width={Size38.Container}
        placeholder={t("general.search")}
        value={searchCriteria}
        onChange={filter}
        endIcon={<Icon21 name={IconName13.Search} size={Size38.M} />}
      />
      <br />
      <Flex23 id="user-list-button-row" justifyContent="space-between">
        <MenuButton2 htmlId="user-sort-users">
          <MenuButtonToggle2 htmlId="user-sort-users__toggle" buttonType={ButtonType21.Secondary}>{t("profile.sort")}</MenuButtonToggle2>
          <MenuButtonList2 htmlId="user-sort-users__list">
            <MenuButtonListItem2
              htmlId="user-sort-users__item--by-name"
              className={isSortActiveClass("byName" /* byName */)}
              onSelect={handleChange("byName" /* byName */)}
            >{t("profile.byName")}</MenuButtonListItem2>
            <MenuButtonListItem2
              htmlId="user-sort-users__item--by-most-recent-changes"
              className={isSortActiveClass("byMostRecentChanges" /* byMostRecentChanges */)}
              onSelect={handleChange("byMostRecentChanges" /* byMostRecentChanges */)}
            >{t("profile.byMostRecentChanges")}</MenuButtonListItem2>
            <MenuButtonListItem2
              htmlId="user-sort-users__item--by-number-of-groups-asc"
              className={isSortActiveClass("byNumberOfGroupsAsc" /* byNumberOfGroupsAsc */)}
              onSelect={handleChange("byNumberOfGroupsAsc" /* byNumberOfGroupsAsc */)}
            >{t("profile.byNumberOfGroupsAscending")}</MenuButtonListItem2>
            <MenuButtonListItem2
              htmlId="user-sort-users__item--by-number-of-groups-desc"
              className={isSortActiveClass("byNumberOfGroupsDesc" /* byNumberOfGroupsDesc */)}
              onSelect={handleChange("byNumberOfGroupsDesc" /* byNumberOfGroupsDesc */)}
            >{t("profile.byNumberOfGroupsDescending")}</MenuButtonListItem2>
          </MenuButtonList2>
        </MenuButton2>
        <Button26
          id="user-create-report"
          htmlId="user-create-report"
          className="vai-margin-left-m"
          buttonType={ButtonType21.Secondary}
          style={{ marginLeft: VaiSpacing2.M }}
          startIcon={<Icon21 name={VaiIcon14.Document} />}
        >{t("profile.report")}</Button26>
        <MenuButton2 id="user-new-users-groups" style={{ marginLeft: VaiSpacing2.M }}>
          <MenuButtonToggle2 htmlId="user-new-users-groups__toggle">{t("profile.new")}</MenuButtonToggle2>
          <MenuButtonList2 htmlId="user-new-users-groups__list">
            <MenuButtonListItem2
              htmlId="user-new-users-groups__item--new-group"
              onSelect={handleNewChange("newGroup" /* newGroup */)}
            >{t("profile.newGroup")}</MenuButtonListItem2>
            <MenuButtonListItem2
              htmlId="user-new-users-groups__item--new-user"
              onSelect={handleNewChange("newUser" /* newUser */)}
            >{t("profile.inviteUser")}</MenuButtonListItem2>
          </MenuButtonList2>
        </MenuButton2>
      </Flex23>
      <Flex23 className="vai-margin-top-m vai-margin-bottom-s">
        <FlexItem14 id="user-count" alignSelf="center" flexBasis="60%" className="count-label">
          {foundUsers.length}
          {" "}
          {t("profile.usersTotal")}
        </FlexItem14>
        <FlexItem14 alignSelf="center" flexBasis={null}><Toggle2
          htmlId="user-show-active-users-toggle"
          text={t("profile.showInactive")}
          uncheckedText={t("profile.showActive")}
          checked={displayInactiveUsers}
          onChange={toggleActiveUsersDiplay}
        /></FlexItem14>
      </Flex23>
    </>;
  }, "renderListHeader");
  return <Flex23 id="user-wrapper">
    <FlexItem14 id="user-left-panel" className="vai-margin-right-75-rem" alignSelf="flex-start" flexBasis="23%"><Paper3 htmlId="user-list-paper" className="user-list-paper">
      {renderListHeader()}
      <div id="user-and-group-table-wrapper" className="user-and-group-table-wrapper">{userListContent}</div>
    </Paper3></FlexItem14>
    <FlexItem14 id="user-profile-content-wrapper" alignSelf="flex-start" flexBasis="77%">{userProfileContent}</FlexItem14>
  </Flex23>;
}, "User");
var User_default = User;

// ../vlncc-frontend/src/components/profile/Group.tsx
import * as React45 from "react";
import cx5 from "classnames";
import {
  Paper as Paper4,
  Table as Table7,
  TableStyle as TableStyle6,
  TableHead as TableHead2,
  TableBody as TableBody7,
  MenuButton as MenuButton3,
  MenuButtonToggle as MenuButtonToggle3,
  MenuButtonList as MenuButtonList3,
  MenuButtonListItem as MenuButtonListItem3,
  TableRow as TableRow7,
  TableCell as TableCell7,
  Icon as Icon24,
  IconName as IconName16,
  InputField as InputField15,
  Size as Size45,
  Button as Button33,
  ButtonType as ButtonType28,
  Flex as Flex25,
  FlexItem as FlexItem16,
  Toggle as Toggle3,
  Separator as Separator10,
  Checkbox as Checkbox7,
  Stack as Stack2
} from "@vaisala-rockhopper/components";
import { VaiSpacing as VaiSpacing3, VaiIcon as VaiIcon15 } from "@vaisala-rockhopper/design-tokens";

// ../vlncc-frontend/src/components/profile/EditGroupsDialog/index.tsx
import * as React42 from "react";
import validator11 from "validator";
import "./edit-groups-dialog.scss";
import {
  Icon as Icon22,
  IconName as IconName14,
  Size as Size40,
  InputField as InputField13,
  Form as Form14,
  Label as Label8,
  Button as Button28,
  ButtonType as ButtonType23,
  Separator as Separator9,
  TextArea as TextArea3
} from "@vaisala-rockhopper/components";

// ../vlncc-frontend/src/components/profile/GroupDeletionDialog/index.tsx
import { Size as Size39, Button as Button27, ButtonType as ButtonType22, BodyText as BodyText11 } from "@vaisala-rockhopper/components";
import { useTranslation as useTranslation45 } from "react-i18next";
var GroupDeletionDialog = /* @__PURE__ */ __name(({ deleteGroup: deleteGroup2, groupId }) => {
  const { t } = useTranslation45();
  const dispatch = useAppDispatch();
  const deleteGroupOnClick = /* @__PURE__ */ __name(() => {
    deleteGroup2(groupId);
    onDismiss();
  }, "deleteGroupOnClick");
  const onDismiss = /* @__PURE__ */ __name(() => dispatch(hideDialog()), "onDismiss");
  const modalButtons = <>
    <Button27
      dataTa={TEST_IDS.group_delete_dialog_confirm}
      id="group-deletion-confirm"
      htmlId="group-deletion-confirm"
      onClick={deleteGroupOnClick}
    >{t("profile.groupDeletionConfirm")}</Button27>
    <Button27
      id="group-deletion-cancel"
      htmlId="group-deletion-cancel"
      onClick={onDismiss}
      buttonType={ButtonType22.Secondary}
    >{t("profile.cancel")}</Button27>
  </>;
  return <ModalContainer
    id="group-deletion-dialog"
    data-ta={TEST_IDS.group_delete_dialog}
    isOpen
    htmlId="group-deletion-dialog"
    onDismiss={onDismiss}
    width={Size39.S}
    dismissOnOverlayClick={false}
    title="profile.groupDeletionTitle"
    role="alert-dialog"
    showCloseIcon
    buttons={modalButtons}
  ><BodyText11 id="delete-group-body-text" className="delete-group-body">{t("profile.groupDeletionMsg")}</BodyText11></ModalContainer>;
}, "GroupDeletionDialog");
var GroupDeletionDialog_default = GroupDeletionDialog;

// ../vlncc-frontend/src/components/profile/EditGroupsDialog/index.tsx
import { useTranslation as useTranslation46 } from "react-i18next";
import { isEmpty as isEmpty2 } from "lodash";
var EditGroupsDialog = /* @__PURE__ */ __name((props) => {
  const { t } = useTranslation46();
  const dispatch = useAppDispatch();
  const [groupName, setGroupName] = React42.useState(props.groupDetails.group_name);
  const [groupNameError, setGroupNameError] = React42.useState("");
  const [description, setDescription] = React42.useState(props.groupDetails.description);
  const [descriptionError, setDescriptionError] = React42.useState("");
  const onChange = /* @__PURE__ */ __name((e) => {
    const { value, name } = e.currentTarget;
    if (name === "groupName") {
      setGroupName(value);
      value.length > GROUP_NAME_MAX_CHARACHTERS_LENGTH ? setGroupNameError(t("profile.editGroupsMaxLengthError", { charLen: GROUP_NAME_MAX_CHARACHTERS_LENGTH })) : setGroupNameError("");
    } else if (name === "description") {
      setDescription(value);
      value.length > GROUP_DESCRIPTION_MAX_CHARACHTERS_LENGTH ? setDescriptionError(
        t("profile.editGroupsMaxLengthError", { charLen: GROUP_DESCRIPTION_MAX_CHARACHTERS_LENGTH })
      ) : setDescriptionError("");
    }
  }, "onChange");
  const onDismiss = /* @__PURE__ */ __name(() => dispatch(hideDialog()), "onDismiss");
  const onEditGroup = /* @__PURE__ */ __name(() => {
    let errorExist = false;
    const trimmedGroupName = validator11.trim(groupName);
    const trimmedDescription = validator11.trim(description);
    setGroupNameError("");
    setDescriptionError("");
    if (!trimmedGroupName) {
      errorExist = true;
      setGroupNameError(t("profile.groupNameEmptyError"));
    } else if (trimmedGroupName.length > GROUP_NAME_MAX_CHARACHTERS_LENGTH) {
      errorExist = true;
      setGroupNameError(t("profile.createGroupsMaxLengthError"));
    } else if (props.groups.map((a) => a.group_name).includes(trimmedGroupName) && trimmedGroupName !== props.groupDetails.group_name) {
      errorExist = true;
      setGroupNameError(t("profile.groupNameDuplicateError"));
    } else if (trimmedGroupName.length < GROUP_NAME_MIN_CHARACHTERS_LENGTH) {
      errorExist = true;
      setGroupNameError(t("profile.editGroupsMinLengthError", { charLen: GROUP_NAME_MIN_CHARACHTERS_LENGTH }));
    } else if (trimmedDescription && trimmedDescription.length > GROUP_DESCRIPTION_MAX_CHARACHTERS_LENGTH) {
      errorExist = true;
    }
    if (!errorExist) {
      const newGroup = {
        group_name: trimmedGroupName,
        description: trimmedDescription ? trimmedDescription : "",
        group_id: props.groupDetails.group_id
      };
      props.editGroup(newGroup);
      dispatch(hideDialog());
    }
  }, "onEditGroup");
  const onDeleteGroup = /* @__PURE__ */ __name(() => {
    onDismiss();
    dispatch(
      showDialog(
        <GroupDeletionDialog_default
          groupId={props.groupDetails.group_id}
          deleteGroup={props.deleteGroup}
        />
      )
    );
  }, "onDeleteGroup");
  const isConfirmDisabled = props.groupDetails.group_name === groupName || !isEmpty2(groupNameError) || !isEmpty2(descriptionError) || groupName.length === 0;
  const modalButtons = <div className="edit-groups-button-container">
    <Button28
      id="edit-groups-confirm"
      data-ta={TEST_IDS.group_edit_dialog_save_buton}
      htmlId="edit-groups-confirm"
      disabled={isConfirmDisabled}
      onClick={onEditGroup}
    >{t("general.save")}</Button28>
    <Button28 id="edit-groups-cancel" htmlId="edit-groups-cancel" onClick={onDismiss} buttonType={ButtonType23.Secondary}>{t("profile.cancel")}</Button28>
  </div>;
  const modalFooterExtras = <div id="edit-groups-button-container" className="edit-groups-button-container">
    <Separator9 />
    <Button28
      id="edit-groups-dialog"
      buttonType={ButtonType23.Link}
      startIcon={<Icon22 name={IconName14.Trash} />}
      onClick={onDeleteGroup}
      dataTa={TEST_IDS.group_edit_dialog_delete_button}
    >{t("profile.deleteGroup")}</Button28>
  </div>;
  return <ModalContainer
    id="edit-groups-dialog"
    data-ta={TEST_IDS.group_edit_dialog}
    isOpen
    htmlId="edit-groups-dialog"
    showCloseIcon={true}
    onDismiss={onDismiss}
    width={Size40.S}
    dismissOnOverlayClick={false}
    buttons={modalButtons}
    footerChildren={modalFooterExtras}
    iconName={IconName14.UserGroup}
    title="profile.editGroupsTitle"
  ><Form14>
    <Label8 className="edit-groups-name">
      {t("profile.creaGroupsName")}
      <InputField13
        required={true}
        htmlId="edit-groups-name"
        width={Size40.Container}
        value={groupName}
        name="groupName"
        onChange={onChange}
        className={getErrorClass(groupNameError)}
      />
      <span className="input-error">{groupNameError}</span>
    </Label8>
    <Label8 className="edit-groups-description">
      {t("profile.editGroupsDescription")}
      <TextArea3
        htmlId="edit-groups-description"
        width={Size40.Container}
        value={description}
        name="description"
        onChange={onChange}
        rows={2}
        className={getErrorClass(descriptionError)}
      />
      <span className="input-error">{descriptionError}</span>
    </Label8>
  </Form14></ModalContainer>;
}, "EditGroupsDialog");
var EditGroupsDialog_default = EditGroupsDialog;

// ../vlncc-frontend/src/components/profile/addGroupMembersDialog/index.tsx
import * as React43 from "react";
import { Auth as Auth7 } from "aws-amplify";
import validator12 from "validator";
import {
  InputField as InputField14,
  Size as Size41,
  Button as Button29,
  ButtonType as ButtonType24,
  Icon as Icon23,
  IconName as IconName15,
  Flex as Flex24,
  FlexItem as FlexItem15,
  Table as Table6,
  TableStyle as TableStyle5,
  TableBody as TableBody6,
  TableRow as TableRow6,
  TableCell as TableCell6,
  Checkbox as Checkbox6
} from "@vaisala-rockhopper/components";
import "./add-group-members.scss";
import { useTranslation as useTranslation47 } from "react-i18next";
var AddGroupMembersDialog = /* @__PURE__ */ __name((props) => {
  const { t } = useTranslation47();
  const dispatch = useAppDispatch();
  const [searchCriteria, setSearchCriteria] = React43.useState("");
  const [foundUsers, setFoundUsers] = React43.useState([]);
  const [saving, setSaving] = React43.useState(false);
  const { validEmails, renderTagInput } = useEmails_default();
  const [userSelected, isUserSelected] = React43.useState(false);
  const onDismiss = /* @__PURE__ */ __name(() => dispatch(hideDialog()), "onDismiss");
  const initializeUsers = /* @__PURE__ */ __name(() => {
    const temp = [];
    const existingusers = [];
    props.groupDetails.users.forEach((user) => {
      existingusers.push(user.email);
    });
    props.users.forEach((user) => {
      if (!existingusers.includes(user.email)) {
        temp.push({ ...user, checked: false });
      }
    });
    setFoundUsers(temp);
  }, "initializeUsers");
  React43.useEffect(() => {
    initializeUsers();
  }, [props.users]);
  const filter = /* @__PURE__ */ __name((e) => {
    let keyword = e.currentTarget.value;
    keyword = validator12.ltrim(keyword);
    if (keyword !== "") {
      const results = foundUsers.filter((user) => {
        if (user.first_name || user.last_name) {
          return (user.first_name + " " + user.last_name).toLowerCase().includes(keyword.toLowerCase());
        } else {
          return user.email.toLowerCase().includes(keyword.toLowerCase());
        }
      });
      setFoundUsers(results);
    } else {
      initializeUsers();
    }
    setSearchCriteria(keyword);
  }, "filter");
  const checkBoxChangeHandler = /* @__PURE__ */ __name((index) => {
    const temp = [...foundUsers];
    temp[index].checked = !temp[index].checked;
    setFoundUsers(temp);
    isUserSelected(false);
    temp.forEach((user) => {
      if (user.checked) {
        isUserSelected(true);
        return;
      }
    });
  }, "checkBoxChangeHandler");
  const inviteUsers2 = /* @__PURE__ */ __name(async () => {
    setSaving(true);
    const invitedUsers = [];
    foundUsers.forEach((user) => {
      if (user.checked) {
        const invitedUser = {
          user_name: user.email,
          locale: user.locale,
          tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
          group_ids: [props.groupDetails.group_id]
        };
        invitedUsers.push(invitedUser);
      }
    });
    const currentCredentials = await Auth7.currentSession();
    const userLocale = currentCredentials.getIdToken().payload.locale;
    validEmails.forEach((email) => {
      const invitedUser = {
        user_name: email,
        locale: userLocale,
        tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
        group_ids: [props.groupDetails.group_id]
      };
      invitedUsers.push(invitedUser);
    });
    const users = {
      users: invitedUsers
    };
    await props.inviteUsers(users, INVITE_USER_FROM_GROUP);
    onDismiss();
  }, "inviteUsers");
  let userListContent;
  if (foundUsers.length > 0) {
    userListContent = foundUsers.map((row, index) => <TableRow6
      dataTa={TEST_IDS.groups_add_group_member_dialog_users_list_item}
      htmlId={`add-group-members-row-${index}`}
      key={index}
    >
      <TableCell6 id={`add-group-members-checkbox-${index}`} className="add-group-members-checkbox aqua-medium"><Checkbox6
        id="add-group-members"
        checked={row.checked}
        label=""
        onChange={() => checkBoxChangeHandler(index)}
      /></TableCell6>
      <TableCell6 id={`add-group-members-profile-picture-cell-${index}`}><Flex24>
        <FlexItem15 alignSelf="flex-start" flexBasis="10%">{row.picture ? <img
          id={`add-group-members-profile-picture-${index}`}
          src={row.picture}
          className="user-profile-picture-icon"
        /> : <Icon23 id={`add-group-members-profile-icon-${index}`} name={IconName15.User} />}</FlexItem15>
        <FlexItem15
          id={`add-group-members-profile-name-${index}`}
          className="vai-margin-bottom-s"
          alignSelf="flex-end"
          flexBasis="40%"
        >{row.first_name || row.last_name ? (row.first_name + " " + row.last_name).trim() : row.email.trim()}</FlexItem15>
      </Flex24></TableCell6>
    </TableRow6>);
  } else {
    userListContent = <div id="add-group-members-empty-message" className="add-group-members-empty-list">{t("addGroupMembers.noAvailableUsers")}</div>;
  }
  const ModalButtons = <>
    <Button29
      id="add-group-members-invite-button"
      className="vai-space-inline-s"
      htmlId="add-group-members-invite-button"
      onClick={inviteUsers2}
      disabled={!userSelected && validEmails.length === 0 || saving}
      dataTa={TEST_IDS.groups_add_group_member_dialog_save_button}
    >{t("addGroupMembers.saveUsers")}</Button29>
    <Button29
      id="add-group-members-cancel-button"
      htmlId="add-group-members-cancel-button"
      buttonType={ButtonType24.Secondary}
      onClick={onDismiss}
      dataTa={TEST_IDS.groups_add_group_member_dialog_cancel_button}
    >{t("inviteUsers.cancel")}</Button29>
  </>;
  return <ModalContainer
    id="addgroup-members-dialog"
    isOpen
    htmlId="addgroup-members-dialog"
    showCloseIcon={true}
    onDismiss={onDismiss}
    width={Size41.M}
    dismissOnOverlayClick={false}
    title="addGroupMembers.addGroupMembersTitle"
    iconName={IconName15.UserGroup}
    buttons={ModalButtons}
    dataTa={TEST_IDS.groups_add_group_member_dialog}
  >
    <div
      id="add-group-members-email-invite-container"
      className="add-group-members-field-container add-group-members-email-invite-container"
    >
      <span id="add-group-members-email-invite-container" className="add-group-members-add-to-msg">{t("addGroupMembers.addTo")}</span>
      {" "}
      <span
        data-ta={TEST_IDS.groups_add_group_member_dialog_group_name}
        id="add-group-members-group-name"
        className="add-group-members-add-to-msg add-group-members-group-name"
      >{props.groupDetails.group_name}</span>
      <Flex24 alignItems="flex-start" className="vai-margin-top-m">
        <FlexItem15 flexGrow={1} className="vai-margin-right-xs">{renderTagInput({
          htmlId: "add-group-members-add-email-input",
          placeholder: t("addGroupMembers.enterEmail")
        })}</FlexItem15>
        <FlexItem15><Infotip_default htmlId="add-group-members-email-infotip" iconProps={{ size: Size41.L }}>{t("infotip.emailInput")}</Infotip_default></FlexItem15>
      </Flex24>
    </div>
    <div id="add-group-members-field-search-container" className="add-group-members-field-container vai-margin-top-m">
      <span id="add-group-members-select-existing-user-msg" className="add-group-members-select-existinguser-msg">{t("addGroupMembers.selectExistingUserMsg")}</span>
      <InputField14
        htmlId="add-group-members-search-groups-input"
        name="search"
        width={Size41.Container}
        placeholder={t("inviteUsers.searchFieldPlaceholder")}
        value={searchCriteria}
        onChange={filter}
        endIcon={<Icon23 name={IconName15.Search} size={Size41.M} />}
        dataTa={TEST_IDS.groups_add_group_member_dialog_search_field}
      />
    </div>
    <br />
    <div id="add-group-members-users-container" className="add-group-members-users-container"><Table6 id="add-group-members-users-list-table" tableStyle={TableStyle5.Plain} className="user-and-group-table"><TableBody6 htmlId="add-group-members-users-list-table-body">{userListContent}</TableBody6></Table6></div>
  </ModalContainer>;
}, "AddGroupMembersDialog");
var AddGroupMembersDialog_default = AddGroupMembersDialog;

// ../vlncc-frontend/src/components/profile/DeleteGroupUsersDialog/index.tsx
import "./delete-group-users.scss";
import { Size as Size42, Button as Button30, ButtonType as ButtonType25, BodyText as BodyText12 } from "@vaisala-rockhopper/components";
import { useTranslation as useTranslation48 } from "react-i18next";
var DeleteGroupUsersDialog = /* @__PURE__ */ __name((props) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation48();
  const deleteGroupUsers2 = /* @__PURE__ */ __name(() => {
    props.deleteGroupUsers(props.selectedUsers, props.group_id);
    onDismiss();
  }, "deleteGroupUsers");
  const onDismiss = /* @__PURE__ */ __name(() => dispatch(hideDialog()), "onDismiss");
  const modalButtons = <>
    <Button30
      id="delete-group-users-confirm"
      htmlId="delete-group-users-confirm"
      onClick={deleteGroupUsers2}
      buttonType={ButtonType25.Secondary}
    >{t("profile.remove")}</Button30>
    <Button30 id="delete-group-users-cancel" htmlId="delete-group-users-cancel" onClick={onDismiss}>{t("profile.cancel")}</Button30>
  </>;
  return <ModalContainer
    dataTa={TEST_IDS.group_delete_dialog}
    id="delete-group-users-dialog"
    isOpen
    htmlId="delete-group-users-dialog"
    showCloseIcon={true}
    onDismiss={onDismiss}
    width={Size42.M}
    dismissOnOverlayClick={false}
    title="profile.deleteGroupUsersTitle"
    role="alert-dialog"
    buttons={modalButtons}
  ><BodyText12 id="elete-group-users-body-text" className="delete-group-users-body">{t("profile.deleteGroupUsersMsg", { numberOfGroups: props.selectedUsers.length, groupName: props.group_name })}</BodyText12></ModalContainer>;
}, "DeleteGroupUsersDialog");
var DeleteGroupUsersDialog_default = DeleteGroupUsersDialog;

// ../vlncc-frontend/src/components/profile/GroupActivationDialog/index.tsx
import "./group-activation-dialog.scss";
import { Size as Size43, Button as Button31, ButtonType as ButtonType26, BodyText as BodyText13 } from "@vaisala-rockhopper/components";
import { useTranslation as useTranslation49 } from "react-i18next";
var GroupActivationDialog = /* @__PURE__ */ __name((props) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation49();
  const onDismiss = /* @__PURE__ */ __name(() => dispatch(hideDialog()), "onDismiss");
  const confirmAlertModal = /* @__PURE__ */ __name(() => {
    props.toggleGroupActivation(props.groupActive, props.groupDetails.group_id, props.groupDetails.group_name);
    onDismiss();
  }, "confirmAlertModal");
  const alertModalVisibleFirstMsg = props.groupActive ? t("profile.activateGroupMsg") : t("profile.deactivateGroupFirstMsg");
  const alertModalVisibleSecondMsg = props.groupActive ? "" : t("profile.deactivateGroupSecondMsg");
  const modalButtons = <>
    <Button31
      id="group-activation-confirm"
      htmlId="group-activation-confirm"
      onClick={confirmAlertModal}
      buttonType={ButtonType26.Secondary}
    >{props.groupActive ? t("profile.activateGroupBtn") : t("profile.deactivateGroupBtn")}</Button31>
    <Button31 id="group-activation-cancel" htmlId="group-activation-cancel" onClick={onDismiss}>{t("profile.cancel")}</Button31>
  </>;
  return <ModalContainer
    id="group-activation-dialog"
    isOpen
    htmlId="group-activation-dialog"
    showCloseIcon={true}
    onDismiss={onDismiss}
    width={Size43.S}
    dismissOnOverlayClick={false}
    role="alert-dialog"
    title={props.groupActive ? "profile.activateGroupHeader" : "profile.deactivateGroupHeader"}
    buttons={modalButtons}
  ><BodyText13 id="group-activation-text" className="activate-group-body">
    <p>{alertModalVisibleFirstMsg}</p>
    <br />
    <p>{alertModalVisibleSecondMsg}</p>
  </BodyText13></ModalContainer>;
}, "GroupActivationDialog");
var GroupActivationDialog_default = GroupActivationDialog;

// ../vlncc-frontend/src/components/GroupsRightsDialog/index.tsx
import * as React44 from "react";
import { isEqual } from "lodash";
import { Size as Size44, Button as Button32, ButtonType as ButtonType27 } from "@vaisala-rockhopper/components";
import "./groups-rights-dialog.scss";
var GroupsRightsDialog = /* @__PURE__ */ __name((props) => {
  const [hasEdits, setHasEdits] = React44.useState(false);
  const [groupsRightSaveClicked, setGroupsRightSaveClicked] = React44.useState(false);
  React44.useEffect(() => {
    setHasEdits(!isEqual(props.defaultRights, props.currentRights));
  }, [props.defaultRights, props.currentRights]);
  const handleGroupsRightsDialogSave = /* @__PURE__ */ __name(() => {
    setGroupsRightSaveClicked(true);
  }, "handleGroupsRightsDialogSave");
  const onClose = /* @__PURE__ */ __name(() => {
    props.hideDialog();
  }, "onClose");
  const modalButtons = <>
    <Button32
      id="groups-rights-edit-save-button"
      className="vai-space-inline-m"
      htmlId="groups-rights-edit-save-button"
      onClick={handleGroupsRightsDialogSave}
      disabled={groupsRightSaveClicked || !hasEdits}
    >{groupsRightSaveClicked ? <CenteredSpinner_default htmlId="groups-rights-save-spinner" className="" /> : props.t("general.save")}</Button32>
    <Button32
      className="vai-space-inline-m"
      id="groups-rights-edit-cancel-button"
      htmlId="groups-rights-edit-cancel-button"
      buttonType={ButtonType27.Secondary}
      onClick={onClose}
    >{props.t("general.cancel")}</Button32>
  </>;
  return <ModalContainer
    id="edit-grouprights-modal"
    htmlId="edit-grouprights-modal"
    isOpen
    showCloseIcon
    width={Size44.L}
    onDismiss={onClose}
    dismissOnOverlayClick={false}
    title="groupsRightsDialog.header"
    buttons={modalButtons}
  >{props.content(groupsRightSaveClicked, setGroupsRightSaveClicked)}</ModalContainer>;
}, "GroupsRightsDialog");
var GroupsRightsDialog_default = withDisplaySize(GroupsRightsDialog);

// ../vlncc-frontend/src/components/profile/Group.tsx
import { useTranslation as useTranslation50 } from "react-i18next";
import "./user-and-group.scss";
var Group = /* @__PURE__ */ __name((props) => {
  const { username, groupListSorting, showInactiveGroups } = useUserSettings_default();
  const { t } = useTranslation50();
  const dispatch = useAppDispatch();
  const [foundGroups, setFoundGroups] = React45.useState(props.groups);
  const [groupUsers, setGroupUsers] = React45.useState([]);
  const [searchCriteria, setSearchCriteria] = React45.useState("");
  const [sortValue, setSortValue] = React45.useState(groupListSorting);
  const [groupActive, setGroupActive] = React45.useState(false);
  const [userSelected, setUserSelected] = React45.useState(false);
  const [allUsersSelection, setAllUsersSelection] = React45.useState(false);
  const [displayInactiveGroups, setDisplayInactiveGroups] = React45.useState(showInactiveGroups);
  const [defaultRights, setDefaultRights] = React45.useState({});
  const [currentRights, setCurrentRights] = React45.useState({});
  const [isEditingRights, setIsEditingRights] = React45.useState(false);
  const groupDetailsContentRef = React45.useRef(null);
  const topRef = React45.useRef(null);
  const [_triggerUpdate, setTriggerUpdate] = React45.useState(/* @__PURE__ */ new Date());
  const initializeGroupUsers = /* @__PURE__ */ __name(() => {
    let temp = [];
    props.groupDetails.users.map((user) => {
      temp.push({ ...user, checked: false });
    });
    temp = sortUsersByName(temp);
    setGroupUsers(temp);
  }, "initializeGroupUsers");
  React45.useEffect(() => {
    let sortedGroups = [...props.groups];
    if (sortValue) {
      sortGroups(sortedGroups, sortValue);
    } else {
      sortedGroups.sort((a, b) => a.group_name.localeCompare(b.group_name));
    }
    if (!displayInactiveGroups) {
      sortedGroups = sortedGroups.filter((group) => group.active);
    }
    setFoundGroups(sortedGroups);
    if (sortedGroups.length > 0) {
      props.groupDetails ? props.getGroupsDetails(props.groupDetails.group_id, true) : props.getGroupsDetails(sortedGroups[0].group_id, true);
    }
  }, [props.groups]);
  React45.useEffect(() => {
    if (props.groupDetails && !props.groupDetailsLoading && !props.groupListLoading) {
      setGroupActive(props.groupDetails.active);
      addTableRowHandler();
      initializeGroupUsers();
    }
  }, [foundGroups, props.groupDetails]);
  const addTableRowHandler = /* @__PURE__ */ __name(() => {
    const table = document.getElementById("group-list-table");
    const rows = table.getElementsByTagName("tr");
    for (let i = 0; i < rows.length; i++) {
      const currentRow = rows[i];
      const createClickHandler = /* @__PURE__ */ __name((i2, currRow) => {
        return () => {
          setUserSelected(false);
          setAllUsersSelection(false);
          props.getGroupsDetails(foundGroups[i2].group_id, true);
          removeSiblingsBorder(currentRow);
          currRow.classList.add("user-selected-row");
        };
      }, "createClickHandler");
      const editButton = currentRow.getElementsByClassName("groups-edit-button")[0];
      if (currentRow.getAttribute("id") === props.groupDetails.group_id) {
        currentRow.onclick = null;
        currentRow.classList.add("user-selected-row");
        if (editButton) {
          editButton.onclick = showEditGroupsModal;
        }
      } else {
        currentRow.onclick = createClickHandler(i, currentRow);
        if (editButton) {
          editButton.onclick = null;
        }
      }
    }
  }, "addTableRowHandler");
  const deleteSelectedGroupUsers = /* @__PURE__ */ __name(() => {
    const selectedUsers = [];
    groupUsers.map((user) => {
      if (user.checked) {
        selectedUsers.push(user.email);
      }
    });
    dispatch(
      showDialog(
        <DeleteGroupUsersDialog_default
          selectedUsers={selectedUsers}
          deleteGroupUsers={props.deleteGroupUsers}
          group_id={props.groupDetails.group_id}
          group_name={props.groupDetails.group_name}
        />
      )
    );
  }, "deleteSelectedGroupUsers");
  const removeSiblingsBorder = /* @__PURE__ */ __name((row) => {
    if (!row.parentNode) {
      return;
    }
    let sibling = row.parentNode.firstChild;
    row.parentNode.firstChild.classList.remove("user-selected-row");
    while (sibling) {
      if (sibling.nodeType === 1 && sibling !== row) {
        sibling.classList.remove("user-selected-row");
        sibling.getElementsByClassName("groups-edit-button").onclick = null;
      }
      sibling = sibling.nextSibling;
    }
    return;
  }, "removeSiblingsBorder");
  const filter = /* @__PURE__ */ __name((e) => {
    const keyword = e.target.value;
    let sortedGroups = [...props.groups];
    if (!displayInactiveGroups) {
      sortedGroups = sortedGroups.filter((group) => group.active);
    }
    const results = keyword !== "" ? sortedGroups.filter((group) => {
      return group.group_name.toLowerCase().includes(keyword.toLowerCase());
    }) : sortedGroups;
    setFoundGroups(results);
    setSearchCriteria(keyword);
  }, "filter");
  const showCreateGroupsModal = /* @__PURE__ */ __name(() => {
    dispatch(showDialog(<CreateGroupsDialog_default groups={props.groups} createGroups={props.createGroups} />));
  }, "showCreateGroupsModal");
  const showInviteUsersModal = /* @__PURE__ */ __name(() => {
    dispatch(
      showDialog(
        <InviteUsersDialog_default
          locale={getConstantFromLocalStorage(LS_LOCALE)}
          groups={props.groups}
          inviteUsers={props.inviteUsers}
          rejectedUsers={props.rejectedUsers}
        />
      )
    );
  }, "showInviteUsersModal");
  const showEditGroupsModal = /* @__PURE__ */ __name(() => {
    dispatch(
      showDialog(
        <EditGroupsDialog_default
          groups={props.groups}
          groupDetails={props.groupDetails}
          editGroup={props.editGroup}
          deleteGroup={props.deleteGroup}
        />
      )
    );
  }, "showEditGroupsModal");
  const showAddGroupMembersDialog = /* @__PURE__ */ __name(() => {
    dispatch(
      showDialog(
        <AddGroupMembersDialog_default users={props.users} groupDetails={props.groupDetails} inviteUsers={props.inviteUsers} />
      )
    );
  }, "showAddGroupMembersDialog");
  React45.useEffect(() => {
    if (isEditingRights) {
      showEditGroupsRightsModal();
    }
  }, [currentRights]);
  const onRightsChange = /* @__PURE__ */ __name((verifiedRights) => {
    setCurrentRights(verifiedRights);
  }, "onRightsChange");
  const onRightsInit = /* @__PURE__ */ __name((verifiedRights) => {
    setDefaultRights(verifiedRights);
    setCurrentRights(verifiedRights);
  }, "onRightsInit");
  const onSaveRights = /* @__PURE__ */ __name((setGroupsRightSaveClicked) => {
    return () => {
      setDefaultRights({});
      setCurrentRights({});
      setIsEditingRights(false);
      setGroupsRightSaveClicked(false);
      dispatch(hideDialog());
    };
  }, "onSaveRights");
  const renderGroupRights = /* @__PURE__ */ __name((groupsRightSaveClicked, setGroupsRightSaveClicked) => {
    return <GroupsRights_default
      isReadonly={false}
      t={t}
      name={props.groupDetails.group_name}
      site={props.site}
      rights={props.groupDetails.rights}
      groupsRightSaveClicked={groupsRightSaveClicked}
      description={props.groupDetails.description}
      rightsGlobal={props.groupDetails.rights_global}
      onRightsChange={onRightsChange}
      onRightsInit={onRightsInit}
      groupId={props.groupDetails.group_id}
      onSave={onSaveRights(setGroupsRightSaveClicked)}
    />;
  }, "renderGroupRights");
  const onGroupRightsDialogClose = /* @__PURE__ */ __name(() => {
    setIsEditingRights(false);
    dispatch(hideDialog());
  }, "onGroupRightsDialogClose");
  const showEditGroupsRightsModal = /* @__PURE__ */ __name(() => {
    if (!isEditingRights) {
      setIsEditingRights(true);
    }
    dispatch(
      showDialog(
        <GroupsRightsDialog_default
          t={t}
          hideDialog={onGroupRightsDialogClose}
          defaultRights={defaultRights}
          currentRights={currentRights}
          content={renderGroupRights}
        />
      )
    );
  }, "showEditGroupsRightsModal");
  const handleChange = /* @__PURE__ */ __name((selectedValue) => () => {
    userSettings.set(username, "userSettings.groupListSorting" /* GROUP_LIST_SORTING */, selectedValue);
    setSortValue(selectedValue);
    const sortedGroups = [...foundGroups];
    sortGroups(sortedGroups, selectedValue);
    setFoundGroups(sortedGroups);
  }, "handleChange");
  const handleNewChange = /* @__PURE__ */ __name((selectedValue) => () => {
    switch (selectedValue) {
      case "newUser" /* newUser */:
        showInviteUsersModal();
        break;
      case "newGroup" /* newGroup */:
        showCreateGroupsModal();
        break;
    }
  }, "handleNewChange");
  const checkUsersSelection = /* @__PURE__ */ __name(() => {
    setUserSelected(false);
    groupUsers.map((user) => {
      if (user.checked) {
        setUserSelected(true);
      }
    });
  }, "checkUsersSelection");
  const checkBoxChangeHandler = /* @__PURE__ */ __name((index, rowId) => {
    const temp = [...groupUsers];
    temp[index].checked = !temp[index].checked;
    if (temp[index].checked) {
      document.getElementById(rowId).classList.add("group-users-selected-row");
    } else {
      document.getElementById(rowId).classList.remove("group-users-selected-row");
    }
    setGroupUsers(temp);
    checkUsersSelection();
    let allChecked = true;
    for (let i = 0; i < temp.length; i++) {
      if (!(isCurrentGroupAdmin() && temp[i].user_name === username)) {
        if (!temp[i].checked) {
          allChecked = false;
        }
      }
    }
    setAllUsersSelection(allChecked);
  }, "checkBoxChangeHandler");
  const getUsersCountLabel = /* @__PURE__ */ __name((active, numberOfUsers) => {
    if (!active) {
      return t("profile.inactive");
    } else if (numberOfUsers > 1 || numberOfUsers === 0) {
      return numberOfUsers + " " + t("profile.users");
    }
    return numberOfUsers + " " + t("profile.user");
  }, "getUsersCountLabel");
  const allUsersCheckBoxChangeHandler = /* @__PURE__ */ __name(() => {
    setAllUsersSelection(!allUsersSelection);
    const temp = [...groupUsers];
    const table = document.getElementById("group-user-list-table");
    const rows = table.getElementsByTagName("tr");
    if (!allUsersSelection) {
      temp.map((user) => {
        user.checked = true;
      });
      for (let i = 1; i < rows.length; i++) {
        const currentRow = rows[i];
        currentRow.classList.add("group-users-selected-row");
      }
    } else {
      temp.map((user) => {
        user.checked = false;
      });
      for (let i = 1; i < rows.length; i++) {
        const currentRow = rows[i];
        currentRow.classList.remove("group-users-selected-row");
      }
    }
    setGroupUsers(temp);
    checkUsersSelection();
  }, "allUsersCheckBoxChangeHandler");
  const toggleActiveGroupsDiplay = /* @__PURE__ */ __name(() => {
    const changed = !displayInactiveGroups;
    userSettings.set(username, "userSettings.groupListShowInactive" /* GROUP_LIST_SHOW_INACTIVE */, changed);
    setDisplayInactiveGroups(changed);
    let sortedGroups = [...props.groups];
    if (displayInactiveGroups) {
      sortedGroups = sortedGroups.filter((group) => group.active);
    }
    setFoundGroups(sortedGroups);
    if (!props.groupDetails.active) {
      props.getGroupsDetails(sortedGroups[0].group_id);
    } else {
      props.getGroupsDetails(props.groupDetails.group_id);
    }
  }, "toggleActiveGroupsDiplay");
  const isSortActiveClass = React45.useCallback(
    (value) => {
      return cx5({ "vai-menu-button__list-item--active": sortValue && sortValue === value });
    },
    [sortValue]
  );
  React45.useEffect(() => {
    setTriggerUpdate(/* @__PURE__ */ new Date());
  }, [groupDetailsContentRef?.current, topRef?.current]);
  const getGroupUsersTableHeight = /* @__PURE__ */ __name(() => {
    const allInitialized = topRef?.current != null && groupDetailsContentRef?.current != null;
    if (!allInitialized)
      return HUNDRED_PCT;
    const topRefStyles = getStyleValues(topRef.current);
    const topRefPadTop = topRefStyles.getPaddingTop();
    const topRefPadBottom = topRefStyles.getPaddingBottom();
    const topRefMarginTop = topRefStyles.getMarginTop();
    const topRefMarginBottom = topRefStyles.getMarginBottom();
    const detailsRefStyles = getStyleValues(groupDetailsContentRef.current);
    const detailsRefPadTop = detailsRefStyles.getPaddingTop();
    const detailsRefPadBottom = detailsRefStyles.getPaddingBottom();
    const allRelevantSpacing = topRefPadTop + topRefPadBottom + topRefMarginTop + topRefMarginBottom + detailsRefPadTop + detailsRefPadBottom;
    return groupDetailsContentRef.current.clientHeight - topRef.current.clientHeight - allRelevantSpacing;
  }, "getGroupUsersTableHeight");
  const renderGroupTable = /* @__PURE__ */ __name(() => {
    let tableInner;
    if (props.groupListLoading) {
      return <CenteredSpinner_default htmlId="group-list-spinner" />;
    }
    if (foundGroups.length < 1 && searchCriteria.length > 0) {
      tableInner = <TableRow7 htmlId="groups-active-search-result">{displayInactiveGroups ? t("profile.InactiveGroupsEmptySearchResult") : t("profile.ActiveGroupsEmptySearchResult")}</TableRow7>;
    } else {
      tableInner = <>{foundGroups.map((row) => <TableRow7
        key={row.group_name}
        className={cx5({ "user-and-group-row-deactive": !row.active })}
        htmlId={row.group_id}
        data-ta={TEST_IDS.group_list_row}
      >
        <TableCell7 htmlId={`${row.group_id}__icon`} dataTa="table-cell__icon"><Icon24 name={IconName16.UserGroup} /></TableCell7>
        <TableCell7 htmlId={`${row.group_id}__group-name`} dataTa="table-cell__name">{row.group_name.trim()}</TableCell7>
        <TableCell7 htmlId={`${row.group_id}__edit-button`} dataTa="table-cell__edit-button"><Button33
          id="groups-edit-button"
          className="groups-edit-button"
          data-ta={TEST_IDS.group_list_item_edit_button}
          buttonType={ButtonType28.Secondary}
          buttonSize={Size45.S}
          disabled={isAdminGroup(row)}
        ><Icon24
          htmlId={`${row.group_id}__edit-button--icon`}
          dataTa={TEST_IDS.groups_edit_group_button}
          name={IconName16.Edit}
        /></Button33></TableCell7>
        <TableCell7
          htmlId={`${row.group_id}__user-count`}
          dataTa="table-cell__count"
          className="grey-medium no-word-wrap"
        >{getUsersCountLabel(row.active, row.users.length)}</TableCell7>
      </TableRow7>)}</>;
    }
    return <Table7 tableStyle={TableStyle6.Plain} className="user-and-group-table" htmlId="group-list-table"><TableBody7>{tableInner}</TableBody7></Table7>;
  }, "renderGroupTable");
  const renderListHeader = /* @__PURE__ */ __name(() => {
    return <>
      <InputField15
        htmlId="group-search-input"
        name="search"
        width={Size45.Container}
        placeholder="Search"
        value={searchCriteria}
        onChange={filter}
        endIcon={<Icon24 name={IconName16.Search} size={Size45.M} />}
      />
      <br />
      <Flex25 justifyContent="space-between">
        <MenuButton3 htmlId="group-sort-groups">
          <MenuButtonToggle3 htmlId="group-sort-groups-toggle" buttonType={ButtonType28.Secondary}>{t("profile.sort")}</MenuButtonToggle3>
          <MenuButtonList3 htmlId="group-sort-groups-ul">
            <MenuButtonListItem3
              htmlId="group-sort-groups__item--by-name"
              className={isSortActiveClass("byName" /* byName */)}
              onSelect={handleChange("byName" /* byName */)}
            >{t("profile.byName")}</MenuButtonListItem3>
            <MenuButtonListItem3
              htmlId="group-sort-groups__item--by-most-recent-changes"
              className={isSortActiveClass("byMostRecentChanges" /* byMostRecentChanges */)}
              onSelect={handleChange("byMostRecentChanges" /* byMostRecentChanges */)}
            >{t("profile.byMostRecentChanges")}</MenuButtonListItem3>
            <MenuButtonListItem3
              htmlId="group-sort-groups__item--by-number-of-users-asc"
              className={isSortActiveClass("byNumberOfUsersAsc" /* byNumberOfUsersAsc */)}
              onSelect={handleChange("byNumberOfUsersAsc" /* byNumberOfUsersAsc */)}
            >{t("profile.byNumberOfUsersAscending")}</MenuButtonListItem3>
            <MenuButtonListItem3
              htmlId="group-sort-groups__item--by-number-of-users-desc"
              className={isSortActiveClass("byNumberOfUsersDesc" /* byNumberOfUsersDesc */)}
              onSelect={handleChange("byNumberOfUsersDesc" /* byNumberOfUsersDesc */)}
            >{t("profile.byNumberOfUsersDescending")}</MenuButtonListItem3>
          </MenuButtonList3>
        </MenuButton3>
        <Button33
          id="group-create-report"
          htmlId="group-create-report"
          style={{ marginLeft: VaiSpacing3.M }}
          buttonType={ButtonType28.Secondary}
          startIcon={<Icon24 name={VaiIcon15.Document} />}
        >{t("profile.report")}</Button33>
        <MenuButton3 id="group-new-users-groups" style={{ marginLeft: VaiSpacing3.M }}>
          <MenuButtonToggle3 htmlId="group-new-users-groups__toggle">{t("profile.new")}</MenuButtonToggle3>
          <MenuButtonList3 htmlId="group-new-users-groups__list">
            <MenuButtonListItem3
              htmlId="group-new-users-groups__item--new-group"
              onSelect={handleNewChange("newGroup" /* newGroup */)}
            >{t("profile.newGroup")}</MenuButtonListItem3>
            <MenuButtonListItem3
              htmlId="group-new-users-groups__item--new-user"
              onSelect={handleNewChange("newUser" /* newUser */)}
            >{t("profile.inviteUser")}</MenuButtonListItem3>
          </MenuButtonList3>
        </MenuButton3>
      </Flex25>
      <Flex25 className="vai-padding-top-m vai-padding-bottom-s" justifyContent="space-between">
        <FlexItem16 id="group-count" alignSelf="center" flexBasis="40%" className="count-label">
          {foundGroups.length}
          {" "}
          {t("profile.groupsTotal")}
        </FlexItem16>
        <FlexItem16 alignSelf="center" flexBasis={null}><Toggle3
          htmlId="user-show-active-groups-toggle"
          text={t("profile.showInactive")}
          uncheckedText={t("profile.showActive")}
          checked={displayInactiveGroups}
          onChange={toggleActiveGroupsDiplay}
        /></FlexItem16>
      </Flex25>
    </>;
  }, "renderListHeader");
  const groupListContent = <Paper4 htmlId="group-list-paper" className="user-list-paper">
    {renderListHeader()}
    <div className="user-and-group-table-wrapper">{renderGroupTable()}</div>
  </Paper4>;
  const activeToggleChange = /* @__PURE__ */ __name((toggleVal) => {
    dispatch(
      showDialog(
        <GroupActivationDialog_default
          groupDetails={props.groupDetails}
          toggleGroupActivation={props.toggleGroupActivation}
          groupActive={toggleVal}
        />
      )
    );
  }, "activeToggleChange");
  const onRightsExpanded = /* @__PURE__ */ __name((expanded) => {
    setTimeout(() => setTriggerUpdate(/* @__PURE__ */ new Date()), 100);
  }, "onRightsExpanded");
  const isCurrentGroupAdmin = React45.useCallback(() => {
    return isAdminGroup(props.groupDetails);
  }, [props.groupDetails]);
  const renderGroupDetail = /* @__PURE__ */ __name(() => {
    if (props.groupDetailsLoading || !props.groupDetails) {
      return <CenteredSpinner_default htmlId="group-details-spinner" />;
    }
    return <>
      <Stack2 htmlId="top" ref={topRef} className="vai-margin-bottom-l" spacing={Size45.L}>
        <Flex25 justifyContent="space-between" alignItems="center">
          <FlexItem16 alignSelf="flex-start" flexShrink={0}>
            <p id="group-title" className="group-title">{props.groupDetails.group_name}</p>
            <p id="group-description-message" className="group-edit-description">{props?.groupDetails?.description ? props.groupDetails.description.trim() : t("profile.groupEditDescripitionMessage")}</p>
          </FlexItem16>
          <FlexItem16 flexBasis="100px" className="vai-margin-right-xs"><Flex25 justifyContent="flex-end" style={{ whiteSpace: "nowrap" }}><Toggle3
            text={t("profile.active")}
            htmlId="group-activation-toggle"
            uncheckedText={t("profile.inactive")}
            checked={groupActive}
            onChange={activeToggleChange}
          /></Flex25></FlexItem16>
        </Flex25>
        <Flex25 justifyContent="space-between" alignItems="center">
          <FlexItem16 flexBasis="75%"><p id="group-rights-title" className="group-group-Title">{t("profile.siteRightsTitle")}</p></FlexItem16>
          <FlexItem16><Flex25>
            <Button33
              id="group-edit-button"
              htmlId="group-edit-button"
              buttonType={ButtonType28.Link}
              onClick={showEditGroupsRightsModal}
              buttonSize={Size45.S}
              style={{ visibility: isCurrentGroupAdmin() ? "hidden" : "visible" }}
            >{t("general.edit")}</Button33>
            <Infotip_default2
              htmlId="group-info-button"
              popoverProps={{ className: "group-rights-infotip" }}
              iconProps={{ className: "vai-margin-vertical-s vai-margin-left-m" }}
            />
          </Flex25></FlexItem16>
        </Flex25>
        <div className="site-tree-accordion-container"><GroupsRights_default
          isReadonly={true}
          t={t}
          site={props.site}
          rights={props.groupDetails.rights}
          smallView={true}
          onExpanded={onRightsExpanded}
        /></div>
        <Separator10 />
        <Flex25>
          <FlexItem16 alignSelf="flex-start" flexBasis="80%"><p id="group-members-title" className="group-group-Title">{t("profile.groupMembersTitle")}</p></FlexItem16>
          <FlexItem16 alignSelf="flex-end" flexBasis="20%"><Flex25>
            <Button33
              id="group-add-group-members-button"
              htmlId="group-add-group-members-button"
              dataTa={TEST_IDS.groups_add_group_member_button}
              buttonType={ButtonType28.Link}
              buttonSize={Size45.S}
              onClick={showAddGroupMembersDialog}
            >{t("general.add")}</Button33>
            <Button33
              id="group-delete-groups-button"
              htmlId="group-delete-groups-button"
              buttonType={ButtonType28.Link}
              buttonSize={Size45.S}
              disabled={!userSelected}
              onClick={deleteSelectedGroupUsers}
            ><Icon24 id="group-trash-icon" name={IconName16.Trash} /></Button33>
          </Flex25></FlexItem16>
        </Flex25>
      </Stack2>
      <div
        id="group-user-list-table-wrapper"
        style={{ height: getGroupUsersTableHeight() }}
        className="group-user-list-table-wrapper"
      ><Table7
        htmlId="group-user-list-table"
        tableStyle={TableStyle6.Plain}
        className="user-borderless-table user-and-group-table"
      >
        <TableHead2><TableRow7>
          <TableCell7 className="groups-table-checkbox-cell"><Checkbox7
            id="group-all-user-selection"
            checked={allUsersSelection}
            onChange={allUsersCheckBoxChangeHandler}
          /></TableCell7>
          <TableCell7 id="group-user-list-table-genaral">{t("general.name")}</TableCell7>
          <TableCell7 id="group-user-list-table-groups">{t("profile.groups")}</TableCell7>
          <TableCell7 id="group-user-list-table-phone">{t("profile.phoneNumber")}</TableCell7>
          <TableCell7 id="group-user-list-table-email">{t("general.email")}</TableCell7>
        </TableRow7></TableHead2>
        <TableBody7>{groupUsers.map((row, index) => <TableRow7
          key={row.user_name}
          className={row.active ? "" : "user-and-group-row-deactive"}
          htmlId={row.user_name}
        >
          <TableCell7>{isCurrentGroupAdmin() && row.user_name === username ? null : <Checkbox7
            id="group-row-user-name"
            checked={row.checked}
            onChange={() => checkBoxChangeHandler(index, row.user_name)}
          />}</TableCell7>
          <TableCell7><Flex25>
            <FlexItem16
              id={`group-user-list-profile-pic-${row.user_name}`}
              alignSelf="center"
              flexBasis="20%"
            >{row.picture ? <img
              id={`group-user-list-profile-img-${row.user_name}`}
              src={row.picture}
              className="user-profile-picture-icon"
            /> : <Icon24 id={`group-user-list-profile-icon-${row.user_name}`} name={IconName16.User} />}</FlexItem16>
            <FlexItem16
              id={`group-user-list-name-${row.user_name}`}
              className="vai-margin-left-s"
              alignSelf="center"
              flexBasis="80%"
            >{row.first_name + " " + row.last_name.trim()}</FlexItem16>
          </Flex25></TableCell7>
          <TableCell7 id={`group-user-list-groups-count-${row.user_name}`}>{row.groups.length}</TableCell7>
          <TableCell7 id={`group-user-list-phone-${row.user_name}`}>{row.phone}</TableCell7>
          <TableCell7><Flex25 justifyContent="space-between" alignItems="center">
            <Flex25.Item id={`group-user-list-email-${row.user_name}`}>{row.email}</Flex25.Item>
            {!row.active ? <Flex25.Item id={`group-user-list-activation-${row.user_name}`} className="vai-margin-left-m">{t("profile.inactive")}</Flex25.Item> : null}
            {isCurrentGroupAdmin() && row.user_name === username && <Infotip_default
              htmlId="cannot-remove-self-from-admin-infotip"
              iconProps={{ className: "vai-margin-horizontal-xs" }}
            >
              {
                /* NOTE: Popovers don't seem to honour /r/n or HTML in translation tags so the paragraphs are split */
              }
              {t("infotip.cannotRemoveSelfFromAdminPara1")}
              <br />
              <br />
              {t("infotip.cannotRemoveSelfFromAdminPara2")}
            </Infotip_default>}
          </Flex25></TableCell7>
        </TableRow7>)}</TableBody7>
      </Table7></div>
    </>;
  }, "renderGroupDetail");
  const groupDetailsContent = !props.groupDetails && !props.groupDetailsLoading ? null : <Paper4 ref={groupDetailsContentRef} className="user-profile-paper">{renderGroupDetail()}</Paper4>;
  return <Flex25>
    <FlexItem16 alignSelf="flex-start" className="vai-margin-right-75-rem" flexBasis="23%">{groupListContent}</FlexItem16>
    <FlexItem16 alignSelf="flex-start" flexBasis="77%">{groupDetailsContent}</FlexItem16>
  </Flex25>;
}, "Group");
var Group_default = Group;

// ../vlncc-frontend/src/components/profile/index.tsx
var Profile = /* @__PURE__ */ __name((props) => {
  const {
    getUserProfile: getUserProfile2,
    getGroupsDetails: getGroupsDetails2,
    users,
    userListLoading,
    groupListLoading,
    userProfileLoading,
    userProfile,
    toggleUserActivation: toggleUserActivation2,
    toggleGroupActivation: toggleGroupActivation2,
    editProfile: editProfile2,
    createGroups: createGroups2,
    userRefresh,
    groupRefresh,
    editProfileSucceedFlag,
    editProfileError,
    inviteUsers: inviteUsers2,
    groups,
    deleteUser: deleteUser2,
    rejectedUsers,
    groupDetails,
    groupDetailsLoading,
    editGroup: editGroup2,
    deleteGroup: deleteGroup2,
    deleteGroupUsers: deleteGroupUsers2,
    getMyProfile: getMyProfile2,
    myProfile,
    site
  } = props;
  const profileTabs = [
    {
      tabKey: "groups",
      title: "groups",
      translationKey: "profile.groups"
    },
    {
      tabKey: "users",
      title: "Users",
      translationKey: "profile.users"
    }
  ];
  return <Routes3><Route3 path="/" element={<TabNavigation noPaper={true} tabs={profileTabs} />}>
    <Route3 index element={<Navigate2 to="groups" />} />
    <Route3
      path="groups"
      element={<Group_default
        groups={groups}
        toggleGroupActivation={toggleGroupActivation2}
        createGroups={createGroups2}
        editGroup={editGroup2}
        groupRefresh={groupRefresh}
        groupListLoading={groupListLoading}
        groupDetails={groupDetails}
        groupDetailsLoading={groupDetailsLoading}
        getGroupsDetails={getGroupsDetails2}
        deleteGroup={deleteGroup2}
        deleteGroupUsers={deleteGroupUsers2}
        inviteUsers={inviteUsers2}
        users={users}
        site={site}
        rejectedUsers={rejectedUsers}
      />}
    />
    <Route3
      path="users"
      element={<User_default
        createGroups={createGroups2}
        getUserProfile={getUserProfile2}
        users={users}
        userListLoading={userListLoading}
        userProfileLoading={userProfileLoading}
        userProfile={userProfile}
        toggleUserActivation={toggleUserActivation2}
        editProfile={editProfile2}
        userRefresh={userRefresh}
        editProfileSucceedFlag={editProfileSucceedFlag}
        editProfileError={editProfileError}
        inviteUsers={inviteUsers2}
        groups={groups}
        deleteUser={deleteUser2}
        rejectedUsers={rejectedUsers}
        getMyProfile={getMyProfile2}
        myProfile={myProfile}
        site={site}
      />}
    />
  </Route3></Routes3>;
}, "Profile");
var Profile_default = Profile;

// ../vlncc-frontend/src/containers/Profile.tsx
var mapDispatchToProps6 = /* @__PURE__ */ __name((dispatch) => ({
  getUsers: () => dispatch(profileDispatchActions.getUsers()),
  getUserProfile: (userName, includeRights) => dispatch(profileDispatchActions.getUserProfile(userName, includeRights)),
  getMyProfile: () => dispatch(profileDispatchActions.getMyProfile()),
  toggleUserActivation: (isActive, userName) => dispatch(profileDispatchActions.toggleUserActivation(isActive, userName)),
  editProfile: (userProfile) => dispatch(profileDispatchActions.editProfile(userProfile)),
  getGroups: () => dispatch(profileDispatchActions.getGroups()),
  inviteUsers: (users, dispatcher, name) => dispatch(profileDispatchActions.inviteUsers(users, dispatcher, name)),
  deleteUser: (userName) => dispatch(profileDispatchActions.deleteUser(userName)),
  createGroups: (group) => dispatch(profileDispatchActions.createGroups(group)),
  getGroupsDetails: (groupId, includeRights) => dispatch(profileDispatchActions.getGroupsDetails(groupId, includeRights)),
  editGroup: (group) => dispatch(profileDispatchActions.editGroup(group)),
  deleteGroup: (groupId) => dispatch(profileDispatchActions.deleteGroup(groupId)),
  toggleGroupActivation: (isActive, groupId, groupName) => dispatch(profileDispatchActions.toggleGroupActivation(isActive, groupId, groupName)),
  deleteGroupUsers: (users, groupId) => dispatch(profileDispatchActions.deleteGroupUsers(users, groupId))
}), "mapDispatchToProps");
var mapStateToProps7 = /* @__PURE__ */ __name(({ profile, general }) => ({
  profile,
  language: general.language
}), "mapStateToProps");
var ProfileContainer = /* @__PURE__ */ __name(({
  profile,
  getUserProfile: getUserProfile2,
  getGroupsDetails: getGroupsDetails2,
  getGroups: getGroups2,
  getUsers: getUsers2,
  toggleGroupActivation: toggleGroupActivation2,
  toggleUserActivation: toggleUserActivation2,
  createGroups: createGroups2,
  editGroup: editGroup2,
  editProfile: editProfile2,
  inviteUsers: inviteUsers2,
  deleteGroup: deleteGroup2,
  deleteUser: deleteUser2,
  deleteGroupUsers: deleteGroupUsers2,
  getMyProfile: getMyProfile2
}) => {
  const [isLoading, setLoading] = React46.useState(true);
  const customerId = getConstantFromLocalStorage(LS_COMPANY_CUSTOMER_ID);
  const { username } = useGetUsername_default();
  const siteId = PARENT_SITE_KEY;
  const { data: site, isLoading: siteIsLoading } = useGetSiteQuery(
    { customerId, username, siteId },
    { skip: username === "undefined" || username === void 0 || username === null }
  );
  React46.useEffect(() => {
    setLoading(true);
    getUsers2();
    getGroups2();
    setLoading(false);
  }, [profile.userRefresh, profile.groupRefresh]);
  if ((!profile.users || !profile.groups) && !isLoading && !siteIsLoading) {
    return <><EmptyState heading="profile.hasNoRightsToAccessPage" illustration={"nothingSelected" /* nothingSelected */} /></>;
  }
  return <Profile_default
    getUserProfile={getUserProfile2}
    getGroupsDetails={getGroupsDetails2}
    users={profile.users}
    userListLoading={profile.userListLoading}
    groupListLoading={profile.groupListLoading}
    userProfileLoading={profile.userProfileLoading}
    userProfile={profile.userProfile}
    toggleUserActivation={toggleUserActivation2}
    createGroups={createGroups2}
    editGroup={editGroup2}
    editProfile={editProfile2}
    inviteUsers={inviteUsers2}
    userRefresh={profile.userRefresh}
    groupRefresh={profile.groupRefresh}
    editProfileSucceedFlag={profile.isEditProfileSucceed}
    editProfileError={profile.editProfileError}
    groups={profile.groups}
    groupDetails={profile.groupDetails}
    groupDetailsLoading={profile.groupDetailsLoading}
    deleteUser={deleteUser2}
    deleteGroup={deleteGroup2}
    deleteGroupUsers={deleteGroupUsers2}
    rejectedUsers={profile.rejectedUsers}
    getMyProfile={getMyProfile2}
    myProfile={profile.myProfile}
    toggleGroupActivation={toggleGroupActivation2}
    site={site}
  />;
}, "ProfileContainer");
var Profile_default2 = connect8(mapStateToProps7, mapDispatchToProps6)(ProfileContainer);

// ../vlncc-frontend/src/containers/Events.tsx
import { connect as connect9 } from "react-redux";

// ../vlncc-frontend/src/components/Events/Events.tsx
import * as React51 from "react";
import { useEffect as useEffect33 } from "react";
import { Paper as Paper5 } from "@vaisala-rockhopper/components";

// ../vlncc-frontend/src/components/Events/EventFilterBar.tsx
import * as React48 from "react";
import { Icon as Icon26 } from "@vaisala-rockhopper/components";
import { VaiIcon as VaiIcon17 } from "@vaisala-rockhopper/design-tokens";
import { subDays as subDays2, format as format3 } from "date-fns";
import { Form as Form15, Size as Size46, InputField as InputField16, Button as Button34, ButtonType as ButtonType30, DatePicker, Select as Select7 } from "@vaisala-rockhopper/components";
import "./event-filter-bar.scss";
import cx6 from "classnames";
import { useTranslation as useTranslation51 } from "react-i18next";

// ../vlncc-frontend/src/components/BaseComponents/TimePicker/TimePicker.tsx
import * as React47 from "react";
import {
  MenuButton as MenuButton4,
  MenuButtonListItem as MenuButtonListItem4,
  MenuButtonToggle as MenuButtonToggle4,
  Icon as Icon25,
  ButtonType as ButtonType29,
  MenuButtonList as MenuButtonList4
} from "@vaisala-rockhopper/components";
import { VaiIcon as VaiIcon16 } from "@vaisala-rockhopper/design-tokens";
import { format as format2 } from "date-fns";
import "./timepicker.scss";
import { useRef as useRef5 } from "react";
var TimePicker = /* @__PURE__ */ __name((props) => {
  const [selectedTime, setSelectedTime] = React47.useState(format2(/* @__PURE__ */ new Date(), "HH:mm"));
  const [timeOptions, setTimeOptions] = React47.useState([]);
  const [invalid, setInvalid] = React47.useState(false);
  const listRef = useRef5(null);
  React47.useEffect(() => {
    setTimeOptions(
      generateTimeOptions(getNearestEnabledTimeOption(props.maxTime), getNearestEnabledTimeOption(props.minTime))
    );
  }, [props.maxTime, props.minTime]);
  React47.useEffect(() => {
    setSelectedTime(props.value);
  }, [props.value]);
  React47.useEffect(() => {
    if (props.onInvalidTime) {
      if (isInvalidTime(selectedTime)) {
        props.onInvalidTime(true);
        setInvalid(true);
      } else {
        props.onInvalidTime(false);
        setInvalid(false);
      }
    }
  }, [timeOptions, selectedTime]);
  const scrollToSelectedTime = /* @__PURE__ */ __name(() => {
    const [hh, mm] = selectedTime.split(":");
    const roundedTime = `${hh}:${roundToMultipleOfFive(Number(mm))}`;
    const selectedTimeOption = listRef.current?.querySelector(`[data-scrollid="${roundedTime}"]`);
    selectedTimeOption?.scrollIntoView({ block: "center" });
  }, "scrollToSelectedTime");
  const isInvalidTime = /* @__PURE__ */ __name((value) => {
    return timeOptions.find((r) => r.value === value && r.disabled);
  }, "isInvalidTime");
  return <div ref={listRef}><MenuButton4 id="time-picker" data-testid={props.testId}>
    <MenuButtonToggle4
      id={props.id}
      className={invalid && "vai-input-field__input--invalid"}
      buttonType={ButtonType29.Secondary}
      endIcon={<Icon25 name={VaiIcon16.Clock} />}
      data-testid="time-picker-toggle"
      onPointerUp={() => {
        scrollToSelectedTime();
      }}
    >{selectedTime}</MenuButtonToggle4>
    <MenuButtonList4>{timeOptions.map((option) => <MenuButtonListItem4
      key={option.value}
      data-scrollid={option.value}
      disabled={option.disabled}
      onSelect={() => {
        setSelectedTime(option.value);
        props.onChange(option.value);
      }}
    >{option.value}</MenuButtonListItem4>)}</MenuButtonList4>
  </MenuButton4></div>;
}, "TimePicker");
var TimePicker_default = TimePicker;

// ../vlncc-frontend/src/components/Events/EventFilterBar.tsx
import { isEmpty as isEmpty3 } from "lodash";
var SELECT_ALL = "Select all";
var CATEGORIES_LIST = [
  SELECT_ALL,
  "Location",
  "Report template",
  "User",
  "Threshold template",
  "Notification",
  "Alarm activation"
];
var ACTIONS_LIST = [
  SELECT_ALL,
  "Created",
  "Modified",
  "Removed",
  "Sent",
  "Downloaded",
  "Alarm on",
  "Alarm off",
  "Activated",
  "Deactivated"
];
var SOURCES_LIST = ["Automated", "User"];
var initialTime = format3(/* @__PURE__ */ new Date(), "HH:mm");
var EMPTY_STRING = "";
var DEFAULT_FILTERS = {
  filter: [],
  fromDate: subDays2(/* @__PURE__ */ new Date(), 1),
  fromDateTime: initialTime,
  todate: /* @__PURE__ */ new Date(),
  toDateTime: initialTime,
  ["search" /* SEARCH */]: EMPTY_STRING,
  ["category" /* CATEGORY */]: [],
  ["action" /* ACTION */]: [],
  ["source" /* SOURCE */]: []
};
var EventFilterBar = /* @__PURE__ */ __name(({
  deviceType,
  rowsCount,
  pagination,
  language,
  getEvents: getEvents2,
  isLoading,
  handleApply
}) => {
  const { t } = useTranslation51();
  const [showExtraFilters, setShowExtraFilters] = React48.useState(false);
  const [eventFilters, setEventFilters] = React48.useState(DEFAULT_FILTERS);
  const extraFiltersclassName = cx6("events-event-filter-extras", {
    show: showExtraFilters
  });
  React48.useEffect(() => {
    doEventsQuery();
  }, [pagination]);
  const toggleExtraFilters = /* @__PURE__ */ __name(() => {
    setShowExtraFilters((value) => !value);
  }, "toggleExtraFilters");
  const doEventsQuery = /* @__PURE__ */ __name(() => {
    const fromDateTime = eventFilters.fromDateTime.split(":").map((x) => parseInt(x));
    const from = eventFilters.fromDate.setHours(fromDateTime[0], fromDateTime[1]);
    const toDateTime = eventFilters.toDateTime.split(":").map((x) => parseInt(x));
    const to = eventFilters.todate.setHours(toDateTime[0], toDateTime[1]);
    const query = { from, to, start: pagination.rowIndex, size: pagination.rowCount };
    if (eventFilters.search && eventFilters.search.trim()) {
      query["search" /* SEARCH */] = eventFilters.search.trim();
    }
    if (eventFilters.category && eventFilters.category.length > 0) {
      query["category" /* CATEGORY */] = eventFilters.category.join(",");
    }
    if (eventFilters.action && eventFilters.action.length > 0) {
      query["action" /* ACTION */] = eventFilters.action.join(",");
    }
    if (eventFilters.source && eventFilters.source.length > 0) {
      query["source_type"] = eventFilters.source.join(",");
    }
    query["locale"] = language;
    getEvents2(query);
  }, "doEventsQuery");
  const onChange = /* @__PURE__ */ __name((value, name) => {
    setEventFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  }, "onChange");
  const handleCategoryChange = /* @__PURE__ */ __name((options) => {
    const lastItem = options[options.length - 1];
    if (lastItem === SELECT_ALL) {
      onChange(CATEGORIES_LIST, "category" /* CATEGORY */);
    } else {
      onChange(options, "category" /* CATEGORY */);
    }
  }, "handleCategoryChange");
  const handleActionChange = /* @__PURE__ */ __name((options) => {
    const lastItem = options[options.length - 1];
    if (lastItem === SELECT_ALL) {
      onChange(ACTIONS_LIST, "action" /* ACTION */);
    } else {
      onChange(options, "action" /* ACTION */);
    }
  }, "handleActionChange");
  const handleSourceChange = /* @__PURE__ */ __name((options) => {
    onChange(options, "source" /* SOURCE */);
  }, "handleSourceChange");
  const handleInputChange = /* @__PURE__ */ __name((event) => {
    const { name, value } = event.target;
    setEventFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  }, "handleInputChange");
  const handleKeyDown = /* @__PURE__ */ __name((event) => {
    if (event.key === "Enter") {
      handleApply();
    }
  }, "handleKeyDown");
  const searchLabel = /* @__PURE__ */ __name((rowsCount2) => <>
    <span id="events-event-search-title">{t("events.filterBar.search")}</span>
    <span id="events-event-count">
      {" -"}
      {" "}
      {rowsCount2}
      {" "}
      {t("events.filterBar.events")}
    </span>
  </>, "searchLabel");
  const isExtraFiltersEmpty = isEmpty3(eventFilters.action) && isEmpty3(eventFilters.category) && isEmpty3(eventFilters.source) && isEmpty3(eventFilters.search);
  const onClearFilters = /* @__PURE__ */ __name(() => {
    setEventFilters((prevState) => ({
      ...prevState,
      search: "",
      category: [],
      action: [],
      source: []
    }));
    handleApply();
  }, "onClearFilters");
  return <div id="events-event-filter-bar">
    <div id="events-event-filter-bar-search" className="events-event-filter-search"><Form15.Item label={searchLabel(rowsCount)} className="events-event-filter-bar-search"><InputField16
      id="events-event-filter-bar-search"
      data-testid={TEST_IDS.events_filter_bar_search_field_input}
      value={eventFilters.search}
      onChange={handleInputChange}
      name="search"
      placeholder={t("events.filterBar.search")}
      width={Size46.Container}
      onKeyDown={handleKeyDown}
    /></Form15.Item></div>
    <div id="events-event-filter-bar-date" className="events-event-filter-date">
      <Form15.Item label={t("events.filterBar.from")} labelWidth={Size46.S} className="form-item-datepicker"><DatePicker
        id="events-event-filter-bar-from-date-picker"
        value={eventFilters.fromDate}
        onChange={(value) => {
          onChange(value, "fromDate");
        }}
        width={Size46.Container}
        name="fromDate"
        onKeyDown={handleKeyDown}
      /></Form15.Item>
      <TimePicker_default
        id="events-event-filter-from-time-picker"
        value={eventFilters.fromDateTime}
        onChange={(value) => handleInputChange({ target: { name: "fromDateTime", value } })}
      />
      <Form15.Item label={t("events.filterBar.to")} className="form-item-datepicker"><DatePicker
        id="events-event-filter-bar-to-date-picker"
        value={eventFilters.todate}
        onChange={(value) => {
          onChange(value, "todate");
        }}
        width={Size46.Container}
        name="todate"
      /></Form15.Item>
      <TimePicker_default
        id="events-event-filter-to-time-picker"
        value={eventFilters.toDateTime}
        onChange={(value) => handleInputChange({ target: { name: "toDateTime", value } })}
      />
    </div>
    <div className="events-event-filter-filter"><Button34
      id="events-filter-button"
      buttonSize={Size46.S}
      buttonType={ButtonType30.Secondary}
      startIcon={<Icon26 name={VaiIcon17.ChevronDown} />}
      onClick={toggleExtraFilters}
      className={showExtraFilters ? "active" : null}
    >{t("events.filterBar.filter")}</Button34></div>
    <div className={extraFiltersclassName}>
      <Form15.Item label={t("events.filterBar.category")} className="form-item-filter-category"><Select7
        placeholder={`${t("events.filterBar.filter")} ${t("events.filterBar.category")}`}
        showSearch
        id="events-event-category"
        onChange={handleCategoryChange}
        maxTagCount={1}
        mode="tags"
        onKeyDown={handleKeyDown}
        value={eventFilters.category}
        data-testid={TEST_IDS.events_filter_bar_category_field_select}
      >{CATEGORIES_LIST.map((category, index) => <Select7.Option
        id={`event-category-option-${index}`}
        key={`event-category-option-${index}`}
        value={category}
      >{category}</Select7.Option>)}</Select7></Form15.Item>
      <Form15.Item label={t("events.filterBar.action")}><Select7
        placeholder={`${t("events.filterBar.filter")} ${t("events.filterBar.action")}`}
        showSearch
        id="events-event-action"
        maxTagCount={1}
        onChange={handleActionChange}
        mode="tags"
        onKeyDown={handleKeyDown}
        value={eventFilters.action}
        data-testid={TEST_IDS.events_filter_bar_action_field_select}
      >{ACTIONS_LIST.map((action, index) => <Select7.Option id={`event-action-option-${index}`} key={`event-action-option-${index}`} value={action}>{action}</Select7.Option>)}</Select7></Form15.Item>
      <Form15.Item label={t("events.filterBar.source")}><Select7
        placeholder={`${t("events.filterBar.filter")} ${t("events.filterBar.source")}`}
        showSearch
        id="events-event-source"
        maxTagCount={1}
        onChange={handleSourceChange}
        mode="tags"
        onKeyDown={handleKeyDown}
        value={eventFilters.source}
        data-testid={TEST_IDS.events_filter_bar_source_field_select}
      >{SOURCES_LIST.map((source, index) => <Select7.Option id={`event-source-option-${index}`} key={`event-source-option-${index}`} value={source}>{source}</Select7.Option>)}</Select7></Form15.Item>
      <Button34
        id="events-filter-zone-button"
        buttonSize={Size46.S}
        buttonType={ButtonType30.Secondary}
        startIcon={<Icon26 name={VaiIcon17.TreeControl} />}
        disabled
      >{t("events.filterBar.filterByZone")}</Button34>
      <Button34
        onClick={onClearFilters}
        id="events-filter-clear-button"
        buttonSize={Size46.S}
        buttonType={ButtonType30.Link}
        data-testid={TEST_IDS.events_filter_bar_clear_filters_button}
        disabled={isExtraFiltersEmpty}
      >{t("events.filterBar.clearFiltres")}</Button34>
    </div>
    <div className="events-event-filter-apply"><Button34
      id="events-apply-button"
      buttonSize={deviceType === "MOBILE_PHONE" ? Size46.S : Size46.M}
      type="button"
      onClick={handleApply}
      disabled={isLoading}
      data-testid={TEST_IDS.events_filter_bar_apply_filters_button}
    >{isLoading ? <CenteredSpinner_default htmlId="save-button-spinner" className="" /> : t("events.filterBar.apply")}</Button34></div>
  </div>;
}, "EventFilterBar");
var EventFilterBar_default = EventFilterBar;

// ../vlncc-frontend/src/components/Events/EventsTable.tsx
import * as React49 from "react";
import { DataTable as DataTable2 } from "@vaisala-rockhopper/components";
import "./event-table.scss";
import { useTranslation as useTranslation52 } from "react-i18next";
var headerCells = [
  { key: "object", sortable: true, name: "object" },
  { key: "action", sortable: true, name: "action" },
  { key: "source", sortable: false, name: "source" },
  { key: "category", sortable: false, name: "category" },
  { key: "affectedlocation", sortable: false, name: "location" },
  { key: "parameters", sortable: false, name: "parameters" },
  { key: "time", sortable: false, name: "time" }
];
var EventsTable = /* @__PURE__ */ __name((props) => {
  const { rows, deviceType, isLoading, updateRowVisibleEndIdx, showDetailView, handleOnRowClick } = props;
  const { t } = useTranslation52();
  const [data, setData] = React49.useState({ rows });
  const [tableHeaders, setTableHeaders] = React49.useState(headerCells);
  React49.useEffect(() => {
    setData({ rows });
  }, [rows]);
  React49.useEffect(() => {
    if (!showDetailView) {
      setTableHeaders(headerCells);
    }
  }, [showDetailView]);
  React49.useEffect(() => {
    let cells = headerCells;
    if (deviceType === DEVICE_TYPE[LARGE_SCREEN_IN_PX]) {
      cells = cells.filter((cell) => {
        return cell.key !== "affectedlocation" && cell.key !== "parameters";
      });
    } else if (deviceType === DEVICE_TYPE[SMALL_SCREEN_SIZE_IN_PX]) {
      cells = cells.filter((cell) => {
        return cell.key !== "affectedlocation" && cell.key !== "parameters" && cell.key !== "category" && cell.key !== "source";
      });
    }
    setTableHeaders(cells);
  }, [deviceType]);
  const rowGetter = /* @__PURE__ */ __name((rowIdx) => {
    const row = data.rows[rowIdx];
    if (row?.parameters && Array.isArray(row.parameters) && row.parameters.length > 0) {
      row.parameters = row.parameters.join(", ");
    }
    return row;
  }, "rowGetter");
  const onSort = /* @__PURE__ */ __name((column, direction) => {
    const multiplier = direction === "DESC" ? -1 : 1;
    const rows2 = data.rows.slice().sort((a, b) => (a[column] == b[column] ? 0 : a[column] < b[column] ? 1 : -1) * multiplier);
    setData({ rows: rows2 });
  }, "onSort");
  const handleOnScroll = /* @__PURE__ */ __name((scrollState) => {
    const { rowVisibleEndIdx } = scrollState;
    const isLastRow = rowVisibleEndIdx === rows.length;
    if (isLoading || !isLastRow) {
      return;
    }
    updateRowVisibleEndIdx(rowVisibleEndIdx);
  }, "handleOnScroll");
  const handleRowClick = /* @__PURE__ */ __name((rowIdx, row) => {
    if (rowIdx < 0) {
      return;
    }
    handleOnRowClick(rowIdx, row);
    const headers = [...tableHeaders];
    const filteredHeaders = headers.filter((header) => {
      return ["object", "action", "time", "source"].includes(header.key);
    });
    setTableHeaders(filteredHeaders);
  }, "handleRowClick");
  return <>
    <DataTable2
      columns={tableHeaders.map((cell) => {
        return { ...cell, name: t(`events.table.header.${cell.name}`) };
      })}
      htmlId="events-table"
      rowGetter={rowGetter}
      rowsCount={data.rows.length}
      onSort={onSort}
      minColumnWidth={150}
      minHeight={props.minHeight}
      onScroll={handleOnScroll}
      onRowClick={handleRowClick}
    />
    {isLoading && <div className="loadMoreRows">
      {" "}
      {t("events.table.loading")}
    </div>}
  </>;
}, "EventsTable");
var EventsTable_default = EventsTable;

// ../vlncc-frontend/src/components/Events/EventDetail.tsx
import { useEffect as useEffect32, useState as useState36 } from "react";
import {
  Grid as Grid2,
  Icon as Icon27,
  Heading as Heading15,
  Button as Button35,
  Size as Size47,
  ButtonType as ButtonType31,
  DataTable as DataTable3
} from "@vaisala-rockhopper/components";
import { VaiIcon as VaiIcon18 } from "@vaisala-rockhopper/design-tokens";
import "./event-detail.scss";
import { useTranslation as useTranslation53 } from "react-i18next";
var BooleanValueFormatter = /* @__PURE__ */ __name(({ value }) => {
  if (typeof value === "boolean") {
    return `${value}`;
  }
  return value;
}, "BooleanValueFormatter");
var headerCells2 = [
  { key: "parameter", sortable: true, name: "Parameter" },
  { key: "before", sortable: true, name: "Before", formatter: BooleanValueFormatter },
  { key: "after", sortable: false, name: "After", formatter: BooleanValueFormatter },
  { key: "content", sortable: false, name: "Content" }
];
var sortRows = /* @__PURE__ */ __name((initialRows, sortColumn, sortDirection) => (rows) => {
  const comparer = /* @__PURE__ */ __name((a, b) => {
    if (sortDirection === "ASC") {
      return a[sortColumn] > b[sortColumn] ? 1 : -1;
    } else if (sortDirection === "DESC") {
      return a[sortColumn] < b[sortColumn] ? 1 : -1;
    }
  }, "comparer");
  return sortDirection === "NONE" ? initialRows : [...rows].sort(comparer);
}, "sortRows");
var EventDetail = /* @__PURE__ */ __name(({ onClose, hasBeforeState, handleNavBtn, data }) => {
  const { t } = useTranslation53();
  const showAffectedLocation = data.category === "Location" /* LOCATION */;
  const [columns, setColumns] = useState36([]);
  const [rows, setRows] = useState36(data.parameters);
  useEffect32(() => {
    let cells = headerCells2;
    if (hasBeforeState) {
      cells = cells.filter((cell) => cell.key !== "content");
    } else {
      cells = cells.filter((cell) => cell.key !== "before" && cell.key !== "after");
    }
    const tCells = cells.map((cell) => {
      return { ...cell, name: t(`events.detail.parameters.${cell.key}`) };
    });
    setColumns(tCells);
  }, [hasBeforeState]);
  useEffect32(() => {
    setRows(data.parameters);
  }, [data.parameters]);
  const handleCrossClick = /* @__PURE__ */ __name(() => {
    onClose(false);
  }, "handleCrossClick");
  const rowGetter = /* @__PURE__ */ __name((rowIdx) => {
    return rows[rowIdx];
  }, "rowGetter");
  const beforeStateTemplate = /* @__PURE__ */ __name(() => {
    return <Grid2.Row><Grid2.Col><div className="details">
      <Grid2.Row>
        <Grid2.Col><div><Heading15 level={4} className="title">
          {t("events.detail.date")}
          {" & "}
          {t("events.detail.time")}
        </Heading15></div></Grid2.Col>
        <Grid2.Col><div><p id="events-event-detail-date-time" className="value">{data.dateTime}</p></div></Grid2.Col>
      </Grid2.Row>
      <Grid2.Row>
        <Grid2.Col><div><Heading15 level={4} className="title">{t("events.detail.source")}</Heading15></div></Grid2.Col>
        <Grid2.Col><p id="events-event-detail-source" className="value">{data.source}</p></Grid2.Col>
      </Grid2.Row>
      <Grid2.Row>
        <Grid2.Col><div><Heading15 level={4} className="title">{t("events.detail.object")}</Heading15></div></Grid2.Col>
        <Grid2.Col><Button35
          className="detailBtn"
          id="events-event-detail-object"
          buttonType={ButtonType31.Secondary}
          buttonSize={Size47.S}
          startIcon={<Icon27 name={VaiIcon18.LinkNewWindow} />}
        >{data.object}</Button35></Grid2.Col>
      </Grid2.Row>
      {showAffectedLocation && <Grid2.Row>
        <Grid2.Col><div><Heading15 level={4} className="title">{t("events.detail.affectedLocation")}</Heading15></div></Grid2.Col>
        <Grid2.Col><Button35
          className="detailBtn"
          id="events-event-detail-location"
          buttonType={ButtonType31.Secondary}
          buttonSize={Size47.S}
          startIcon={<Icon27 name={VaiIcon18.LinkNewWindow} />}
        >{data.affectedLocation}</Button35></Grid2.Col>
      </Grid2.Row>}
    </div></Grid2.Col></Grid2.Row>;
  }, "beforeStateTemplate");
  const withoutBeforeStateTemplate = /* @__PURE__ */ __name(() => {
    return <>
      <Grid2.Row><Grid2.Col><div className="details-compact"><Grid2.Row>
        <Grid2.Col>
          <div><Heading15 id="events-event-detail-date-time-heading" level={4} className="title">
            {t("events.detail.date")}
            {" & "}
            {t("events.detail.time")}
          </Heading15></div>
          <div><p id="events-event-detail-date-time" className="value">{data.dateTime}</p></div>
        </Grid2.Col>
        <Grid2.Col><div className="divider">
          <div><Heading15 id="events-event-detail-event-id-heading" level={4} className="title">{t("events.detail.eventID")}</Heading15></div>
          <div><p id="events-event-detail-event-id" className="value">{data.eventId}</p></div>
        </div></Grid2.Col>
        <Grid2.Col>
          <div><Heading15 id="events-event-detail-date-source-heading" level={4} className="title">{t("events.detail.source")}</Heading15></div>
          <div><p id="events-event-detail-date-source" className="value">{data.source}</p></div>
        </Grid2.Col>
      </Grid2.Row></div></Grid2.Col></Grid2.Row>
      <Grid2.Row><Grid2.Col><Button35
        className="detailBtn"
        id="events-event-detail-location"
        buttonType={ButtonType31.Link}
        buttonSize={Size47.S}
        startIcon={<Icon27 name={VaiIcon18.LinkNewWindow} />}
      >{data.affectedLocation}</Button35></Grid2.Col></Grid2.Row>
    </>;
  }, "withoutBeforeStateTemplate");
  return <div id="events-event-detail">
    <div id="events-event-detail-header" className="header">
      <div className="navigation" onClick={() => handleNavBtn(-1)}>
        <Heading15 id="events-event-detail-header-arrow-left" level={1} className="heading"><Icon27 name={VaiIcon18.ArrowLeft} className="icon" /></Heading15>
        <Heading15 id="events-event-detail-category-action" level={1} className="heading">{`${data.category} ${data.action}`}</Heading15>
        <Heading15
          id="events-event-detail-header-arrow-right"
          level={1}
          className="heading"
          onClick={() => handleNavBtn(1)}
        ><Icon27 name={VaiIcon18.ArrowRight} className="icon" /></Heading15>
      </div>
      <div id="events-event-detail-close" className="close" onClick={handleCrossClick}><Heading15 level={1} className="heading"><Icon27 name={VaiIcon18.Cross} /></Heading15></div>
    </div>
    <div id="events-event-detail-container" className="container"><Grid2>
      {hasBeforeState && beforeStateTemplate()}
      {!hasBeforeState && withoutBeforeStateTemplate()}
      <Grid2.Row><Grid2.Col>{rows && <DataTable3
        htmlId="events-event-detail-table"
        columns={columns}
        rowGetter={rowGetter}
        rowsCount={rows.length}
        minColumnWidth={90}
        onGridSort={(sortColumn, sortDirection) => setRows(sortRows(data.parameters, sortColumn, sortDirection))}
      />}</Grid2.Col></Grid2.Row>
    </Grid2></div>
  </div>;
}, "EventDetail");

// ../vlncc-frontend/src/components/Events/Events.tsx
import "./event.scss";
var Events = /* @__PURE__ */ __name(({
  events,
  eventDetails,
  eventsLoading,
  getEvents: getEvents2,
  getEventDetail,
  deviceType,
  language,
  totalCount
}) => {
  const [rows, setRows] = React51.useState([]);
  const [showDetailView, setShowDetailView] = React51.useState(false);
  const [hasBeforeState, setHasBeforeState] = React51.useState(true);
  const [activeRowIndex, setActiveRowIndex] = React51.useState(0);
  const [pagination, setPagination] = React51.useState({
    rowIndex: 0,
    rowCount: EVENTS_TABLE_ROWS_COUNT
  });
  const ref = React51.useRef(null);
  const [, height] = useResizeObserver(ref, 400);
  useEffect33(() => {
    const updatedEvents = pagination.rowIndex > 0 ? rows.concat(events) : events;
    setRows(updatedEvents);
  }, [events]);
  const updateRowVisibleEndIdx = /* @__PURE__ */ __name((rowIndex) => {
    if (rowIndex < totalCount) {
      setPagination({
        rowIndex,
        rowCount: EVENTS_TABLE_ROWS_COUNT
      });
    }
  }, "updateRowVisibleEndIdx");
  const updateShowDetailView = /* @__PURE__ */ __name((flag) => {
    setShowDetailView(flag);
  }, "updateShowDetailView");
  const handleOnRowClick = /* @__PURE__ */ __name(async (rowIdx, row) => {
    setActiveRowIndex(rowIdx);
    await getEventDetail(row.eventId, language);
    updateShowDetailView(true);
    if (rowIdx === 4) {
      setHasBeforeState(false);
    } else {
      setHasBeforeState(true);
    }
  }, "handleOnRowClick");
  const handleNavBtn = /* @__PURE__ */ __name((value) => {
    setActiveRowIndex(activeRowIndex + value);
  }, "handleNavBtn");
  const handleApply = /* @__PURE__ */ __name(() => {
    setRows([]);
    setPagination({
      rowIndex: 0,
      rowCount: EVENTS_TABLE_ROWS_COUNT
    });
  }, "handleApply");
  const getEventsData = /* @__PURE__ */ __name((query) => {
    if (!eventsLoading)
      getEvents2(query);
  }, "getEventsData");
  return <div id="events">
    <EventFilterBar_default
      deviceType={deviceType}
      rowsCount={totalCount}
      pagination={pagination}
      getEvents={getEventsData}
      language={language}
      isLoading={eventsLoading}
      handleApply={handleApply}
    />
    <div id="events-content" className="content" ref={ref}>
      <div className={showDetailView ? "table-calc-width" : "table-full-width"}><Paper5><EventsTable_default
        deviceType={deviceType}
        rows={rows}
        isLoading={eventsLoading}
        updateRowVisibleEndIdx={updateRowVisibleEndIdx}
        showDetailView={showDetailView}
        handleOnRowClick={handleOnRowClick}
        minHeight={height}
      /></Paper5></div>
      {showDetailView && <div id="events-detail-view" className="detail-view"><Paper5><EventDetail
        key={activeRowIndex}
        data={eventDetails}
        onClose={updateShowDetailView}
        hasBeforeState={hasBeforeState}
        handleNavBtn={handleNavBtn}
      /></Paper5></div>}
    </div>
  </div>;
}, "Events");
var Events_default = Events;

// ../vlncc-frontend/src/components/Events/index.tsx
var Events_default2 = Events_default;

// ../vlncc-frontend/src/containers/Events.tsx
var mapDispatchToProps7 = /* @__PURE__ */ __name((dispatch) => ({
  getEvents: (pagination) => dispatch(eventsDispatchActions.getEvents(pagination)),
  getEventDetail: (eventId, language) => dispatch(eventsDispatchActions.getEventDetails(eventId, language))
}), "mapDispatchToProps");
var mapStateToProps8 = /* @__PURE__ */ __name(({ general, events }) => ({
  language: general.language,
  events: events.events,
  eventDetails: events.eventDetail,
  eventsLoading: events.eventsLoading,
  totalCount: events.totalCount
}), "mapStateToProps");
var EventsContainer = /* @__PURE__ */ __name((props) => {
  return <Events_default2 {...props} />;
}, "EventsContainer");
var Events_default3 = withDisplaySize(connect9(mapStateToProps8, mapDispatchToProps7)(EventsContainer));

// ../vlncc-frontend/src/containers/Reports.tsx
import * as React63 from "react";
import { connect as connect20 } from "react-redux";
import { Route as Route4, Routes as Routes4, Navigate as Navigate3 } from "react-router-dom";
import { Grid as Grid4, PageContainer as PageContainer2, Paper as Paper8 } from "@vaisala-rockhopper/components";

// ../vlncc-frontend/src/components/Reports/LocationsList/LocationsList.tsx
import * as React56 from "react";
import {
  Button as Button37,
  ButtonType as ButtonType33,
  Flex as Flex29,
  Heading as Heading17,
  Icon as Icon31,
  InputField as InputField18,
  MenuButton as MenuButton5,
  MenuButtonList as MenuButtonList5,
  MenuButtonListItem as MenuButtonListItem5,
  MenuButtonToggle as MenuButtonToggle5,
  Paper as Paper7,
  Size as Size51
} from "@vaisala-rockhopper/components";
import { VaiColor as VaiColor9, VaiIcon as VaiIcon22 } from "@vaisala-rockhopper/design-tokens";
import { useTranslation as useTranslation56 } from "react-i18next";
import "./locations-list.scss";

// ../vlncc-frontend/src/components/Reports/SelectLocationsDialog/SelectLocationsDialog.tsx
import * as React54 from "react";
import { Size as Size49, Button as Button36, ButtonType as ButtonType32, Modal as Modal4, Heading as Heading16, Flex as Flex27, InputField as InputField17, Icon as Icon29 } from "@vaisala-rockhopper/components";
import { VaiIcon as VaiIcon20 } from "@vaisala-rockhopper/design-tokens";
import { useTranslation as useTranslation55 } from "react-i18next";
import "./select-locations-dialog.scss";

// ../vlncc-frontend/src/components/Reports/AccordionTree/AccordionTree.tsx
import * as React53 from "react";
import { AccordionList as AccordionList2, Accordion as Accordion3, Flex as Flex26, Checkbox as Checkbox8, Icon as Icon28, Size as Size48 } from "@vaisala-rockhopper/components";
import "./accordion-tree.scss";
import { connect as connect10 } from "react-redux";
import { VaiColor as VaiColor7, VaiIcon as VaiIcon19 } from "@vaisala-rockhopper/design-tokens";

// ../vlncc-frontend/src/components/Utils/TruncatedText/TruncatedText.tsx
import * as React52 from "react";
import { Tooltip } from "@vaisala-rockhopper/components";
var TruncatedText = /* @__PURE__ */ __name(({ text, className }) => {
  const textNode = React52.useRef();
  const [showTooltip, setShowTooltip] = React52.useState(false);
  React52.useEffect(() => {
    if (textNode.current) {
      textNode.current.addEventListener("mouseover", () => {
        if (textNode.current.scrollHeight > textNode.current.offsetHeight && !showTooltip) {
          setShowTooltip(true);
        } else if (textNode.current.scrollHeight <= textNode.current.offsetHeight && showTooltip) {
          setShowTooltip(false);
        }
      });
    }
  }, [textNode.current]);
  return <>
    <span ref={textNode} className={`truncated-text ${className}`}>{text}</span>
    {showTooltip && <Tooltip triggerRef={textNode}>{text}</Tooltip>}
  </>;
}, "TruncatedText");
var TruncatedText_default = TruncatedText;

// ../vlncc-frontend/src/components/Reports/AccordionTree/AccordionTree.tsx
import { useTranslation as useTranslation54 } from "react-i18next";
var AccordionTree = /* @__PURE__ */ __name(({
  locationsTree,
  setLocationsTree,
  setLocationsCount,
  locationsCount,
  setReportSelectedFormattedLocations: setReportSelectedFormattedLocations2,
  setReportLocations: setReportLocations2,
  selectedFormattedLocations,
  logout: logout2
}) => {
  const { t } = useTranslation54();
  const [sitesChildrenCount, setSitesChildrenCount] = React53.useState({});
  const [formattedData, setFormattedData] = React53.useState(locationsTree);
  const customerId = getConstantFromLocalStorage(LS_COMPANY_CUSTOMER_ID);
  const { username } = useUserSettings_default();
  const { data: sites, isFetching } = useGetSiteNodesQuery(
    { customerId, siteId: PARENT_SITE_KEY, username: btoa(username) },
    { skip: username === void 0 || username === null, refetchOnMountOrArgChange: true }
  );
  React53.useEffect(() => {
    if (sites && sites.length > 0 && Object.keys(sites[0]).length > 0) {
      setReportLocations2(sites);
      const formattedData2 = modifyResponseData(sites, selectedFormattedLocations);
      setFormattedData(formattedData2);
      setReportSelectedFormattedLocations2(formattedData2);
      setSitesChildrenCount(calculateSiteChildrenCount(sites));
    }
  }, [sites]);
  React53.useEffect(() => {
    setLocationsTree(formattedData);
  }, [formattedData]);
  React53.useEffect(() => {
    if (Object.keys(locationsTree).length > 0) {
      setFormattedData({ ...locationsTree });
    }
  }, [locationsTree]);
  const AccordionTitle = /* @__PURE__ */ __name(({
    node,
    className,
    noChildren,
    showLocNum
  }) => {
    const wrapper = React53.useRef();
    const [showCheckbox, setShowCheckbox] = React53.useState(false);
    const onCheck = /* @__PURE__ */ __name((event) => {
      const formattedDataClone = JSON.parse(JSON.stringify(formattedData));
      let neededNode = {};
      const parentNodes = [];
      node.hierarchy.forEach((id, index) => {
        if (index !== node.hierarchy.length - 1) {
          parentNodes.unshift(Object.keys(neededNode).length > 0 ? neededNode.children[id] : formattedDataClone[id]);
        }
        neededNode = Object.keys(neededNode).length > 0 ? neededNode.children[id] : formattedDataClone[id];
      });
      const [newNode, count] = changeSelectionNodeAndChildren(neededNode, event.target.checked);
      neededNode = newNode;
      setLocationsCount(neededNode.type === SITE_KEY ? count > 0 ? count : 0 : count);
      parentNodes.forEach((n) => {
        areAllChildrenSelected(n);
      });
      setFormattedData(formattedDataClone);
    }, "onCheck");
    const changeSelectionNodeAndChildren = /* @__PURE__ */ __name((node2, state, locationsNum = locationsCount) => {
      const prevNodeState = node2.selected;
      node2.selected = state;
      if (node2.type === LOCATION_KEY && prevNodeState !== state) {
        state ? locationsNum++ : locationsNum--;
      }
      if (Object.keys(node2.children).length > 0) {
        Object.values(node2.children).forEach((n) => {
          const [children, num] = changeSelectionNodeAndChildren(n, state, locationsNum);
          node2 = {
            ...node2,
            children: { ...children }
          };
          locationsNum = num;
        });
      }
      return [node2, locationsNum];
    }, "changeSelectionNodeAndChildren");
    const changeCheckingState = /* @__PURE__ */ __name((node2, children, selectedNum, partialSelectedNum) => {
      if (selectedNum === children.length) {
        wrapper?.current?.classList.remove("partially-checked");
        node2.partialSelected = false;
        node2.selected = true;
        return true;
      } else if (selectedNum !== 0 || partialSelectedNum > 0) {
        node2.selected = false;
        node2.partialSelected = true;
        wrapper?.current?.classList.add("partially-checked");
        return false;
      } else if (selectedNum === 0) {
        wrapper?.current?.classList.remove("partially-checked");
        node2.partialSelected = false;
        node2.selected = false;
        return false;
      }
    }, "changeCheckingState");
    const areAllChildrenSelected = /* @__PURE__ */ __name((n = node) => {
      const children = Object.values(n.children);
      let selectedChildrenNum = 0;
      let partialSelectedNum = 0;
      children.forEach((child) => {
        if (Object.keys(child.children).length > 0) {
          areAllChildrenSelected(child);
        }
        if (child.selected) {
          selectedChildrenNum++;
        } else if (child.partialSelected) {
          partialSelectedNum++;
        }
      });
      return children.length > 0 ? changeCheckingState(n, children, selectedChildrenNum, partialSelectedNum) : false;
    }, "areAllChildrenSelected");
    const renderIcon = /* @__PURE__ */ __name(() => {
      if (node.type === SITE_KEY) {
        return <Icon28 name={VaiIcon19.MapMarkerHexagon} color={VaiColor7.BlueDark} size={Size48.M} />;
      } else if (node.type === LOCATION_KEY) {
        switch (node.meas_id) {
          case "temperature" /* TEMPERATURE */:
            return <Icon28 name={VaiIcon19.Thermometer} color={VaiColor7.BlueDark} size={Size48.M} />;
          case "humidity" /* HUMIDITY */:
            return <Icon28 name={VaiIcon19.Humidity} color={VaiColor7.BlueDark} size={Size48.M} />;
          case "co2" /* CO2 */:
            return <Icon28 name={VaiIcon19.Dust} color={VaiColor7.BlueDark} size={Size48.M} />;
          default:
            return;
        }
      }
      return <></>;
    }, "renderIcon");
    React53.useEffect(() => {
      if (!showCheckbox) {
        setShowCheckbox(true);
      }
    }, []);
    return <Flex26
      alignItems="center"
      justifyContent="space-between"
      className={`${noChildren && `last-child-wrapper`} ${className}`}
      style={{ width: "100%" }}
    >
      <div ref={wrapper} onClick={(e) => e.stopPropagation()} className="checkbox-wrapper">
        {showCheckbox && <Checkbox8
          id="checkbox"
          name={node.node_id}
          checked={areAllChildrenSelected() || node.selected}
          onChange={onCheck}
        />}
        <Flex26 alignItems="center" className={`node-title ${node.type === SITE_KEY && "site-node"}`}>
          {renderIcon()}
          <TruncatedText_default text={node.name} className="node-text" />
        </Flex26>
      </div>
      {showLocNum && <Flex26 className="vai-accordion__summary" style={{ alignSelf: "flex-start" }}>
        {calculateLocationsNumForNode(node)}
        {" "}
        {t("reports.locations")}
      </Flex26>}
    </Flex26>;
  }, "AccordionTitle");
  const calculateSiteChildrenCount = /* @__PURE__ */ __name((data, count = {}) => {
    if (data.length === 0) {
      count["count"] = 0;
    }
    data.forEach((node) => {
      if (node.type === SITE_KEY) {
        count[node.node_id] = { ...calculateSiteChildrenCount(node.children, {}) };
      } else if (node.type === LOCATION_KEY) {
        count["count"] = (count["count"] || 0) + 1;
      } else if (node.type === ZONE_KEY || node.children.length > 0) {
        count[node.node_id] = { ...calculateSiteChildrenCount(node.children, {}) };
      } else {
        count["count"] = 0;
      }
    });
    return count;
  }, "calculateSiteChildrenCount");
  const calculateLocationsNumForNode = /* @__PURE__ */ __name((node, sitesChildren = sitesChildrenCount) => {
    let count = 0;
    if (Object.keys(sitesChildren).length > 0 && node) {
      let currentNode;
      node.hierarchy.forEach((id) => {
        currentNode = currentNode ? currentNode[id] : sitesChildren[id];
      });
      if (node.type !== SITE_KEY && currentNode.count) {
        count += currentNode.count;
      }
      const childrenNodeCount = Object.keys(currentNode);
      if (childrenNodeCount.length > 0) {
        childrenNodeCount.forEach((key) => {
          if (key !== "count") {
            count += calculateLocationsNumForNode(node.children[key], sitesChildren[node.node_id]);
          }
        });
      }
    }
    return count;
  }, "calculateLocationsNumForNode");
  const renderTree = /* @__PURE__ */ __name((data) => {
    return Object.values(data).map((node) => {
      if (Object.keys(node.children).length > 0) {
        return <AccordionList2
          key={node.node_id}
          defaultKeys={node.type === SITE_KEY && node.node_id}
          exclusive={false}
          htmlId="locations-tree"
        >{node.show && <Accordion3
          key={node.node_id}
          accordionKey={node.node_id}
          title={<AccordionTitle node={node} />}
          summary={`${calculateLocationsNumForNode(node)} ${t("reports.locations")}`}
          className={node.type === SITE_KEY && "site-header"}
        >{renderTree(node.children)}</Accordion3>}</AccordionList2>;
      } else {
        return node.show && <AccordionTitle
          node={node}
          key={node.node_id}
          noChildren
          {...node.type === ZONE_KEY ? { showLocNum: true } : {}}
        />;
      }
    });
  }, "renderTree");
  return <>{Object.keys(formattedData).length > 0 && !isFetching ? renderTree(formattedData) : isFetching ? <CenteredSpinner_default /> : <EmptyState heading="site.noSiteRights" illustration={"nothingSelected" /* nothingSelected */} />}</>;
}, "AccordionTree");
var mapStateToProps9 = /* @__PURE__ */ __name(({ reports }) => ({
  selectedFormattedLocationsNum: reports.selectedLocationsNum,
  selectedFormattedLocations: reports.selectedFormattedLocations
}), "mapStateToProps");
var mapDispatchToProps8 = /* @__PURE__ */ __name((dispatch) => ({
  setReportSelectedFormattedLocations: (locations) => dispatch(reportsDispatchActions.setReportSelectedFormattedLocations(locations)),
  setReportLocations: (locations) => dispatch(reportsDispatchActions.setReportLocations(locations)),
  logout: () => dispatch(authDispatchActions.logout)
}), "mapDispatchToProps");
var AccordionTree_default = connect10(mapStateToProps9, mapDispatchToProps8)(AccordionTree);

// ../vlncc-frontend/src/components/Reports/SelectLocationsDialog/SelectLocationsDialog.tsx
import { connect as connect11 } from "react-redux";
import { useDebounce } from "use-debounce";
var SelectLocationsDialog = /* @__PURE__ */ __name((props) => {
  const { t } = useTranslation55();
  const [searchVal, setSearchVal] = React54.useState("");
  const [value] = useDebounce(searchVal, 600);
  const [previouslocationsTree, setPreviousLocationsTree] = React54.useState(props.selectedFormattedLocations);
  const [newlocationsTree, setLocationsTree] = React54.useState(props.selectedFormattedLocations);
  const [locationsCount, setLocationsCount] = React54.useState(props.selectedFormattedLocationsNum);
  React54.useEffect(() => {
    const filteredLocations = filterLocationsTree(
      value.toLowerCase(),
      {},
      newlocationsTree
    );
    setPreviousLocationsTree(filteredLocations);
  }, [value]);
  React54.useEffect(() => {
    if (!props.loadingAPI)
      setPreviousLocationsTree(props.selectedFormattedLocations);
  }, [props.selectedFormattedLocations]);
  const handleInputChange = /* @__PURE__ */ __name((event) => {
    const search = event.target.value;
    setSearchVal(search);
  }, "handleInputChange");
  const getSelectedLocationsIds = /* @__PURE__ */ __name((data = newlocationsTree, selectedIDs = [], selectedCustomProps = {}) => {
    sortLocationsOnTopOfZones(data).forEach((n) => {
      if (Object.values(n.children).length > 0) {
        getSelectedLocationsIds(n.children, selectedIDs, selectedCustomProps);
      } else if (n.type === LOCATION_KEY && n.selected) {
        selectedIDs.push(n.node_id);
        selectedCustomProps[n.node_id] = {
          measurement_points: [],
          showThreshold: false,
          visibleOnGraph: true,
          selected: true,
          symbol_id: n.symbol_id,
          name: n.name,
          hierarchy: n.hierarchy,
          decimal_places: n.decimal_places
        };
      }
    });
    return { selectedIDs, selectedCustomProps };
  }, "getSelectedLocationsIds");
  const addSelectedLocations = /* @__PURE__ */ __name(() => {
    const { selectedIDs, selectedCustomProps } = getSelectedLocationsIds();
    setPreviousLocationsTree(newlocationsTree);
    props.setReportSelectedFormattedLocations(newlocationsTree);
    props.setReportSelectedLocationsIDs(selectedIDs);
    props.setReportSelectedLocationsCustomProps(selectedCustomProps);
    props.setReportSelectedLocationsNum(locationsCount);
    props.onDismiss();
  }, "addSelectedLocations");
  return <Modal4
    id="select-locations-dialog-id"
    htmlId="select-locations-dialog"
    isOpen={props.isVisible}
    showCloseIcon={true}
    onDismiss={props.onDismiss}
    width={Size49.L}
    dismissOnOverlayClick={false}
  >
    <Heading16 className="vai-margin-top-none select-locations-header">{t("reports.selectLocationToAddToReport")}</Heading16>
    <Flex27 flexDirection="column">
      <span className="select-locations-number">
        {locationsCount}
        {" "}
        {t("reports.locationsSelected")}
      </span>
      <span className="select-locations-info-text vai-font-size-xs">{locationsCount > MAX_LOCATIONS_SELECTED ? t("reports.greaterThanMaxLocationsInfoText", { max: MAX_LOCATIONS_SELECTED }) : t("reports.lowerThanMaxLocationsInfoText", { max: MAX_LOCATIONS_SELECTED })}</span>
      <InputField17
        data-testid="select-locations-search"
        className="vai-margin-vertical-s"
        value={searchVal}
        onChange={handleInputChange}
        name="search"
        placeholder={t("events.filterBar.search")}
        endIcon={<Icon29 name={VaiIcon20.Search} size={Size49.M} />}
        width={Size49.Container}
      />
      <div data-testid="select-locations-accordion-wrapper" className="select-locations-accordion-wrapper"><AccordionTree_default
        locationsTree={previouslocationsTree}
        setLocationsTree={setLocationsTree}
        setLocationsCount={setLocationsCount}
        locationsCount={locationsCount}
      /></div>
    </Flex27>
    <Flex27 className="vai-margin-top-m" justifyContent="center">
      <Button36
        id="select-locations-confirm"
        disabled={JSON.stringify(newlocationsTree) === JSON.stringify(previouslocationsTree)}
        htmlId="select-locations-confirm"
        onClick={addSelectedLocations}
      >{t("reports.select")}</Button36>
      <Button36
        id="select-locations-cancel"
        htmlId="select-locations-cancel"
        onClick={props.onDismiss}
        buttonType={ButtonType32.Secondary}
      >{t("general.cancel")}</Button36>
    </Flex27>
  </Modal4>;
}, "SelectLocationsDialog");
var mapStateToProps10 = /* @__PURE__ */ __name(({ reports }) => ({
  selectedFormattedLocations: reports.selectedFormattedLocations,
  selectedFormattedLocationsNum: reports.selectedLocationsNum,
  intervalDate: reports.intervalDate,
  loadingAPI: reports.isApiLoading,
  selectedLocationsCustomProps: reports.selectedLocationsCustomProps
}), "mapStateToProps");
var mapDispatchToProps9 = /* @__PURE__ */ __name((dispatch) => ({
  setReportSelectedFormattedLocations: (locations) => dispatch(reportsDispatchActions.setReportSelectedFormattedLocations(locations)),
  setReportSelectedLocationsCustomProps: (locations) => dispatch(reportsDispatchActions.setReportSelectedLocationsCustomProps(locations)),
  setReportSelectedLocationsNum: (number) => dispatch(reportsDispatchActions.setReportSelectedLocationsNum(number)),
  setReportSelectedLocationsIDs: (IDs) => dispatch(reportsDispatchActions.setReportSelectedLocationsIDs(IDs))
}), "mapDispatchToProps");
var SelectLocationsDialog_default = connect11(mapStateToProps10, mapDispatchToProps9)(SelectLocationsDialog);

// ../vlncc-frontend/src/components/Reports/LocationsList/LocationsList.tsx
import { connect as connect13 } from "react-redux";

// ../vlncc-frontend/src/components/Reports/SelectedLocationsList/SelectedLocationsList.tsx
import { Flex as Flex28, Icon as Icon30, Paper as Paper6, Size as Size50 } from "@vaisala-rockhopper/components";
import { VaiColor as VaiColor8, VaiIcon as VaiIcon21 } from "@vaisala-rockhopper/design-tokens";
import { getUnixTime } from "date-fns";
import * as React55 from "react";
import { connect as connect12 } from "react-redux";
import "./selected-locations-list.scss";
var locationsClone = null;
var requests = {};
var SelectedLocationsList = /* @__PURE__ */ __name((props) => {
  const [prevSelectedNode, setPrevSelectedNode] = React55.useState(null);
  const [removingNode, setRemovingNode] = React55.useState(false);
  const [zonesNames, setZonesNames] = React55.useState({});
  const [prevLocationsStructure, setPrevLocationsStructure] = React55.useState(props.selectedFormattedLocations);
  const [getMeasurements, { isLoading }] = useGetMeasurementsMutation();
  const [downloadJsonData] = useLazyDownloadJsonResponseQuery();
  const customerId = getConstantFromLocalStorage(LS_COMPANY_CUSTOMER_ID);
  const processData = /* @__PURE__ */ __name((data, prevData, id) => {
    const selectedLocationsClone = JSON.parse(JSON.stringify(prevData));
    let measurements = [], minThreshold = Infinity, maxThreshold = -Infinity;
    const threshold = {};
    if (data && data.items) {
      data.items.forEach((item) => {
        measurements = measurements.concat(
          [...item.measurements].map((meas) => {
            if (item.threshold_settings && !isEmptyObject(item.threshold_settings)) {
              meas = { ...meas, threshold_settings: { ...item.threshold_settings[0][0] } };
            }
            return meas;
          })
        );
        if (item.threshold_settings && !isEmptyObject(item.threshold_settings)) {
          Object.values(item.threshold_settings[0][0]).forEach((setting) => {
            if (setting.enabled && setting.value < minThreshold) {
              minThreshold = setting.value;
            }
            if (setting.enabled && setting.value > maxThreshold) {
              maxThreshold = setting.value;
            }
          });
        }
      });
      measurements.sort((a, b) => a.t - b.t);
      threshold.min = minThreshold;
      threshold.max = maxThreshold;
      const selectedNode = selectedLocationsClone[id];
      selectedNode.measurement_points = [];
      selectedNode.threshold_values = null;
      selectedNode.minimum = selectedNode.maximum = selectedNode.average = selectedNode.most_recent = null;
      selectedNode.measurement_points = measurements;
      selectedNode.threshold_values = threshold;
      const decimals = selectedNode.decimal_places;
      selectedNode.average = data.average?.toFixed(decimals) || null;
      selectedNode.minimum = data.min?.toFixed(decimals) || null;
      selectedNode.maximum = data.max?.toFixed(decimals) || null;
      selectedNode.most_recent = data.recent?.toFixed(decimals) || null;
      locationsClone = { ...selectedLocationsClone };
    }
  }, "processData");
  const getMeasurementsPoints = /* @__PURE__ */ __name(async (locationIds, prevData = props.selectedLocationsCustomProps) => {
    try {
      props.setReportLoadingState(true);
      locationsClone = null;
      await Promise.all(
        locationIds.map(async (id) => {
          requests[id] = getMeasurements({
            body: {
              from: getUnixTime(props.intervalDate.from),
              to: getUnixTime(props.intervalDate.to),
              locationId: id
              // ...(lastEvaluatedKey.key ? { lastEvaluatedKey: lastEvaluatedKey.key } : {})
            },
            customerId
          });
          const data = await requests[id].unwrap();
          delete requests[id];
          if (data && data.url) {
            requests[data.url] = downloadJsonData({ url: data.url });
            const jsonData = await requests[data.url].unwrap();
            delete requests[data.url];
            processData(jsonData, locationsClone ?? prevData, id);
          } else {
            processData(data, locationsClone ?? prevData, id);
          }
        })
      );
      requests = {};
      props.setReportLoadingState(false);
      updateLocationsState(locationsClone);
    } catch (e) {
      locationsClone = null;
      console.error(e.response ?? e);
      throw e;
    }
  }, "getMeasurementsPoints");
  const updateLocationsState = /* @__PURE__ */ __name((data = props.selectedLocationsCustomProps) => {
    const [newLocations, visibleLocations, assignedColors] = hideAdditionalLocations(data);
    props.setReportsAssignedChartColors(assignedColors);
    props.setReportsVisibleLocations(visibleLocations);
    props.setReportSelectedLocationsCustomProps(newLocations);
    setPrevLocationsStructure(newLocations);
  }, "updateLocationsState");
  React55.useEffect(() => {
    setPrevSelectedNode(null);
    hideAdditionalLocations();
  }, [props.selectedFormattedLocations]);
  React55.useEffect(() => {
    if (props.selectedLocationsIDs.length > 0 && !removingNode) {
      abortCurrentRequests();
      getMeasurementsPoints(props.selectedLocationsIDs);
    }
    if (removingNode) {
      setRemovingNode(false);
    }
  }, [props.selectedLocationsIDs, props.intervalDate]);
  React55.useEffect(() => {
    return () => {
      abortCurrentRequests();
    };
  }, []);
  const abortCurrentRequests = /* @__PURE__ */ __name(() => {
    if (requests && Object.keys(requests).length > 0 && !props.isTesting) {
      for (const key in requests) {
        requests[key].abort();
        delete requests[key];
      }
    }
    requests = {};
  }, "abortCurrentRequests");
  const hideAdditionalLocations = /* @__PURE__ */ __name((data = props.selectedLocationsCustomProps, visibleLocations = props.visibleLocations, assignedChartColors = props.assignedChartColors, visibleLocationsNumIndicator = 0) => {
    const dataClone = data === props.selectedLocationsCustomProps ? JSON.parse(JSON.stringify(data)) : data;
    const visibleLocationsClone = visibleLocations === props.visibleLocations ? JSON.parse(JSON.stringify(visibleLocations)) : visibleLocations;
    const assignedColorsClone = assignedChartColors === props.assignedChartColors ? getInitialAssignedChartColors() : assignedChartColors;
    Object.keys(dataClone).forEach((id, locationIndex) => {
      if (Object.keys(props.visibleLocations).length > 0 && getVisibleLocationsNumber(props.visibleLocations) <= MAX_LOCATIONS_SELECTED) {
        if (locationIndex >= MAX_LOCATIONS_SELECTED) {
          dataClone[id].visibleOnGraph = false;
        }
        visibleLocationsNumIndicator = dataClone[id].visibleOnGraph ? visibleLocationsNumIndicator + 1 : visibleLocationsNumIndicator;
        const color = Object.keys(props.assignedChartColors)[visibleLocationsNumIndicator - 1];
        visibleLocationsClone[id] = {
          visible: dataClone[id].visibleOnGraph,
          color: dataClone[id].visibleOnGraph ? color : null
        };
        if (dataClone[id].visibleOnGraph) {
          assignedColorsClone[color] = id;
        }
      } else {
        if (locationIndex >= MAX_LOCATIONS_SELECTED) {
          dataClone[id].visibleOnGraph = false;
          visibleLocationsClone[id] = {
            visible: false,
            color: null
          };
        } else {
          visibleLocationsClone[id] = {
            visible: dataClone[id].visibleOnGraph || true,
            color: CHART_SERIES_COLORS[locationIndex]
          };
          assignedColorsClone[CHART_SERIES_COLORS[locationIndex]] = id;
        }
      }
      if (dataClone[id].showThreshold) {
        setPrevSelectedNode({ ...dataClone[id], node_id: id });
      }
    });
    return [dataClone, visibleLocationsClone, assignedColorsClone, visibleLocationsNumIndicator];
  }, "hideAdditionalLocations");
  const onNodeRemove = /* @__PURE__ */ __name((node) => (event) => {
    event.stopPropagation();
    if (props.selectedLocationsNum - 1 === 0) {
      const formattedData = modifyResponseData(props.locations);
      props.setReportsSelectedFormattedLocations(formattedData);
      props.setReportSelectedLocationsIDs([]);
      props.setReportSelectedLocationsCustomProps({});
    } else {
      let selectedNode;
      const selectedLocationsClone = JSON.parse(JSON.stringify(props.selectedFormattedLocations));
      setRemovingNode(true);
      node.hierarchy.forEach((id) => {
        selectedNode = selectedNode ? selectedNode.children[id] : selectedLocationsClone[id];
      });
      const newLocationsIDs = props.selectedLocationsIDs.filter((id) => id !== selectedNode.node_id);
      const newLocationsCustomProps = { ...props.selectedLocationsCustomProps };
      delete newLocationsCustomProps[selectedNode.node_id];
      selectedNode.selected = false;
      const assignedColor = getAssignedChartColor(selectedNode.node_id, props.assignedChartColors);
      props.setReportsAssignedChartColors({ ...props.assignedChartColors, [assignedColor]: null });
      props.setReportsVisibleLocations({
        ...props.visibleLocations,
        [selectedNode.node_id]: { visible: false, color: null }
      });
      props.setReportSelectedLocationsIDs(newLocationsIDs);
      props.setReportsSelectedFormattedLocations(selectedLocationsClone);
      props.setReportSelectedLocationsCustomProps(newLocationsCustomProps);
    }
    props.setReportsSelectedLocationsNum(props.selectedLocationsNum - 1);
  }, "onNodeRemove");
  const onNodeVisibilityToggle = /* @__PURE__ */ __name((node) => (event) => {
    event.stopPropagation();
    const selectedLocationsClone = JSON.parse(JSON.stringify(props.selectedLocationsCustomProps));
    if (getVisibleLocationsNumber(props.visibleLocations) < MAX_LOCATIONS_SELECTED || selectedLocationsClone[node.node_id].visibleOnGraph) {
      selectedLocationsClone[node.node_id].visibleOnGraph = !selectedLocationsClone[node.node_id].visibleOnGraph;
      selectedLocationsClone[node.node_id].showThreshold = false;
      let assignedColor;
      if (selectedLocationsClone[node.node_id].visibleOnGraph) {
        assignedColor = getFirstAvailableColor();
        props.setReportsAssignedChartColors({ ...props.assignedChartColors, [assignedColor]: node.node_id });
        props.setReportsVisibleLocations({
          ...props.visibleLocations,
          [node.node_id]: { visible: true, color: assignedColor }
        });
      } else {
        assignedColor = getAssignedChartColor(node.node_id, props.assignedChartColors);
        props.setReportsAssignedChartColors({ ...props.assignedChartColors, [assignedColor]: null });
        props.setReportsVisibleLocations({
          ...props.visibleLocations,
          [node.node_id]: { visible: false, color: null }
        });
      }
      props.setReportSelectedLocationsCustomProps(selectedLocationsClone);
    }
  }, "onNodeVisibilityToggle");
  const getFirstAvailableColor = /* @__PURE__ */ __name(() => {
    let availableColor;
    for (const [key, value] of Object.entries(props.assignedChartColors)) {
      if (!value) {
        availableColor = key;
        break;
      }
    }
    return availableColor;
  }, "getFirstAvailableColor");
  const onNodeClick = /* @__PURE__ */ __name((node) => (e) => {
    const selectedLocationsClone = JSON.parse(JSON.stringify(props.selectedLocationsCustomProps));
    if (prevSelectedNode && prevSelectedNode.node_id !== node.node_id) {
      selectedLocationsClone[prevSelectedNode.node_id].showThreshold = false;
    }
    selectedLocationsClone[node.node_id].showThreshold = !selectedLocationsClone[node.node_id].showThreshold;
    setPrevSelectedNode({ ...selectedLocationsClone[node.node_id], node_id: node.node_id });
    props.setReportSelectedLocationsCustomProps(selectedLocationsClone);
  }, "onNodeClick");
  const renderIcon = /* @__PURE__ */ __name((node) => {
    switch (node.meas_id) {
      case "temperature" /* TEMPERATURE */:
        return <Icon30 name={VaiIcon21.Thermometer} color={VaiColor8.BlueDark} size={Size50.M} />;
      case "humidity" /* HUMIDITY */:
        return <Icon30 name={VaiIcon21.Humidity} color={VaiColor8.BlueDark} size={Size50.M} />;
      case "co2" /* CO2 */:
        return <Icon30 name={VaiIcon21.Dust} color={VaiColor8.BlueDark} size={Size50.M} />;
      default:
        return <></>;
    }
  }, "renderIcon");
  const renderZoneNamesByHierarchy = /* @__PURE__ */ __name((node) => {
    let selectedNode;
    const selectedLocationsClone = JSON.parse(JSON.stringify(props.selectedLocations));
    let zoneName = "";
    node.hierarchy.forEach((id) => {
      selectedNode = selectedNode ? selectedNode.children[id] : selectedLocationsClone[id];
      zoneName += selectedNode.type === SITE_KEY ? "" : zoneName.length > 0 ? ` / ${selectedNode.name}` : selectedNode.name;
    });
    setZonesNames((names) => ({ ...names, [node.node_id]: zoneName }));
    return zoneName;
  }, "renderZoneNamesByHierarchy");
  const renderTree = /* @__PURE__ */ __name((data = props.selectedLocations) => {
    return sortLocationsOnTopOfZones(data).map((node) => {
      if (Object.keys(node.children).length > 0) {
        return <div key={node.node_id}>
          {(node.selected || node.partialSelected) && node.type === SITE_KEY ? <Flex28 className="site-node node vai-font-size-l" alignItems="center">
            <Icon30 name={VaiIcon21.MapMarkerHexagon} color={VaiColor8.BlueDark} />
            <span key={node.node_id}>{node.name}</span>
          </Flex28> : node.show && Object.values(node.children).find((n) => n.type === LOCATION_KEY && n.selected) && <p key={node.node_id} className="node">{zonesNames[node.node_id] ? zonesNames[node.node_id] : renderZoneNamesByHierarchy(node)}</p>}
          {renderTree(node.children)}
        </div>;
      } else {
        const customProps = props.selectedLocationsCustomProps[node.node_id];
        return node.type === LOCATION_KEY && node.selected && customProps && node.show && <Paper6
          className={`location-node node ${!customProps.visibleOnGraph && "invisible-node"} ${customProps.showThreshold && customProps?.visibleOnGraph && "show-threshold"}`}
          data-testid="selected-location-node"
          key={node.node_id}
          onClick={onNodeClick(node)}
        >
          <span
            className="colored-line"
            style={{ backgroundColor: getAssignedChartColor(node.node_id, props.assignedChartColors) }}
          />
          <Flex28 alignItems="center" justifyContent="space-between">
            <Flex28 alignItems="center">
              <Icon30
                name={customProps.visibleOnGraph ? VaiIcon21.VisibilityOn : VaiIcon21.VisibilityOff}
                color={customProps.visibleOnGraph ? VaiColor8.AquaVaisala : VaiColor8.GreyMedium2}
                size={Size50.M}
                className="visibility-icon"
                onClick={onNodeVisibilityToggle(node)}
              />
              {renderIcon(node)}
              <TruncatedText_default text={node.name} className="vai-margin-left-s" />
            </Flex28>
            <Icon30
              className="remove-icon"
              name={VaiIcon21.Cross}
              color={VaiColor8.AquaVaisala}
              size={Size50.M}
              onClick={onNodeRemove(node)}
            />
          </Flex28>
        </Paper6>;
      }
    });
  }, "renderTree");
  return <div className="selected-locations-wrapper" data-testid="selected-locations-list-wrapper">{(isLoading || props.loadingAPI) && !props.isTesting ? <CenteredSpinner_default /> : Object.keys(props.visibleLocations).length > 0 ? <div data-testid="selected-locations-list-inner-wrapper">{renderTree()}</div> : null}</div>;
}, "SelectedLocationsList");
var mapStateToProps11 = /* @__PURE__ */ __name(({ reports }) => ({
  locations: reports.locations,
  selectedFormattedLocations: reports.selectedFormattedLocations,
  selectedLocationsNum: reports.selectedLocationsNum,
  selectedLocationsIDs: reports.selectedLocationsIDs,
  visibleLocations: reports.visibleLocations,
  assignedChartColors: reports.assignedChartColors,
  intervalDate: reports.intervalDate,
  isTesting: reports.isTesting,
  loadingAPI: reports.isApiLoading,
  selectedLocationsCustomProps: reports.selectedLocationsCustomProps
}), "mapStateToProps");
var mapDispatchToProps10 = /* @__PURE__ */ __name((dispatch) => ({
  setReportsSelectedFormattedLocations: (locations) => dispatch(reportsDispatchActions.setReportSelectedFormattedLocations(locations)),
  setReportSelectedLocationsCustomProps: (locations) => dispatch(reportsDispatchActions.setReportSelectedLocationsCustomProps(locations)),
  setReportsVisibleLocations: (locations) => dispatch(reportsDispatchActions.setReportVisibleLocations(locations)),
  setReportsSelectedLocationsNum: (number) => dispatch(reportsDispatchActions.setReportSelectedLocationsNum(number)),
  setReportSelectedLocationsIDs: (IDs) => dispatch(reportsDispatchActions.setReportSelectedLocationsIDs(IDs)),
  setReportsAssignedChartColors: (colors) => dispatch(reportsDispatchActions.setReportAssignedChartColors(colors)),
  setReportLoadingState: (loading) => dispatch(reportsDispatchActions.setReportLoadingState(loading))
}), "mapDispatchToProps");
var SelectedLocationsList_default = connect12(mapStateToProps11, mapDispatchToProps10)(SelectedLocationsList);

// ../vlncc-frontend/src/components/Reports/LocationsList/LocationsList.tsx
import { useDebounce as useDebounce2 } from "use-debounce";
var LocationsList = /* @__PURE__ */ __name((props) => {
  const { t } = useTranslation56();
  const [reportsFilter, setReportsFilter] = React56.useState({
    search: "",
    sortBy: "",
    filterBy: ""
  });
  const [filteredLocations, setFilteredLocations] = React56.useState(props.selectedFormattedLocations);
  const [filteredLocationsCount, setFilteredLocationsCount] = React56.useState(0);
  const [value] = useDebounce2(reportsFilter.search, 600);
  const [showDialogs, setShowDialogs] = React56.useState({
    select: false
  });
  React56.useEffect(() => {
    const newFilteredLocations = filterLocationsTree(
      value.toLowerCase(),
      {},
      props.selectedFormattedLocations,
      true
    );
    const visibleLocations = calculateFilteredLocationsCount({}, newFilteredLocations);
    setFilteredLocationsCount(visibleLocations);
    setFilteredLocations(newFilteredLocations);
  }, [value, props.selectedFormattedLocations]);
  const handleInputChange = /* @__PURE__ */ __name((event) => {
    const { name, value: value2 } = event.target;
    setReportsFilter((prevDateSelector) => ({ ...prevDateSelector, [name]: value2 }));
  }, "handleInputChange");
  const handleChange = /* @__PURE__ */ __name((selectedValue) => {
    console.log(selectedValue);
  }, "handleChange");
  const calculateFilteredLocationsCount = /* @__PURE__ */ __name((node = {}, parent_node = {}, visible_locations = 0) => {
    const locationsClone2 = Object.keys(node).length > 0 ? node : JSON.parse(JSON.stringify(parent_node));
    let visibleLocations = visible_locations;
    Object.values(locationsClone2).forEach((node2) => {
      if (node2.type === LOCATION_KEY && node2.show && node2.selected) {
        visibleLocations++;
      }
      if (Object.keys(node2.children).length > 0) {
        visibleLocations = calculateFilteredLocationsCount(
          node2.children,
          parent_node,
          visibleLocations
        );
      }
    });
    return visibleLocations;
  }, "calculateFilteredLocationsCount");
  const toggleSelectModal = /* @__PURE__ */ __name(() => setShowDialogs((prev) => ({ ...prev, select: !prev.select })), "toggleSelectModal");
  return <Paper7 className="h-100 locations-list-wrapper" data-testid="locations-list-wrapper">
    <Heading17 level={2} className="vai-margin-vertical-none">{t("reports.reportLocations")}</Heading17>
    <span style={{ color: VaiColor9.GreyMedium }} data-testid="locations-number-wrapper">
      {props.selectedLocationsNum}
      {" "}
      {t("reports.locations")}
    </span>
    <InputField18
      className="vai-margin-vertical-s"
      value={reportsFilter.search}
      onChange={handleInputChange}
      name="search"
      placeholder={t("events.filterBar.search")}
      endIcon={<Icon31 name={VaiIcon22.Search} size={Size51.M} />}
      width={Size51.Container}
    />
    <Flex29 justifyContent="space-between" className="locations-filters">
      <MenuButton5 id="user-filter-users">
        <MenuButtonToggle5 buttonType={ButtonType33.Secondary}>{t("events.filterBar.filter")}</MenuButtonToggle5>
        <MenuButtonList5>
          <MenuButtonListItem5 onSelect={() => handleChange("byName")}>{t("profile.byName")}</MenuButtonListItem5>
          <MenuButtonListItem5 onSelect={() => handleChange("byMostRecentChanges")}>{t("profile.byMostRecentChanges")}</MenuButtonListItem5>
          <MenuButtonListItem5 onSelect={() => handleChange("byNumberOfGroupsAsc")}>{t("profile.byNumberOfGroupsAscending")}</MenuButtonListItem5>
          <MenuButtonListItem5 onSelect={() => handleChange("byNumberOfGroupsDesc")}>{t("profile.byNumberOfGroupsDescending")}</MenuButtonListItem5>
        </MenuButtonList5>
      </MenuButton5>
      <MenuButton5 id="user-sort-users">
        <MenuButtonToggle5 buttonType={ButtonType33.Secondary}>{t("profile.sort")}</MenuButtonToggle5>
        <MenuButtonList5>
          <MenuButtonListItem5 onSelect={() => handleChange("byName")}>{t("profile.byName")}</MenuButtonListItem5>
          <MenuButtonListItem5 onSelect={() => handleChange("byMostRecentChanges")}>{t("profile.byMostRecentChanges")}</MenuButtonListItem5>
          <MenuButtonListItem5 onSelect={() => handleChange("byNumberOfGroupsAsc")}>{t("profile.byNumberOfGroupsAscending")}</MenuButtonListItem5>
          <MenuButtonListItem5 onSelect={() => handleChange("byNumberOfGroupsDesc")}>{t("profile.byNumberOfGroupsDescending")}</MenuButtonListItem5>
        </MenuButtonList5>
      </MenuButton5>
      <Button37 id="locations-select-button" onClick={toggleSelectModal}>{t("reports.select")}</Button37>
      {showDialogs.select && <SelectLocationsDialog_default isVisible={showDialogs.select} onDismiss={toggleSelectModal} />}
    </Flex29>
    {props.selectedLocationsNum === 0 ? <EmptyState
      illustration={"nothingSelected" /* nothingSelected */}
      heading="reports.nothingSelected"
      description="reports.emptyLocationsNote"
    /> : filteredLocationsCount === 0 ? <span className="no-results-text">{t("noResults")}</span> : <SelectedLocationsList_default selectedLocations={filteredLocations} />}
  </Paper7>;
}, "LocationsList");
var mapStateToProps12 = /* @__PURE__ */ __name(({ reports }) => ({
  selectedLocationsNum: reports.selectedLocationsNum,
  selectedFormattedLocations: reports.selectedFormattedLocations,
  loading: reports.isApiLoading
}), "mapStateToProps");
var LocationsList_default = connect13(mapStateToProps12)(LocationsList);

// ../vlncc-frontend/src/components/Reports/LocationsFilterBar/LocationsFilterBar.tsx
import * as React58 from "react";
import {
  subDays as subDays3,
  format as format5,
  isAfter as isAfter2,
  subWeeks,
  subMonths,
  set as set2,
  isSameDay,
  isBefore as isBefore3,
  subYears,
  addMinutes as addMinutes3,
  subMinutes,
  addYears
} from "date-fns";
import { Form as Form17, Size as Size54, Button as Button40, ButtonType as ButtonType35, DatePicker as DatePicker2, Flex as Flex32 } from "@vaisala-rockhopper/components";
import { useTranslation as useTranslation59 } from "react-i18next";
import "./locations-filter-bar.scss";
import { connect as connect15 } from "react-redux";

// ../vlncc-frontend/src/components/Reports/GenerateReportDialog/GenerateReportDialog.tsx
import * as React57 from "react";
import {
  Size as Size52,
  Button as Button38,
  ButtonType as ButtonType34,
  Modal as Modal5,
  Heading as Heading18,
  Flex as Flex30,
  InputField as InputField19,
  Icon as Icon32,
  Grid as Grid3,
  Form as Form16,
  Select as Select8,
  Checkbox as Checkbox9
} from "@vaisala-rockhopper/components";
import { VaiColor as VaiColor10, VaiIcon as VaiIcon23 } from "@vaisala-rockhopper/design-tokens";
import { useTranslation as useTranslation57 } from "react-i18next";
import "./generate-report-dialog.scss";
import { connect as connect14 } from "react-redux";
import { addMinutes as addMinutes2, differenceInMinutes, format as format4, getUnixTime as getUnixTime2, isBefore as isBefore2 } from "date-fns";
import { isEqual as isEqual2 } from "lodash";
var MAX_TITLE_CHARACTERS = 256;
var GenerateReportDialog = /* @__PURE__ */ __name((props) => {
  const { t } = useTranslation57();
  const [generateReportAPI, { isLoading }] = useGenerateReportMutation();
  const customerId = getConstantFromLocalStorage(LS_COMPANY_CUSTOMER_ID);
  const titleFormatter = /* @__PURE__ */ __name((dateStr) => {
    return `viewLinc ${dateStr.toString().replace(/:/g, "\uA789")}`;
  }, "titleFormatter");
  const [title, setTitle] = React57.useState(titleFormatter(format4(/* @__PURE__ */ new Date(), "yyyy-MM-dd HH:mm:ss")));
  const [titleError, setTitleError] = React57.useState("");
  const [formatType, setFormatType] = React57.useState("");
  const [notifyByEmail, setNotifyByEmail] = React57.useState(true);
  const [showAboutContent, setShowAboutContent] = React57.useState(false);
  const [includedSections, setIncludedSections] = React57.useState({
    ["locationSummaryTable" /* LOCATIONS_SUMMARY */]: {
      checked: true,
      disabled: false,
      label: t("reports.locationsSummaryTable")
    },
    ["graphsByThreshold" /* GRAPHS_BY_THRESHOLD */]: {
      checked: true,
      disabled: false,
      label: t("reports.graphsByThreshold")
    },
    ["statisticsSummary" /* STATISTICS_SUMMARY */]: {
      checked: true,
      disabled: false,
      label: t("reports.statisticsSummary")
    },
    ["alarms" /* ALARMS */]: {
      checked: true,
      disabled: false,
      label: t("reports.alarms")
    },
    ["dataTables" /* DATA_TABLE */]: {
      checked: false,
      disabled: false,
      label: t("reports.dataTable")
    }
  });
  const [includedSectionsCount, setIncludedSectionsCount] = React57.useState(Object.keys(includedSections).length - 1);
  const [dataTableInterval, setDataTableInterval] = React57.useState("0");
  const [estimatedPagesCount, setEstimatedPagesCount] = React57.useState(1);
  const { timezone } = useUserSettings_default();
  const getNumberOfMinutes = /* @__PURE__ */ __name((from, to, interval) => {
    let count = 0;
    while (isBefore2(from, to) || isEqual2(from, to)) {
      count++;
      from = addMinutes2(from, interval);
    }
    return count;
  }, "getNumberOfMinutes");
  const calculateEstimatedPageCount = /* @__PURE__ */ __name(() => {
    let count = 1 + Math.ceil(props.selectedFormattedLocationsNum / 20);
    if (includedSections["locationSummaryTable" /* LOCATIONS_SUMMARY */].checked) {
      count += Math.ceil(props.selectedFormattedLocationsNum / 6);
    }
    if (includedSections["graphsByThreshold" /* GRAPHS_BY_THRESHOLD */].checked) {
      count += Math.ceil(
        (Math.ceil(props.selectedFormattedLocationsNum / MAX_LOCATIONS_SELECTED) + props.selectedFormattedLocationsNum) / 2
      );
    }
    if (includedSections["statisticsSummary" /* STATISTICS_SUMMARY */].checked) {
      count += props.graphsNum * 2;
    }
    if (includedSections["alarms" /* ALARMS */].checked) {
      count += Math.ceil(
        (Math.ceil(props.selectedFormattedLocationsNum / 4) + props.selectedFormattedLocationsNum) / 2
      );
    }
    if (includedSections["dataTables" /* DATA_TABLE */].checked) {
      let dateRange;
      if (+dataTableInterval > 0) {
        dateRange = getNumberOfMinutes(props.intervalDate.from, props.intervalDate.to, +dataTableInterval);
      } else {
        dateRange = differenceInMinutes(props.intervalDate.to, props.intervalDate.from, { roundingMethod: "ceil" });
      }
      count += Math.ceil(props.selectedFormattedLocationsNum / 8) * Math.ceil(dateRange / 50);
    }
    if (count > 20) {
      count = Math.ceil(count / 5) * 5;
    }
    setEstimatedPagesCount(count);
  }, "calculateEstimatedPageCount");
  React57.useEffect(() => {
    calculateEstimatedPageCount();
  }, [includedSections, dataTableInterval]);
  React57.useEffect(() => {
    if (formatType === "CSV" /* CSV */ || formatType === "XLSX" /* XLSX */) {
      disableGraphsAndAlarms(true);
    } else if (formatType === "PDF" /* PDF */) {
      disableGraphsAndAlarms(false);
    }
  }, [formatType]);
  const intervalValues = [
    { value: "0", label: t("reports.noIntervals") },
    { value: "5", label: t("reports.minuteInterval", { count: 5 }) },
    { value: "10", label: t("reports.minuteInterval", { count: 10 }) },
    { value: "30", label: t("reports.minuteInterval", { count: 30 }) },
    { value: "60", label: t("reports.minuteInterval", { count: 60 }) }
  ];
  const aboutContent = [
    {
      title: t("reports.locationsSummaryTable"),
      description: "A summary of the device and date source information at each location in the graph."
    },
    {
      title: t("reports.graphsByThreshold"),
      description: "A summary of the device and date source information at each location in the graph."
    },
    {
      title: t("reports.statisticsSummary"),
      description: "A summary of the device and date source information at each location in the graph."
    },
    {
      title: t("reports.alarms"),
      description: "A summary of the device and date source information at each location in the graph."
    },
    {
      title: t("reports.dataTable"),
      description: "A summary of the device and date source information at each location in the graph."
    }
  ];
  const disableGraphsAndAlarms = /* @__PURE__ */ __name((disabled) => {
    setIncludedSections({
      ...includedSections,
      ["graphsByThreshold" /* GRAPHS_BY_THRESHOLD */]: {
        ...includedSections["graphsByThreshold" /* GRAPHS_BY_THRESHOLD */],
        disabled,
        checked: disabled ? false : includedSections["graphsByThreshold" /* GRAPHS_BY_THRESHOLD */].checked
      },
      ["alarms" /* ALARMS */]: {
        ...includedSections["alarms" /* ALARMS */],
        disabled,
        checked: disabled ? false : includedSections["alarms" /* ALARMS */].checked
      }
    });
  }, "disableGraphsAndAlarms");
  const toggleIncludedSection = /* @__PURE__ */ __name((key) => {
    const prevChecked = includedSections[key].checked;
    if (prevChecked && includedSectionsCount > 1) {
      setIncludedSections({
        ...includedSections,
        [key]: { ...includedSections[key], checked: !includedSections[key].checked }
      });
      setIncludedSectionsCount(includedSectionsCount - 1);
    } else if (!prevChecked) {
      setIncludedSections({
        ...includedSections,
        [key]: { ...includedSections[key], checked: !includedSections[key].checked }
      });
      setIncludedSectionsCount(includedSectionsCount + 1);
    }
  }, "toggleIncludedSection");
  const generateReport = /* @__PURE__ */ __name(() => {
    const sections = {};
    for (const section in includedSections) {
      if (includedSections[section].checked && !includedSections[section].disabled) {
        sections[section] = true;
      }
    }
    generateReportAPI({
      body: {
        startDateTime: getUnixTime2(props.intervalDate.from),
        endDateTime: getUnixTime2(props.intervalDate.to),
        nodes: props.selectedLocationsIDs,
        format: formatType,
        reportTitle: title,
        tz: timezone,
        emailNotification: notifyByEmail,
        ...sections,
        ...sections["dataTables" /* DATA_TABLE */] ? { dataTableInterval: Number(dataTableInterval) * 60 } : {}
      },
      customerId
    }).unwrap().then((data) => {
      props.showConfirmation();
    }).catch((e) => {
      console.error(e);
    });
  }, "generateReport");
  const renderSection = /* @__PURE__ */ __name((key) => <React57.Fragment key={key}>
    <Checkbox9
      data-testid={key}
      id="included-checkbox"
      checked={includedSections[key].checked}
      disabled={includedSections[key].disabled}
      label={includedSections[key].label}
      onChange={() => toggleIncludedSection(key)}
    />
    {key === "dataTables" /* DATA_TABLE */ && <Select8
      id="datatable-interval"
      width={Size52.L}
      value={dataTableInterval}
      onSelect={(value) => setDataTableInterval(value)}
      disabled={!includedSections[key].checked}
    >{intervalValues.map((option) => <Select8.Option key={option.value} value={option.value}>{option.label}</Select8.Option>)}</Select8>}
  </React57.Fragment>, "renderSection");
  const toggleAboutContent = /* @__PURE__ */ __name(() => setShowAboutContent(!showAboutContent), "toggleAboutContent");
  const onTitleChange = /* @__PURE__ */ __name((e) => {
    const value = e.target.value;
    setTitle(value);
    if (value.length > MAX_TITLE_CHARACTERS) {
      setTitleError(t("reports.maxTitleError", { max: MAX_TITLE_CHARACTERS }));
    } else {
      setTitleError("");
    }
  }, "onTitleChange");
  return <div data-testid="generate-report-dialog-id"><Modal5
    id="generate-report-dialog-id"
    htmlId="generate-report-dialog-id"
    isOpen={props.isVisible}
    showCloseIcon={true}
    onDismiss={props.onDismiss}
    width={Size52.L}
    dismissOnOverlayClick={false}
  >
    <Heading18 className="vai-margin-top-none generate-report-header">{t("reports.generateReport")}</Heading18>
    <Grid3 className="main-grid-wrapper"><Grid3.Row className="row">
      <Grid3.Col md={7} lg={7} xl={7} className="left-column">
        <div>
          <span className="col-title">
            {props.selectedFormattedLocationsNum}
            {" "}
            <span className="capitalize">{t("reports.locations")}</span>
          </span>
          <Form16 className="report-form">
            <Form16.Item
              id="report-title"
              component={InputField19}
              label={t("reports.title")}
              labelWidth={Size52.S}
              required
              width={Size52.L}
              value={title}
              errors={titleError}
              onChange={onTitleChange}
            />
            <Form16.Item required label="Format" labelWidth={Size52.S}><Select8
              id="reports-format"
              placeholder={t("reports.selectPlaceholder")}
              width={Size52.L}
              onSelect={(value) => setFormatType(value)}
            >
              <Select8.Option value={"PDF" /* PDF */}>PDF</Select8.Option>
              <Select8.Option value={"XLSX" /* XLSX */}>XLSX</Select8.Option>
              <Select8.Option value={"CSV" /* CSV */}>CSV</Select8.Option>
            </Select8></Form16.Item>
            <div className="date-range-wrapper">
              <span className="date-range-title">{t("reports.dateRange")}</span>
              <Flex30 className="date-range">
                <span>{format4(props.intervalDate.from, "yyyy/MM/dd HH:mm:ss")}</span>
                <Icon32 size={Size52.M} name={VaiIcon23.ArrowRight} className="date-separator" />
                <span>{format4(props.intervalDate.to, "yyyy/MM/dd HH:mm:ss")}</span>
              </Flex30>
            </div>
          </Form16>
        </div>
        <div className="notify-checkbox-wrapper inverted"><Checkbox9
          id="notify-checkbox"
          checked={notifyByEmail}
          label={t("reports.notifyWhenReportReady")}
          disabled={true}
        /></div>
      </Grid3.Col>
      <Grid3.Col md={5} lg={5} xl={5} className="right-column">
        <div>
          <div className="col-title vai-margin-bottom-m">{t("reports.include")}</div>
          <Flex30 flexDirection="column" className="included-checkbox-wrapper">{Object.keys(includedSections).map(renderSection)}</Flex30>
        </div>
        <Flex30 justifyContent="space-between">
          <span>{t("reports.estimatedPageCount")}</span>
          <Flex30 className="page-count">
            <span data-testid="estimated-page-count" data-value={estimatedPagesCount}>{t("reports.pagesCount", { num: new Intl.NumberFormat().format(estimatedPagesCount) })}</span>
            {estimatedPagesCount > MAX_ESTIMATED_PAGES_BEFORE_WARNING && <Icon32 name={VaiIcon23.AlertAlarm} color={VaiColor10.Red} size={Size52.M} />}
          </Flex30>
        </Flex30>
      </Grid3.Col>
    </Grid3.Row></Grid3>
    <Flex30 className="vai-margin-top-m generate-report-bottom-bar" justifyContent="center" alignItems="center">
      <div className="about-toggle" onClick={toggleAboutContent}>
        <Icon32 name={VaiIcon23.HelpO} color={VaiColor10.AquaVaisala} size={Size52.M} />
        <span>{t("reports.aboutReporting")}</span>
      </div>
      <Button38
        id="generate-report-confirm"
        data-testid="generate-report-confirm"
        disabled={!title || titleError || !formatType ? true : estimatedPagesCount > MAX_ESTIMATED_PAGES_ALLOWED || isLoading}
        htmlId="generate-report-confirm"
        onClick={generateReport}
      >{isLoading ? <CenteredSpinner_default className="" /> : t("reports.generate")}</Button38>
      <Button38
        id="generate-report-cancel"
        htmlId="generate-report-cancel"
        onClick={props.onDismiss}
        buttonType={ButtonType34.Secondary}
      >{t("general.cancel")}</Button38>
    </Flex30>
    {showAboutContent && <div className="about-content">
      <span className="main-title">
        {t("reports.whatIsIncluded")}
        {":"}
      </span>
      {aboutContent.map((content) => <Flex30 flexDirection="column" className="about-section" key={content.title}>
        <span className="sub-title">{content.title}</span>
        <span>{content.description}</span>
      </Flex30>)}
    </div>}
  </Modal5></div>;
}, "GenerateReportDialog");
var mapStateToProps13 = /* @__PURE__ */ __name(({ reports }) => ({
  selectedFormattedLocations: reports.selectedFormattedLocations,
  selectedFormattedLocationsNum: reports.selectedLocationsNum,
  graphsNum: reports.graphsNum,
  intervalDate: reports.intervalDate,
  selectedLocationsIDs: reports.selectedLocationsIDs
}), "mapStateToProps");
var mapDispatchToProps11 = /* @__PURE__ */ __name((dispatch) => ({
  setReportSelectedFormattedLocations: (locations) => dispatch(reportsDispatchActions.setReportSelectedFormattedLocations(locations)),
  setReportSelectedLocationsNum: (number) => dispatch(reportsDispatchActions.setReportSelectedLocationsNum(number)),
  setReportSelectedLocationsIDs: (IDs) => dispatch(reportsDispatchActions.setReportSelectedLocationsIDs(IDs))
}), "mapDispatchToProps");
var GenerateReportDialog_default = connect14(mapStateToProps13, mapDispatchToProps11)(GenerateReportDialog);

// ../vlncc-frontend/src/components/Reports/ConfirmationDialog/ConfirmationDialog.tsx
import { Size as Size53, Modal as Modal6, Heading as Heading19, Button as Button39, Flex as Flex31 } from "@vaisala-rockhopper/components";
import { useTranslation as useTranslation58 } from "react-i18next";
import "./confirmation-dialog.scss";
var ConfirmationDialog = /* @__PURE__ */ __name((props) => {
  const { t } = useTranslation58();
  return <div data-testid="confirmation-dialog-id"><Modal6
    id="confirmation-dialog-id"
    htmlId="confirmation-dialog-id"
    isOpen={props.isVisible}
    showCloseIcon={true}
    onDismiss={props.onDismiss}
    width={Size53.M}
    dismissOnOverlayClick={false}
  >
    <Heading19 className="vai-margin-top-none confirmation-header">{t("reports.isBeingGenerated")}</Heading19>
    <Flex31 flexDirection="column" className="confirmation-content">
      <p>{t("reports.linkWillBeEmailed")}</p>
      <p>{t("reports.mayTakeFewMinutes")}</p>
    </Flex31>
    <Flex31 className="vai-margin-top-m confirmation-bottom-bar" justifyContent="center" alignItems="center"><Button39
      id="confirmation-confirm"
      data-testid="confirmation-confirm"
      htmlId="confirmation-confirm"
      onClick={props.onDismiss}
    >{t("general.ok")}</Button39></Flex31>
  </Modal6></div>;
}, "ConfirmationDialog");
var ConfirmationDialog_default = ConfirmationDialog;

// ../vlncc-frontend/src/components/Reports/LocationsFilterBar/LocationsFilterBar.tsx
var LocationsFilterBar = /* @__PURE__ */ __name(({
  setReportIntervalDate: setReportIntervalDate2,
  intervalDate,
  selectedLocationsNum
}) => {
  const { t } = useTranslation59();
  const { today: today2 } = React58.useContext(TimeContext_default);
  const initialDateAndTime = getHoursMinutes(today2);
  const [locationsFilter, setLocationsFilter] = React58.useState({
    timeSpan: "24hr" /* ONE_DAY */,
    fromDate: subDays3(today2, 1),
    fromDateTime: initialDateAndTime,
    toDate: today2,
    toDateTime: initialDateAndTime
  });
  const [outsideRender, setOutsideRender] = React58.useState(false);
  const [showDialogs, setShowDialogs] = React58.useState({
    generateReport: false,
    confirmation: false
  });
  React58.useEffect(() => {
    const [fromHours, fromMinutes] = locationsFilter.fromDateTime.split(":");
    const fromDateWhole = set2(locationsFilter.fromDate, { hours: +fromHours, minutes: +fromMinutes });
    const [toHours, toMinutes] = locationsFilter.toDateTime.split(":");
    const toDateWhole = set2(locationsFilter.toDate, { hours: +toHours, minutes: +toMinutes });
    if (fromDateWhole.toString() !== intervalDate.from.toString() || toDateWhole.toString() !== intervalDate.to.toString()) {
      setOutsideRender(true);
      setLocationsFilter({
        ...locationsFilter,
        timeSpan: null,
        fromDate: intervalDate.from,
        fromDateTime: getNearestEnabledTimeOption(format5(intervalDate.from, "HH:mm")),
        toDate: intervalDate.to,
        toDateTime: getNearestEnabledTimeOption(format5(intervalDate.to, "HH:mm"))
      });
    }
  }, [intervalDate]);
  React58.useEffect(() => {
    if (outsideRender) {
      setOutsideRender(false);
    } else {
      const [fromHours, fromMinutes] = locationsFilter.fromDateTime.split(":");
      const fromDateWhole = set2(locationsFilter.fromDate, { hours: +fromHours, minutes: +fromMinutes });
      const [toHours, toMinutes] = locationsFilter.toDateTime.split(":");
      const toDateWhole = set2(locationsFilter.toDate, { hours: +toHours, minutes: +toMinutes });
      if (isBefore3(fromDateWhole, subYears(toDateWhole, MAX_TIME_DURATION_IN_YEARS))) {
        setLocationsFilter({
          ...locationsFilter,
          toDate: addYears(locationsFilter.fromDate, MAX_TIME_DURATION_IN_YEARS),
          toDateTime: locationsFilter.fromDateTime
        });
      } else if (isAfter2(fromDateWhole, toDateWhole)) {
        setLocationsFilter({
          ...locationsFilter,
          toDate: locationsFilter.fromDate,
          toDateTime: format5(addMinutes3(fromDateWhole, MIN_TIME_DURATION_IN_MINUTES), "HH:mm")
        });
      } else if (toDateWhole.toString() === fromDateWhole.toString()) {
        setLocationsFilter({
          ...locationsFilter,
          fromDate: locationsFilter.fromDate,
          fromDateTime: format5(subMinutes(toDateWhole, MIN_TIME_DURATION_IN_MINUTES), "HH:mm")
        });
      } else {
        setReportIntervalDate2({ from: fromDateWhole, to: toDateWhole });
      }
    }
  }, [locationsFilter.fromDate, locationsFilter.fromDateTime]);
  React58.useEffect(() => {
    if (outsideRender) {
      setOutsideRender(false);
    } else {
      const [fromHours, fromMinutes] = locationsFilter.fromDateTime.split(":");
      const fromDateWhole = set2(locationsFilter.fromDate, { hours: +fromHours, minutes: +fromMinutes });
      const [toHours, toMinutes] = locationsFilter.toDateTime.split(":");
      const toDateWhole = set2(locationsFilter.toDate, { hours: +toHours, minutes: +toMinutes });
      if (isBefore3(toDateWhole, fromDateWhole) || toDateWhole.toString() === fromDateWhole.toString()) {
        setLocationsFilter({
          ...locationsFilter,
          fromDate: subMinutes(toDateWhole, MIN_TIME_DURATION_IN_MINUTES),
          fromDateTime: format5(subMinutes(toDateWhole, MIN_TIME_DURATION_IN_MINUTES), "HH:mm")
        });
      } else if (isAfter2(toDateWhole, addYears(fromDateWhole, MAX_TIME_DURATION_IN_YEARS))) {
        setLocationsFilter({
          ...locationsFilter,
          fromDate: subYears(locationsFilter.toDate, MAX_TIME_DURATION_IN_YEARS),
          fromDateTime: locationsFilter.toDateTime
        });
      } else {
        setReportIntervalDate2({ from: fromDateWhole, to: toDateWhole });
      }
    }
  }, [locationsFilter.toDate, locationsFilter.toDateTime]);
  const timeSpanButtons = [
    {
      id: "24-hr-btn",
      compareWith: "24hr" /* ONE_DAY */,
      onClick: () => {
        changeDatesFilters("24hr" /* ONE_DAY */);
      },
      text: t("reports.filterBar.24hr")
    },
    {
      id: "1-week-btn",
      compareWith: "1week" /* ONE_WEEK */,
      onClick: () => {
        changeDatesFilters("1week" /* ONE_WEEK */);
      },
      text: t("reports.filterBar.1week")
    },
    {
      id: "1-month-btn",
      compareWith: "1month" /* ONE_MONTH */,
      onClick: () => {
        changeDatesFilters("1month" /* ONE_MONTH */);
      },
      text: t("reports.filterBar.1month")
    }
  ];
  const changeDatesFilters = /* @__PURE__ */ __name((timeSpan) => {
    switch (timeSpan) {
      case "24hr" /* ONE_DAY */:
        setLocationsFilter({
          timeSpan: "24hr" /* ONE_DAY */,
          fromDate: subDays3(today2, 1),
          fromDateTime: initialDateAndTime,
          toDate: today2,
          toDateTime: initialDateAndTime
        });
        break;
      case "1week" /* ONE_WEEK */:
        setLocationsFilter({
          timeSpan: "1week" /* ONE_WEEK */,
          fromDate: subWeeks(today2, 1),
          fromDateTime: initialDateAndTime,
          toDate: today2,
          toDateTime: initialDateAndTime
        });
        break;
      case "1month" /* ONE_MONTH */:
        setLocationsFilter({
          timeSpan: "1month" /* ONE_MONTH */,
          fromDate: subMonths(today2, 1),
          fromDateTime: initialDateAndTime,
          toDate: today2,
          toDateTime: initialDateAndTime
        });
        break;
      default:
        break;
    }
  }, "changeDatesFilters");
  const isTimeBeforeTime = /* @__PURE__ */ __name((time1, time2) => {
    const date1 = /* @__PURE__ */ new Date(`2010-01-01 ${time1}`);
    const date2 = /* @__PURE__ */ new Date(`2010-01-01 ${time2}`);
    return isBefore3(date1, date2);
  }, "isTimeBeforeTime");
  return <div id="locations-filter-bar" data-testid="locations-filter-bar">
    <div id="locations-filter-bar-left-item" className="item-left">
      <Flex32 alignItems="flex-end" className="filter-span-wrapper">{timeSpanButtons.map((btnOptions) => <Button40
        id="s"
        data-testid={btnOptions.id}
        key={btnOptions.id}
        buttonSize={Size54.S}
        onClick={btnOptions.onClick}
        buttonType={locationsFilter.timeSpan === btnOptions.compareWith ? ButtonType35.Primary : ButtonType35.Secondary}
      >{btnOptions.text}</Button40>)}</Flex32>
      <Flex32 className="date-pickers-wrapper">
        <Flex32 alignItems="flex-end"><Form17.Item label={t("events.filterBar.from")} className="form-item"><Flex32 id="from-pickers-wrapper" data-value={intervalDate.from.toISOString()}>
          <DatePicker2
            id="reports-filter-bar-from-date-picker"
            value={locationsFilter.fromDate}
            onChange={(value) => {
              if (isSameDay(value, today2) && !isTimeBeforeTime(
                locationsFilter.fromDateTime,
                format5(subMinutes(today2, MIN_TIME_DURATION_IN_MINUTES), "HH:mm")
              )) {
                setLocationsFilter((prevValue) => ({
                  ...prevValue,
                  timeSpan: null,
                  fromDate: value,
                  fromDateTime: getNearestEnabledTimeOption(
                    format5(subMinutes(today2, MIN_TIME_DURATION_IN_MINUTES), "HH:mm")
                  )
                }));
              } else {
                setLocationsFilter((prevValue) => ({ ...prevValue, timeSpan: null, fromDate: value }));
              }
            }}
            filterDate={(d) => {
              return !isBefore3(d, subYears(subDays3(today2, 1), 3)) && !isAfter2(d, today2);
            }}
            width={Size54.S}
            name="fromDate"
          />
          <TimePicker_default
            id="reports-filter-bar-from-time-picker"
            testId="timepicker-fromTime"
            value={locationsFilter.fromDateTime}
            onChange={(value) => {
              setLocationsFilter((prevValue) => ({ ...prevValue, timeSpan: null, fromDateTime: value }));
            }}
            {...isSameDay(locationsFilter.fromDate, subYears(today2, MAX_TIME_DURATION_IN_YEARS)) ? { minTime: format5(today2, "HH:mm") } : {}}
            {...isSameDay(locationsFilter.fromDate, today2) ? { maxTime: format5(subMinutes(today2, MIN_TIME_DURATION_IN_MINUTES), "HH:mm") } : {}}
          />
        </Flex32></Form17.Item></Flex32>
        <Flex32 alignItems="flex-end"><Form17.Item label={t("events.filterBar.to")} className="form-item"><Flex32 id="to-pickers-wrapper" data-value={intervalDate.to.toISOString()}>
          <DatePicker2
            id="reports-filter-bar-to-date-picker"
            value={locationsFilter.toDate}
            onChange={(value) => {
              setLocationsFilter((prevValue) => ({ ...prevValue, timeSpan: null, toDate: value }));
            }}
            filterDate={(d) => {
              return !isBefore3(d, subYears(subDays3(today2, 1), 3)) && !isAfter2(d, today2);
            }}
            width={Size54.S}
            name="toDate"
          />
          <TimePicker_default
            id="reports-filter-bar-to-time-picker"
            testId="timepicker-toTime"
            value={locationsFilter.toDateTime}
            onChange={(value) => {
              setLocationsFilter((prevValue) => ({ ...prevValue, timeSpan: null, toDateTime: value }));
            }}
            {...isSameDay(locationsFilter.toDate, today2) ? { maxTime: initialDateAndTime } : {}}
          />
        </Flex32></Form17.Item></Flex32>
      </Flex32>
    </div>
    <div className="item-right" id="locations-filter-bar-right-item">
      <Form17.Item className="empty-label" labelWidth={Size54.S}><Button40
        id="report-generate-filter-button"
        buttonSize={Size54.M}
        disabled={selectedLocationsNum === 0}
        type="button"
        onClick={() => setShowDialogs({ ...showDialogs, generateReport: true })}
      >{t("reports.filterBar.report")}</Button40></Form17.Item>
      {showDialogs.generateReport && <GenerateReportDialog_default
        isVisible={showDialogs.generateReport}
        onDismiss={() => setShowDialogs({ ...showDialogs, generateReport: false })}
        showConfirmation={() => setShowDialogs({ ...showDialogs, confirmation: true, generateReport: false })}
      />}
      {showDialogs.confirmation && <ConfirmationDialog_default
        isVisible={showDialogs.confirmation}
        onDismiss={() => setShowDialogs({ ...showDialogs, confirmation: false })}
      />}
    </div>
  </div>;
}, "LocationsFilterBar");
var mapDispatchToProps12 = /* @__PURE__ */ __name((dispatch) => ({
  setReportIntervalDate: (interval) => dispatch(reportsDispatchActions.setReportIntervalDate(interval))
}), "mapDispatchToProps");
var mapStateToProps14 = /* @__PURE__ */ __name(({ reports }) => ({
  intervalDate: reports.intervalDate,
  selectedLocationsNum: reports.selectedLocationsNum
}), "mapStateToProps");
var LocationsFilterBar_default = connect15(mapStateToProps14, mapDispatchToProps12)(LocationsFilterBar);

// ../vlncc-frontend/src/components/Reports/Graph/Graph.tsx
import * as React61 from "react";
import { connect as connect18 } from "react-redux";
import uPlot2 from "uplot";

// ../vlncc-frontend/src/components/Reports/Chart/Chart.tsx
import * as React60 from "react";
import { connect as connect17 } from "react-redux";
import uPlot from "uplot";
import { format as format7, fromUnixTime, getUnixTime as getUnixTime3 } from "date-fns";
import "uplot/dist/uPlot.min.css";
import "./chart.scss";
import UPlotReact from "uplot-react";
import { Flex as Flex34 } from "@vaisala-rockhopper/components";
import { VaiColor as VaiColor11 } from "@vaisala-rockhopper/design-tokens";
import AlertAlarmIcon from "../../../assets/images/AlertAlarm.svg";
import AlertWarningIcon from "../../../assets/images/AlertWarning.svg";
import { useTranslation as useTranslation60 } from "react-i18next";

// ../vlncc-frontend/src/components/Reports/ChartIntervalArrows/ChartIntervalArrows.tsx
import { Flex as Flex33, Icon as Icon33, Size as Size55 } from "@vaisala-rockhopper/components";
import { VaiIcon as VaiIcon24 } from "@vaisala-rockhopper/design-tokens";
import {
  addMinutes as addMinutes4,
  addSeconds,
  format as format6,
  isAfter as isAfter3,
  isBefore as isBefore4,
  isSameDay as isSameDay2,
  set as set3,
  setMilliseconds,
  subMinutes as subMinutes2,
  subSeconds,
  subYears as subYears2
} from "date-fns";
import * as React59 from "react";
import { connect as connect16 } from "react-redux";
import "./chart-interval-arrows.scss";
var ChartIntervalArrows = /* @__PURE__ */ __name(({
  reports,
  setReportIntervalDate: setReportIntervalDate2,
  stepInterval
}) => {
  const [nextPrevInterval, setNextPrevInterval] = React59.useState({
    nextQuarter: addMinutes4(reports.intervalDate.to, stepInterval.quarterStep),
    nextFull: addMinutes4(reports.intervalDate.to, stepInterval.fullStep),
    prevQuarter: subMinutes2(reports.intervalDate.from, stepInterval.quarterStep),
    prevFull: subMinutes2(reports.intervalDate.from, stepInterval.fullStep)
  });
  const { today: today2 } = React59.useContext(TimeContext_default);
  React59.useEffect(() => {
    setNextPrevInterval({
      nextQuarter: addSeconds(reports.intervalDate.to, stepInterval.quarterStep),
      nextFull: addSeconds(reports.intervalDate.to, stepInterval.fullStep),
      prevQuarter: subSeconds(reports.intervalDate.from, stepInterval.quarterStep),
      prevFull: subSeconds(reports.intervalDate.from, stepInterval.fullStep)
    });
  }, [stepInterval]);
  const moveGraphInterval = /* @__PURE__ */ __name((direction, stepSize = "quarter" /* QUARTER */) => {
    const interval = stepSize === "quarter" /* QUARTER */ ? stepInterval.quarterStep : stepInterval.fullStep;
    if (direction === "left" /* LEFT */) {
      setReportIntervalDate2({
        from: subSeconds(reports.intervalDate.from, interval),
        to: subSeconds(reports.intervalDate.to, interval)
      });
    } else if (direction === "right" /* RIGHT */) {
      setReportIntervalDate2({
        from: addSeconds(reports.intervalDate.from, interval),
        to: addSeconds(reports.intervalDate.to, interval)
      });
    } else {
      const time = getNearestEnabledTimeOption(format6(today2, "HH:mm"));
      const toDate = set3(today2, { minutes: +time.split(":")[1] });
      setReportIntervalDate2({
        from: subSeconds(toDate, stepInterval.fullStep),
        to: toDate
      });
    }
  }, "moveGraphInterval");
  return <Flex33 className="date-wrapper" alignItems="center" justifyContent="space-around">
    <Icon33
      size={Size55.L}
      name={VaiIcon24.DoubleChevronLeft}
      className={`arrow ${isBefore4(setMilliseconds(nextPrevInterval.prevFull, 0), setMilliseconds(subYears2(today2, 3), 0)) ? "disabled" : ""}`}
      onClick={() => moveGraphInterval("left" /* LEFT */, "full" /* FULL */)}
    />
    <Icon33
      size={Size55.L}
      name={VaiIcon24.ChevronLeft}
      className={`arrow ${isBefore4(setMilliseconds(nextPrevInterval.prevQuarter, 0), setMilliseconds(subYears2(today2, 3), 0)) ? "disabled" : ""}`}
      onClick={() => moveGraphInterval("left" /* LEFT */, "quarter" /* QUARTER */)}
    />
    <span>{format6(reports.intervalDate.from, "HH:mm")}</span>
    <span>{format6(reports.intervalDate.from, "yyyy-MM-dd")}</span>
    <Icon33 size={Size55.M} name={VaiIcon24.ArrowRight} className="date-separator" />
    <span>{format6(reports.intervalDate.to, "HH:mm")}</span>
    <span>{format6(reports.intervalDate.to, "yyyy-MM-dd")}</span>
    <Icon33
      size={Size55.L}
      name={VaiIcon24.ChevronRight}
      className={`arrow ${isAfter3(setMilliseconds(nextPrevInterval.nextQuarter, 0), setMilliseconds(today2, 0)) ? "disabled" : ""}`}
      onClick={() => moveGraphInterval("right" /* RIGHT */, "quarter" /* QUARTER */)}
    />
    <Icon33
      size={Size55.L}
      name={VaiIcon24.DoubleChevronRight}
      className={`arrow ${isAfter3(setMilliseconds(nextPrevInterval.nextFull, 0), setMilliseconds(today2, 0)) ? "disabled" : ""}`}
      onClick={() => moveGraphInterval("right" /* RIGHT */, "full" /* FULL */)}
    />
    <Icon33
      size={Size55.L}
      name={VaiIcon24.ChevronRight}
      className={`right-edge-icon arrow ${getNearestEnabledTimeOption(format6(today2, "HH:mm")) === getNearestEnabledTimeOption(format6(reports.intervalDate.to, "HH:mm")) && isSameDay2(reports.intervalDate.to, today2) ? "disabled" : ""}`}
      onClick={() => moveGraphInterval("right-edge" /* RIGHT_EDGE */)}
    />
  </Flex33>;
}, "ChartIntervalArrows");
var mapStateToProps15 = /* @__PURE__ */ __name(({ reports }) => ({
  reports
}), "mapStateToProps");
var mapDispatchToProps13 = /* @__PURE__ */ __name((dispatch) => ({
  setReportIntervalDate: (interval) => dispatch(reportsDispatchActions.setReportIntervalDate(interval))
}), "mapDispatchToProps");
var ChartIntervalArrows_default = connect16(mapStateToProps15, mapDispatchToProps13)(ChartIntervalArrows);

// ../vlncc-frontend/src/components/Reports/Chart/Chart.tsx
var Chart = /* @__PURE__ */ __name(({
  reports,
  id,
  syncKey,
  locations,
  allLocations,
  data,
  units,
  setReportsSelectedFormattedLocations,
  setReportsSelectedLocationsCustomProps
}) => {
  const { t } = useTranslation60();
  const [stepInterval, setStepInterval] = React60.useState({
    quarterStep: 21600,
    fullStep: 86400
  });
  let locationClicked = null;
  function loadIcon(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        resolve(img);
      };
      img.onerror = reject;
    });
  }
  __name(loadIcon, "loadIcon");
  async function drawThreshold(u, si) {
    const ctx = u.ctx;
    const measurement_points = locations[si - 1].measurement_points;
    const isLabelDrawn = {
      ["hihi" /* HIHI */]: false,
      ["hi" /* HI */]: false,
      ["lolo" /* LOLO */]: false,
      ["lo" /* LO */]: false
    };
    const labels = {};
    async function drawLabel(label) {
      ctx.beginPath();
      ctx.setLineDash([]);
      ctx.strokeStyle = label.lineColorProps.text;
      ctx.fillStyle = label.lineColorProps.background;
      const text = `${label.value} ${CHART_AXES_LABELS[label.scale]}`;
      const textWidth = ctx.measureText(text).width;
      const iconWidth = 25;
      const rectWidth = iconWidth + textWidth + 50;
      const rectHeight = 30;
      const rectX = label.x0 + 20;
      const rectY = label.y0 - rectHeight / 2;
      const iconXPos = rectX + 10;
      ctx.fillRect(rectX, rectY, rectWidth, rectHeight);
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      ctx.fillStyle = label.lineColorProps.text;
      ctx.font = "bold 16px Arial";
      ctx.fillText(text, iconXPos + iconWidth + 10, rectY + rectHeight / 2);
      ctx.font = "16px Arial";
      const img = await loadIcon(label.lineColorProps.icon);
      ctx.drawImage(img, iconXPos, rectY + 2, iconWidth, 25);
    }
    __name(drawLabel, "drawLabel");
    for (let i = 0; i < measurement_points.length; i++) {
      const s = u.series[si];
      const object = measurement_points[i].threshold_settings;
      for (const option in object) {
        if (option.toLowerCase() !== "roc" /* ROC */ && object[option].enabled) {
          let lineColorProps;
          const x0 = u.valToPos(measurement_points[i].t, "x", true);
          const y0 = u.valToPos(object[option].value, s.scale, true);
          const x1 = i < measurement_points.length - 1 ? u.valToPos(measurement_points[i + 1].t, "x", true) : null;
          switch (object[option].color) {
            case "red" /* RED */:
              lineColorProps = { text: VaiColor11.White, background: VaiColor11.Red, icon: null };
              break;
            case "orange" /* ORANGE */:
              lineColorProps = { text: VaiColor11.GreyDark, background: VaiColor11.OrangeDark, icon: null };
              break;
            default:
              lineColorProps = { text: VaiColor11.GreyDark, background: VaiColor11.OrangeDark, icon: null };
          }
          switch (object[option].priority) {
            case "high" /* HIGH */:
              lineColorProps = { ...lineColorProps, icon: AlertAlarmIcon };
              break;
            case "medium" /* MEDIUM */:
              lineColorProps = { ...lineColorProps, icon: AlertWarningIcon };
              break;
            default:
              lineColorProps = { ...lineColorProps, icon: AlertWarningIcon };
          }
          ctx.beginPath();
          ctx.strokeStyle = lineColorProps.background;
          ctx.lineWidth = 2;
          ctx.setLineDash([5, 5]);
          ctx.moveTo(x0, y0);
          ctx.lineTo(x1 || x0, y0);
          ctx.stroke();
          if (!isLabelDrawn[option]) {
            labels[option] = { value: object[option].value, scale: s.scale, lineColorProps, x0, y0 };
            isLabelDrawn[option] = true;
          }
        }
      }
    }
    for (const type in labels) {
      await drawLabel(labels[type]);
    }
  }
  __name(drawThreshold, "drawThreshold");
  function addAxesLabels(u) {
    const axesArr = document.querySelectorAll(`#${id} .u-axis`);
    u.axes.forEach((axis, i) => {
      if (axis.scale !== "x") {
        const axisLabel = document.createElement("div");
        axisLabel.className = "axis-label";
        axisLabel.textContent = CHART_AXES_LABELS[axis.scale] || "";
        axesArr[i].appendChild(axisLabel);
      }
    });
  }
  __name(addAxesLabels, "addAxesLabels");
  const changeThresholdValue = /* @__PURE__ */ __name((node) => {
    const selectedLocationsClone = JSON.parse(JSON.stringify(reports.selectedLocationsCustomProps));
    if (selectedLocationsClone[node.node_id]) {
      selectedLocationsClone[node.node_id].showThreshold = !selectedLocationsClone[node.node_id].showThreshold;
      setReportsSelectedLocationsCustomProps(selectedLocationsClone);
    }
  }, "changeThresholdValue");
  const tooltipPlugin = /* @__PURE__ */ __name(({ shiftX = 10, shiftY = 10, onclick }) => {
    let tooltipLeftOffset = 0;
    let tooltipTopOffset = 0;
    const tooltip = document.createElement("div");
    tooltip.className = "u-tooltip";
    const threshold = document.createElement("div");
    threshold.className = "threshold";
    let seriesIdx;
    let dataIdx;
    let over;
    let tooltipVisible = false;
    let clicked = false;
    let rescaled = false;
    let chartIndex;
    function showTooltip() {
      if (!tooltipVisible) {
        tooltip.style.display = "block";
        over.style.cursor = "pointer";
        tooltipVisible = true;
      }
    }
    __name(showTooltip, "showTooltip");
    function hideTooltip() {
      if (tooltipVisible) {
        tooltip.style.display = "none";
        over.style.cursor = null;
        tooltipVisible = false;
      }
    }
    __name(hideTooltip, "hideTooltip");
    function generateTooltipSortedData(u) {
      const tooltipData = {};
      for (let i = 1; i < u.data.length; i++) {
        if (!tooltipData[u.series[i].scale]) {
          tooltipData[u.series[i].scale] = [];
        }
        tooltipData[u.series[i].scale].push({
          value: u.data[i][dataIdx]?.toFixed(locations[i - 1].decimal_places) || null,
          name: locations[i - 1].name,
          unit: CHART_TOOLTIP_UNITS[u.series[i].scale],
          color: getAssignedChartColor(locations[i - 1].node_id, reports.assignedChartColors)
        });
      }
      const contentHTML = document.createElement("div");
      contentHTML.classList.add("content-values");
      Object.entries(tooltipData).forEach(([key, value]) => {
        tooltipData[key] = value.sort((a, b) => b.value - a.value);
        const groupHeader = document.createElement("div");
        groupHeader.classList.add("row", "group-header");
        const groupHeaderSpan = document.createElement("span");
        groupHeaderSpan.textContent = t(CHART_TOOLTIP_GROUPED_TYPE_TEXT[key]);
        groupHeader.appendChild(groupHeaderSpan);
        contentHTML.appendChild(groupHeader);
        value.forEach((data2) => {
          const row = document.createElement("div");
          row.classList.add("row");
          const nodeName = document.createElement("div");
          nodeName.classList.add("col", "truncated-text");
          nodeName.textContent = data2.name;
          const valueCol = document.createElement("div");
          valueCol.classList.add("col");
          const valueWrapper = document.createElement("div");
          valueWrapper.classList.add("value-wrapper");
          const coloredDot = document.createElement("span");
          coloredDot.classList.add("colored-dot");
          coloredDot.style.backgroundColor = data2.color;
          const valueSpan = document.createElement("span");
          valueSpan.textContent = data2.value ? `${data2.value}` : "-";
          valueWrapper.appendChild(coloredDot);
          valueWrapper.appendChild(valueSpan);
          const unitSpan = document.createElement("span");
          unitSpan.classList.add("data-unit");
          unitSpan.textContent = data2.unit;
          valueCol.appendChild(valueWrapper);
          valueCol.appendChild(unitSpan);
          row.appendChild(nodeName);
          row.appendChild(valueCol);
          contentHTML.appendChild(row);
        });
      });
      return contentHTML;
    }
    __name(generateTooltipSortedData, "generateTooltipSortedData");
    function generateTooltipContent(u) {
      const tooltipWrapper = document.createElement("div");
      tooltipWrapper.classList.add("tooltip-content");
      const timestampPara = document.createElement("p");
      timestampPara.textContent = format7(fromUnixTime(u.data[0][dataIdx]), "HH:mm yyyy-MM-dd");
      timestampPara.classList.add("timestamp");
      const contentHTML = generateTooltipSortedData(u);
      tooltipWrapper.appendChild(timestampPara);
      tooltipWrapper.appendChild(contentHTML);
      return tooltipWrapper;
    }
    __name(generateTooltipContent, "generateTooltipContent");
    function setTooltip(u) {
      showTooltip();
      const lft = u.cursor.left;
      let top = u.cursor.top;
      const otherChartIndex = chartIndex ? chartIndex - 1 : chartIndex + 1;
      if (syncKey) {
        if (uPlot.sync(syncKey?.key).plots[otherChartIndex].cursor.top !== top) {
          if (top === -10) {
            top = uPlot.sync(syncKey?.key).plots[otherChartIndex].cursor.top;
          } else if (uPlot.sync(syncKey?.key).plots[otherChartIndex].cursor.top === -10) {
            uPlot.sync(syncKey?.key).plots[otherChartIndex].setCursor({ left: lft, top });
          }
        }
      }
      if (tooltipLeftOffset + lft + shiftY > over.clientWidth - tooltip.clientWidth) {
        tooltip.style.left = tooltipLeftOffset + lft + shiftY - tooltip.clientWidth + "px";
      } else {
        tooltip.style.left = tooltipLeftOffset + lft + shiftY + "px";
      }
      tooltip.style.top = tooltipTopOffset + top + shiftX + "px";
      const tooltipContentContainer = document.querySelector(`#${id} .tooltip-content`);
      if (tooltipContentContainer && tooltip.contains(tooltipContentContainer))
        tooltip.removeChild(tooltipContentContainer);
      const tooltipContent = generateTooltipContent(u);
      tooltip.appendChild(tooltipContent);
    }
    __name(setTooltip, "setTooltip");
    return {
      hooks: {
        ready: [
          (u) => {
            over = u.over;
            tooltipLeftOffset = parseFloat(over.style.left);
            tooltipTopOffset = parseFloat(over.style.top);
            u.root.querySelector(`#${id} .u-wrap`)?.appendChild(tooltip);
            if (units.length > 0) {
              addAxesLabels(u);
            }
            if (locations[seriesIdx - 1] && locations[seriesIdx - 1].threshold_values) {
              const maxValue = locations[seriesIdx - 1].threshold_values.max;
              const minValue = locations[seriesIdx - 1].threshold_values.min;
              setTimeout(() => {
                if (minValue !== null && u.scales[u.series[seriesIdx].scale].min > minValue || maxValue !== null && u.scales[u.series[seriesIdx].scale].max < maxValue) {
                  u.setScale(u.series[seriesIdx].scale, {
                    min: u.scales[u.series[seriesIdx].scale].min < minValue ? u.scales[u.series[seriesIdx].scale].min : minValue - 5,
                    max: u.scales[u.series[seriesIdx].scale].max < maxValue ? maxValue + 5 : u.scales[u.series[seriesIdx].scale].max
                  });
                  rescaled = true;
                } else {
                  onclick(u, seriesIdx, dataIdx, locations[seriesIdx - 1].threshold_values);
                }
              }, 0);
            }
            over.addEventListener("mouseup", () => {
              const locationIndInAllCharts = allLocations.findIndex((loc) => loc.showThreshold);
              if (locationIndInAllCharts === -1) {
                hideTooltip();
                clicked = true;
                const clickedLocation = locations[seriesIdx - 1];
                changeThresholdValue(clickedLocation);
              } else {
                changeThresholdValue(allLocations[locationIndInAllCharts]);
              }
              locationClicked = null;
            });
          }
        ],
        init: [
          (u) => {
            const locationInd = locations.findIndex((loc) => loc.showThreshold);
            chartIndex = +id.split("-")[1];
            const otherChartIndex = chartIndex ? chartIndex - 1 : chartIndex + 1;
            if (locationInd >= 0) {
              seriesIdx = locationInd + 1;
              locationClicked = locations[locationInd];
              rescaled = false;
              setTimeout(() => {
                u.setSeries(null, { focus: false });
                if (syncKey) {
                  uPlot.sync(syncKey?.key).plots[otherChartIndex].setSeries(1, { focus: false });
                  uPlot.sync(syncKey.key).plots[otherChartIndex].series.map((s, i) => {
                    if (i > 0) {
                      uPlot.sync(syncKey?.key).plots[otherChartIndex].series[i].stroke = focusColorSwitch(
                        VaiColor11.GreyLight3,
                        VaiColor11.GreyLight3
                      );
                    }
                  });
                }
                locations.forEach((_, index) => {
                  if (index === locationInd) {
                    u.setSeries(index + 1, { focus: true });
                  }
                });
              }, 0);
            }
            u.over.addEventListener("mousemove", (e) => {
              for (let i = 1; i < u.series.length; i++) {
                let res;
                if (u.series[i]._paths) {
                  res = u.ctx.isPointInStroke(
                    u.series[i]._paths.stroke,
                    u.bbox.left + e.offsetX * uPlot.pxRatio,
                    u.bbox.top + e.offsetY * uPlot.pxRatio
                  );
                }
                if (res) {
                  seriesIdx = i;
                }
                if (res || tooltipVisible) {
                  u.over.style.cursor = "pointer";
                  break;
                } else {
                  u.over.style.cursor = "auto";
                }
              }
            });
          }
        ],
        setCursor: [
          (u) => {
            const c = u.cursor;
            if (dataIdx !== c.idx && !locationClicked) {
              dataIdx = c.idx;
              if (dataIdx === null)
                hideTooltip();
              else
                setTooltip(u);
            }
            u.cursor.show = !locationClicked;
          }
        ],
        setScale: [
          (u) => {
            if ((seriesIdx && clicked && locations[seriesIdx - 1].threshold_values || locationClicked) && rescaled) {
              setTimeout(() => {
                onclick(u, seriesIdx, dataIdx, locations[seriesIdx - 1].threshold_values);
                rescaled = false;
              }, 0);
            }
            clicked = false;
          }
        ],
        setSeries: [
          (u, sidx) => {
            if (seriesIdx !== sidx && !locationClicked) {
              seriesIdx = sidx;
              if (sidx == null)
                hideTooltip();
            }
          }
        ]
      }
    };
  }, "tooltipPlugin");
  const xAxisOptions = {
    splits(self, axisIdx, scaleMin, scaleMax) {
      const fullStep = getUnixTime3(reports.intervalDate.to) - getUnixTime3(reports.intervalDate.from);
      const quarterStep = fullStep / 4;
      const startDate = getUnixTime3(reports.intervalDate.from);
      setStepInterval({ quarterStep, fullStep });
      return [
        startDate,
        startDate + quarterStep,
        startDate + quarterStep * 2,
        startDate + quarterStep * 3,
        getUnixTime3(reports.intervalDate.to)
      ];
    },
    values: [
      // tick incr          default           year                             month    day                        hour     min                sec       mode
      [3600 * 24 * 365, "{YYYY}", null, null, null, null, null, null, 1],
      [3600 * 24 * 28, "{MMM}", "\n{YYYY}", null, null, null, null, null, 1],
      [3600 * 24, "{M}/{D}", null, null, null, null, null, null, 1],
      [3600, "{HH}:{mm}", "\n{M}/{D}/{YY}", null, "\n{M}/{D}", null, null, null, 1],
      [60, "{HH}:{mm}", "\n{M}/{D}/{YY}", null, "\n{M}/{D}", null, null, null, 1],
      [1, "{HH}:{mm}", "\n{M}/{D}/{YY}", null, "\n{M}/{D} {HH}:{mm}", null, null, null, 1],
      [1e-3, ":{ss}.{fff}", "\n{M}/{D}/{YY} {HH}:{mm}", null, "\n{M}/{D} {HH}:{mm}", null, "\n{HH}:{mm}", null, 1]
    ]
  };
  const yAxisOptions = {
    splits(self, axisIdx, scaleMin, scaleMax) {
      const increment = (scaleMax - scaleMin) / 4;
      let min = scaleMin;
      const array = [];
      while (min < scaleMax) {
        array.push(min);
        min += increment;
      }
      array.push(scaleMax);
      return array;
    }
  };
  const [options, setOptions] = React60.useState(
    React60.useMemo(() => {
      return {
        width: 700,
        height: 350,
        focus: {
          alpha: 1.1
          // setting alpha: 1.1 bypasses the internal (alpha == 1) check that skips redraw() on focus changes
        },
        cursor: {
          show: true,
          focus: {
            prox: 5
          },
          lock: true,
          sync: {
            key: syncKey?.key || "",
            setSeries: true
          },
          y: false,
          // Show only the cursor dashed indicator for x axis
          drag: {
            x: false
            // No zooming
          },
          points: {
            size: 7
          },
          dataIdx: (self, seriesIdx, closestIdx, xValue) => {
            return seriesIdx;
          }
        },
        legend: {
          show: false
        },
        scales: {
          x: {
            range: [getUnixTime3(reports.intervalDate.from), getUnixTime3(reports.intervalDate.to)]
          },
          y: {
            range: [0, 100]
          }
        },
        axes: [{ ...xAxisOptions }, { ...yAxisOptions }],
        series: [{}, {}]
      };
    }, [])
  );
  const [chartData, setChartData] = React60.useState([[], []]);
  const focusColorSwitch = /* @__PURE__ */ __name((focused, unfocused) => (u, idx) => {
    const series = u.series[idx];
    return series._focus === false ? unfocused : focused;
  }, "focusColorSwitch");
  const getScalesOptions = /* @__PURE__ */ __name(() => {
    const options2 = {};
    if (units?.length > 0) {
      units.forEach((unit) => {
        options2[unit] = {
          range(u, dataMin, dataMax) {
            if (dataMin == null)
              return [0, 100];
            return uPlot.rangeNum(dataMin, dataMax, 0.1, true);
          }
        };
      });
    } else {
      options2.y = {
        range(u, dataMin, dataMax) {
          if (dataMin == null)
            return [0, 100];
          return uPlot.rangeNum(dataMin, dataMax, 0.1, true);
        }
      };
    }
    return options2;
  }, "getScalesOptions");
  React60.useEffect(() => {
    setOptions((oldOptions) => ({
      ...oldOptions,
      width: document.getElementById(id).getBoundingClientRect().width,
      scales: {
        x: {
          range: [getUnixTime3(reports.intervalDate.from), getUnixTime3(reports.intervalDate.to)]
        },
        ...getScalesOptions()
      },
      axes: [{ ...xAxisOptions }, { ...yAxisOptions }]
    }));
  }, [reports.intervalDate]);
  const bindHandler = /* @__PURE__ */ __name((u, targ, handler) => {
    return (e) => {
      const locationIndInAllCharts = allLocations.findIndex((loc) => loc.showThreshold);
      if (locationIndInAllCharts === -1) {
        handler(e);
      }
    };
  }, "bindHandler");
  React60.useEffect(() => {
    const newOptions = {
      ...options,
      width: document.getElementById(id).getBoundingClientRect().width,
      ...syncKey ? {
        cursor: {
          ...options.cursor,
          sync: {
            key: syncKey?.key,
            setSeries: true
          },
          bind: {
            mousemove: bindHandler,
            mouseleave: bindHandler
          }
        }
      } : {
        cursor: {
          ...options.cursor,
          bind: {
            mousemove: bindHandler,
            mouseleave: bindHandler
          }
        }
      },
      plugins: [
        tooltipPlugin({
          onclick(u, seriesIdx, dataIdx, threshold_values) {
            if (seriesIdx) {
              drawThreshold(u, seriesIdx);
            }
          }
        })
      ],
      scales: {
        x: {
          range: [getUnixTime3(reports.intervalDate.from), getUnixTime3(reports.intervalDate.to)]
        },
        ...getScalesOptions()
      },
      axes: [
        { ...xAxisOptions },
        ...units.length === 0 ? [{ ...yAxisOptions }] : units.map((unit, i) => ({
          ...yAxisOptions,
          side: unit === "celcius" /* CELSIUS */ || unit === "farenheit" /* FAHRENHEIT */ || (unit === "percent" /* CO2_PERCENT */ || unit === "ppm" /* CO2_PPM */) && units.includes("rh" /* HUMIDITY */) || unit === "percent" /* CO2_PERCENT */ && units.includes("ppm" /* CO2_PPM */) || units.length === 1 ? 3 : 1,
          grid: {
            show: i === 0 ? true : false
          },
          scale: unit
        }))
      ],
      series: [
        {},
        ...locations.length === 0 ? [{}] : locations.map((location) => ({
          stroke: focusColorSwitch(
            getAssignedChartColor(location.node_id, reports.assignedChartColors),
            VaiColor11.GreyLight3
          ),
          scale: location.symbol_id,
          width: 2.5,
          spanGaps: true,
          points: {
            show: false
          }
        }))
      ]
    };
    setChartData(data);
    setOptions(newOptions);
  }, [data]);
  React60.useEffect(() => {
    let resizeTimeout;
    function resizeChart() {
      if (document.getElementById(id)?.getBoundingClientRect()) {
        setOptions({ ...options, width: document.getElementById(id).getBoundingClientRect().width });
      }
    }
    __name(resizeChart, "resizeChart");
    window.addEventListener("resize", (e) => {
      if (resizeTimeout)
        clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeChart, 100);
    });
    return () => {
      setOptions(null);
      setChartData(null);
      if (resizeTimeout)
        clearTimeout(resizeTimeout);
    };
  }, []);
  return <Flex34 flexDirection="column" className="vai-margin-bottom-xl" id="chart-wrapper">
    <ChartIntervalArrows_default stepInterval={stepInterval} />
    {
      /* Show this text only on the first chart */
    }
    {reports.selectedLocationsNum > MAX_LOCATIONS_SELECTED && id.includes("0") && <Flex34 justifyContent="center"><span className="visible-locations-num">{t("reports.showingNumLocations", {
      visible: getVisibleLocationsNumber(reports.visibleLocations),
      total: reports.selectedLocationsNum
    })}</span></Flex34>}
    <UPlotReact key={id} options={options} data={chartData} />
  </Flex34>;
}, "Chart");
var mapStateToProps16 = /* @__PURE__ */ __name(({ reports }) => ({
  reports
}), "mapStateToProps");
var mapDispatchToProps14 = /* @__PURE__ */ __name((dispatch) => ({
  setReportsSelectedFormattedLocations: (locations) => dispatch(reportsDispatchActions.setReportSelectedFormattedLocations(locations)),
  setReportsSelectedLocationsCustomProps: (locations) => dispatch(reportsDispatchActions.setReportSelectedLocationsCustomProps(locations))
}), "mapDispatchToProps");
var Chart_default = connect17(mapStateToProps16, mapDispatchToProps14)(Chart);

// ../vlncc-frontend/src/components/Reports/Graph/Graph.tsx
var Graph = /* @__PURE__ */ __name((props) => {
  const initialChartsData = [
    {
      units: [],
      locations: []
    }
  ];
  const [chartsData, setChartsData] = React61.useState([]);
  const [chartsUnits, setChartsUnits] = React61.useState([]);
  const [chartsLocations, setChartsLocations] = React61.useState([]);
  const [allLocations, setAllLocations] = React61.useState([]);
  const [allUnits, setAllUnits] = React61.useState([]);
  const [timestamps, setTimestamps] = React61.useState(/* @__PURE__ */ new Set());
  const [syncKey, setSyncKey] = React61.useState(null);
  const formatData = /* @__PURE__ */ __name((locations) => {
    const formattedData = {};
    locations.forEach(
      (location, index) => {
        location.measurement_points.forEach((point) => {
          if (!formattedData[point.t]) {
            formattedData[point.t] = {
              [index]: point.v
            };
          } else {
            formattedData[point.t][index] = point.v;
          }
        });
      }
    );
    return formattedData;
  }, "formatData");
  const getAllLocationsAndUnits = /* @__PURE__ */ __name((data) => {
    const locations = [];
    const units = [];
    for (const key in data) {
      if (data[key].visibleOnGraph && data[key].measurement_points?.length > 0) {
        locations.push({ ...data[key], node_id: key });
        if (!units.includes(data[key].symbol_id)) {
          units.push(data[key].symbol_id);
        }
      }
    }
    return [locations, units];
  }, "getAllLocationsAndUnits");
  const getDataForEachChart = /* @__PURE__ */ __name((moreThanOne = true) => {
    const timestamps2 = /* @__PURE__ */ new Set();
    allLocations.forEach((loc) => {
      loc.measurement_points.forEach((point) => timestamps2.add(point.t));
    });
    setTimestamps(timestamps2);
    if (moreThanOne) {
      const chartsData2 = [
        ...JSON.parse(JSON.stringify(initialChartsData)),
        ...JSON.parse(JSON.stringify(initialChartsData))
      ];
      allUnits.map((unit) => {
        const locations = allLocations.filter((loc) => loc.symbol_id === unit);
        switch (unit) {
          case "rh" /* HUMIDITY */:
            chartsData2[0].locations = [...chartsData2[0].locations, ...locations];
            chartsData2[0].units = [...chartsData2[0].units, unit];
            break;
          case "celcius" /* CELSIUS */:
            if (chartsData2[0].units.length < 2 && !chartsData2[0].units.includes("farenheit" /* FAHRENHEIT */)) {
              chartsData2[0].locations = [...chartsData2[0].locations, ...locations];
              chartsData2[0].units = [...chartsData2[0].units, unit];
            } else {
              chartsData2[1].locations = [...chartsData2[1].locations, ...locations];
              chartsData2[1].units = [...chartsData2[1].units, unit];
            }
            break;
          case "farenheit" /* FAHRENHEIT */:
            if (chartsData2[0].units.length < 2 && !chartsData2[0].units.includes("celcius" /* CELSIUS */)) {
              chartsData2[0].locations = [...chartsData2[0].locations, ...locations];
              chartsData2[0].units = [...chartsData2[0].units, unit];
            } else {
              chartsData2[1].locations = [...chartsData2[1].locations, ...locations];
              chartsData2[1].units = [...chartsData2[1].units, unit];
            }
            break;
          case "percent" /* CO2_PERCENT */:
          case "ppm" /* CO2_PPM */:
            chartsData2[1].locations = [...chartsData2[1].locations, ...locations];
            chartsData2[1].units = [...chartsData2[1].units, unit];
            break;
          default:
            break;
        }
      });
      return chartsData2;
    }
  }, "getDataForEachChart");
  const determineChartsCount = /* @__PURE__ */ __name(() => {
    let chartsData2 = [];
    if (allUnits.length > 2 || allUnits.includes("celcius" /* CELSIUS */) && allUnits.includes("farenheit" /* FAHRENHEIT */)) {
      props.setReportGraphsNum(2);
      chartsData2 = getDataForEachChart();
      setChartsUnits([chartsData2[0].units, chartsData2[1].units]);
      setChartsLocations([chartsData2[0].locations, chartsData2[1].locations]);
    } else {
      props.setReportGraphsNum(1);
      getDataForEachChart(false);
      setChartsUnits([allUnits]);
      setChartsLocations([allLocations]);
    }
  }, "determineChartsCount");
  React61.useEffect(() => {
    if (props.selectedLocationsNum > 0) {
      const [locations, units] = getAllLocationsAndUnits(props.selectedLocationsCustomProps);
      setAllLocations(locations);
      setAllUnits(units);
    }
  }, [props.selectedLocationsNum, props.selectedLocationsCustomProps]);
  React61.useEffect(() => {
    setChartsData([]);
    setChartsLocations([]);
    setChartsUnits([]);
  }, [props.intervalDate, props.selectedLocationsIDs]);
  React61.useEffect(() => {
    if (allUnits.length > 0) {
      determineChartsCount();
    } else {
      setChartsData([]);
    }
  }, [allUnits]);
  React61.useEffect(() => {
    if (chartsUnits.length > 0) {
      const newChartsData = [];
      chartsLocations.forEach((chart) => {
        const formattedData = formatData(chart);
        const sortedData = Object.keys(formattedData).map((key) => +key).sort((a, b) => a - b).reduce((obj, key) => {
          obj[key] = formattedData[key];
          return obj;
        }, {});
        const xAxisData = Array.from(timestamps).sort((a, b) => a - b);
        const seriesData = [];
        chart.forEach((location, i) => {
          seriesData[i.toString()] = Array(xAxisData.length).fill(null);
          xAxisData.forEach((time, index) => {
            seriesData[i.toString()][index] = sortedData[time] && sortedData[time][i] ? sortedData[time][i] : null;
          });
        });
        newChartsData.push([xAxisData, ...seriesData]);
      });
      if (newChartsData.length > 1) {
        setSyncKey(uPlot2.sync("syncKey"));
      } else {
        setSyncKey(null);
      }
      setChartsData(newChartsData);
    }
  }, [chartsUnits]);
  return <div>{chartsData.length > 0 ? chartsData.map((data, ind) => <div id={`chart-${ind}`} key={ind} data-testid="chart-instance"><Chart_default
    id={`chart-${ind}`}
    data={data}
    syncKey={syncKey}
    locations={chartsLocations[ind]}
    allLocations={chartsLocations.flat(1)}
    units={chartsUnits[ind]}
  /></div>) : <div id="chart-empty" data-testid="chart-instance"><Chart_default id="chart-empty" data={[]} locations={[]} allLocations={[]} units={[]} /></div>}</div>;
}, "Graph");
var mapStateToProps17 = /* @__PURE__ */ __name(({ reports }) => ({
  selectedFormattedLocations: reports.selectedFormattedLocations,
  selectedLocationsNum: reports.selectedLocationsNum,
  intervalDate: reports.intervalDate,
  selectedLocationsIDs: reports.selectedLocationsIDs,
  selectedLocationsCustomProps: reports.selectedLocationsCustomProps
}), "mapStateToProps");
var mapDispatchToProps15 = /* @__PURE__ */ __name((dispatch) => ({
  setReportGraphsNum: (num) => dispatch(reportsDispatchActions.setReportGraphsNum(num))
}), "mapDispatchToProps");
var Graph_default = connect18(mapStateToProps17, mapDispatchToProps15)(Graph);

// ../vlncc-frontend/src/components/Reports/Statistics/Statistics.tsx
import * as React62 from "react";
import { DataTable as DataTable4, Flex as Flex35, TableSortDirection } from "@vaisala-rockhopper/components";
import "./statistics-table.scss";
import { useTranslation as useTranslation61 } from "react-i18next";
import { connect as connect19 } from "react-redux";
var NullOrValueFormatter = /* @__PURE__ */ __name(({ value }) => {
  return value === null ? <span title="-">-</span> : <span title={`${value}`}>{value}</span>;
}, "NullOrValueFormatter");
var headerCells3 = [
  { key: "location", sortable: true, name: "Location", width: 200 },
  { key: "unit", sortable: true, name: "Unit" },
  { key: "mostRecent", sortable: true, name: "Most recent", formatter: <NullOrValueFormatter /> },
  { key: "average", sortable: true, name: "Average", formatter: <NullOrValueFormatter /> },
  { key: "minimum", sortable: true, name: "Minimum", formatter: <NullOrValueFormatter /> },
  { key: "maximum", sortable: true, name: "Maximum", formatter: <NullOrValueFormatter /> }
];
var Statistics = /* @__PURE__ */ __name((props) => {
  const { selectedFormattedLocations, assignedColors, selectedLocationsCustomProps } = props;
  const { t } = useTranslation61();
  const createRows = /* @__PURE__ */ __name((data2 = selectedFormattedLocations, locations = []) => {
    let selectedLocations = [...locations];
    sortLocationsOnTopOfZones(data2).forEach((node) => {
      if (Object.keys(node.children).length > 0) {
        selectedLocations = createRows(node.children, selectedLocations);
      } else if (node.type === LOCATION_KEY && node.selected) {
        selectedLocations.push({
          name: node.name,
          location: <Flex35 className="location-wrapper" alignItems="center">
            <span
              className="colored-dot"
              style={{ backgroundColor: getAssignedChartColor(node.node_id, assignedColors) }}
            />
            <span title={node.name} className="truncated-text">{node.name}</span>
          </Flex35>,
          unit: CHART_AXES_LABELS[node.symbol_id],
          ...selectedLocationsCustomProps[node.node_id] ? {
            mostRecent: typeof selectedLocationsCustomProps[node.node_id].most_recent === "string" ? selectedLocationsCustomProps[node.node_id].most_recent : null,
            average: typeof selectedLocationsCustomProps[node.node_id].average === "string" ? selectedLocationsCustomProps[node.node_id].average : null,
            minimum: typeof selectedLocationsCustomProps[node.node_id].minimum === "string" ? selectedLocationsCustomProps[node.node_id].minimum : null,
            maximum: typeof selectedLocationsCustomProps[node.node_id].maximum === "string" ? selectedLocationsCustomProps[node.node_id].maximum : null
          } : {
            mostRecent: null,
            average: null,
            maximum: null,
            minimum: null
          }
        });
      }
    });
    return selectedLocations;
  }, "createRows");
  const [data, setData] = React62.useState({ rows: createRows() });
  const [tableHeaders, setTableHeaders] = React62.useState(headerCells3);
  React62.useEffect(() => {
    setData({ rows: createRows() });
    setTableHeaders(headerCells3);
  }, [selectedLocationsCustomProps]);
  function rowGetter(rowIdx) {
    return data.rows[rowIdx];
  }
  __name(rowGetter, "rowGetter");
  const onSort = /* @__PURE__ */ __name((column, direction) => {
    const multiplier = direction === TableSortDirection.Descending ? 1 : -1;
    const rows = data.rows.slice().sort((a, b) => {
      if (column === "location") {
        return (a.name == b.name ? 0 : a.name < b.name ? 1 : -1) * multiplier;
      }
      if (a[column] === null) {
        return 1;
      } else if (b[column] === null) {
        return -1;
      }
      return (a[column] == b[column] ? 0 : a[column] < b[column] ? 1 : -1) * multiplier;
    });
    setData({ rows });
  }, "onSort");
  return <div data-testid="statistics-wrapper">
    <DataTable4
      columns={tableHeaders.map((cell) => {
        return { ...cell, name: t(`reports.table.header.${cell.key}`) };
      })}
      htmlId="statistics-table"
      rowGetter={rowGetter}
      rowsCount={data.rows.length}
      onSort={onSort}
      minColumnWidth={100}
      minHeight={430}
    />
    {
      /* {isLoading && <div className={'load-more-rows'}> {t('events.table.loading')}</div>} */
    }
  </div>;
}, "Statistics");
var mapStateToProps18 = /* @__PURE__ */ __name(({ reports }) => ({
  selectedFormattedLocations: reports.selectedFormattedLocations,
  selectedLocationsCustomProps: reports.selectedLocationsCustomProps,
  assignedColors: reports.assignedChartColors,
  isLoading: reports.isApiLoading
}), "mapStateToProps");
var Statistics_default = connect19(mapStateToProps18)(Statistics);

// ../vlncc-frontend/src/containers/Reports.tsx
var mapStateToProps19 = /* @__PURE__ */ __name(({ general }) => ({
  language: general.language
}), "mapStateToProps");
var mapDispatchToProps16 = /* @__PURE__ */ __name((dispatch) => ({
  resetReportsState: () => dispatch(reportsDispatchActions.resetReportsState()),
  setIntervalDate: (interval) => dispatch(reportsDispatchActions.setReportIntervalDate(interval))
}), "mapDispatchToProps");
var ReportsContainer = /* @__PURE__ */ __name((props) => {
  const reportsTabs = [
    {
      tabKey: "graph",
      title: "Graph",
      translationKey: "reports.graph"
    },
    {
      tabKey: "statistics",
      title: "Statistics",
      translationKey: "reports.statistics"
    }
  ];
  React63.useEffect(() => {
    return () => {
      props.resetReportsState();
    };
  }, []);
  return <PageContainer2.Content className="h-100"><Grid4 className="h-100"><Grid4.Row className="h-100">
    <Grid4.Col className="left-reports-column"><LocationsList_default /></Grid4.Col>
    <Grid4.Col className="right-reports-column"><Paper8>
      <LocationsFilterBar_default />
      <Routes4><Route4
        path="/"
        element={<TabNavigation tabs={reportsTabs} contentClassName="reports-tabs-content-wrapper" />}
      >
        <Route4 index element={<Navigate3 to={routes.reports.graph.url} replace />} />
        <Route4 path={routes.reports.graph.url} element={<Graph_default />} />
        <Route4 path={routes.reports.statistics.url} element={<Statistics_default />} />
        <Route4 path="*" element={<Navigate3 to={routes.reports.graph.url} replace />} />
      </Route4></Routes4>
    </Paper8></Grid4.Col>
  </Grid4.Row></Grid4></PageContainer2.Content>;
}, "ReportsContainer");
var Reports_default = connect20(mapStateToProps19, mapDispatchToProps16)(ReportsContainer);

// ../vlncc-frontend/src/containers/DeviceManagerContainer.tsx
import * as React65 from "react";
import { Navigate as Navigate4, Route as Route5, Routes as Routes5, useNavigate as useNavigate11, useParams as useParams12 } from "react-router";
import { Flex as Flex38, PageContainer as PageContainer3 } from "@vaisala-rockhopper/components";

// ../vlncc-frontend/src/components/DeviceManager/DeviceManagerLinks.tsx
import { useTranslation as useTranslation62 } from "react-i18next";
import { useParams as useParams8 } from "react-router-dom";

// ../vlncc-frontend/src/components/DeviceManager/DeviceManagerProperties.tsx
import { useTranslation as useTranslation63 } from "react-i18next";
import { useParams as useParams9 } from "react-router-dom";
var DeviceManagerProperties = /* @__PURE__ */ __name(({ hasDevices }) => {
  const { id } = useParams9();
  const { t } = useTranslation63();
  const isLoading = false;
  if (isLoading) {
    return <CenteredSpinner_default htmlId="device-manager-properties-spinner" />;
  }
  if (!hasDevices) {
    return <EmptyState
      htmlId="device-manager-empty-state"
      heading="deviceManager.noDevices.heading"
      illustration={"emptyFolder" /* emptyFolder */}
    />;
  }
  return <></>;
}, "DeviceManagerProperties");
var DeviceManagerProperties_default = DeviceManagerProperties;

// ../vlncc-frontend/src/components/DeviceManager/DeviceManagerStatus.tsx
import { useTranslation as useTranslation64 } from "react-i18next";
import { useParams as useParams10 } from "react-router-dom";
var DeviceManagerStatus = /* @__PURE__ */ __name(({ hasDevices }) => {
  const { id } = useParams10();
  const { t } = useTranslation64();
  const isLoading = false;
  if (isLoading) {
    return <CenteredSpinner_default htmlId="device-manager-status-spinner" />;
  }
  if (!hasDevices) {
    return <EmptyState
      htmlId="device-manager-empty-state"
      heading="deviceManager.noDevices.heading"
      illustration={"emptyFolder" /* emptyFolder */}
    />;
  }
  return <></>;
}, "DeviceManagerStatus");
var DeviceManagerStatus_default = DeviceManagerStatus;

// ../vlncc-frontend/src/components/DeviceManager/DeviceManager.tsx
import React64 from "react";
import { useTranslation as useTranslation65 } from "react-i18next";
import {
  Flex as Flex36,
  Paper as Paper9,
  InputField as InputField20,
  Size as Size56,
  Icon as Icon34,
  IconName as IconName17,
  Select as Select9,
  Stack as Stack3,
  List as List2,
  ListItem as ListItem2,
  Separator as Separator11,
  FlexItem as FlexItem17
} from "@vaisala-rockhopper/components";
import cx7 from "classnames";
import RFL100_no_cable2 from "../../assets/images/RFL100_no_cable.png";
import CA10_small_antenna2 from "../../assets/images/CA10_small_antenna.png";
import { useNavigate as useNavigate9, useParams as useParams11 } from "react-router";
import "./device-manager.scss";
var HTML_ID_PROPS = { htmlId: "device-manager", separator: "-" };
var DeviceManager = /* @__PURE__ */ __name(({
  hasDevices,
  devices,
  isLoading,
  error,
  isFetching,
  isSuccess,
  currentRoute,
  refetch
}) => {
  const { t } = useTranslation65();
  const { getId } = useHtmlId_default(HTML_ID_PROPS);
  const params = useParams11();
  const id = params["*"] ? params["*"].split("/").splice(-1)[0] : null;
  const navigate = useNavigate9();
  const [searchCriteria, setSearchCriteria] = React64.useState("");
  const [filterByDevice, setFilterByDevice] = React64.useState("ALL" /* ALL */);
  const [filterByStatus, setFilterByStatus] = React64.useState("ALL" /* ALL */);
  const [sortBy2, setSortBy] = React64.useState("sortByRecently" /* RECENTLY */);
  const [filteredResults, setFilteredResults] = React64.useState([]);
  React64.useEffect(() => {
    setFilteredResults(devices);
  }, [devices]);
  const filter = /* @__PURE__ */ __name((e) => {
    const keyword = e.target.value;
    setSearchCriteria(keyword);
  }, "filter");
  const hasSearch = Boolean(searchCriteria);
  const hasFilter = filterByStatus !== "ALL" /* ALL */ && filterByDevice !== "ALL" /* ALL */;
  const handleFilterByDeviceChange = /* @__PURE__ */ __name((value) => setFilterByDevice(value), "handleFilterByDeviceChange");
  const handleFilterByStatusChange = /* @__PURE__ */ __name((value) => setFilterByStatus(value), "handleFilterByStatusChange");
  const handleSortByChange = /* @__PURE__ */ __name((value) => setSortBy(value), "handleSortByChange");
  const deviceTypeSelectId = getId("device-type-select");
  const deviceStatusSelectId = getId("device-status-select");
  const sortSelectId = getId("sort");
  const getDeviceListItemClassName = /* @__PURE__ */ __name((device) => {
    return cx7("vai-padding-vertical-s device-list-item", { "user-selected-row": device.device_id === id });
  }, "getDeviceListItemClassName");
  const handleListItemClick = /* @__PURE__ */ __name((deviceId) => () => {
    let route = currentRoute();
    route = route.split("/")[0];
    id !== deviceId && navigate(`${route}/${deviceId}`);
  }, "handleListItemClick");
  const refreshResults = /* @__PURE__ */ __name(() => refetch(), "refreshResults");
  const getIcon2 = /* @__PURE__ */ __name((device) => {
    const [icon, color] = DEVICE_STATE_ICON_INFO[device.state];
    return icon ? <Icon34
      data-testid={TEST_IDS.device_manager_device_list_item_device_status_icon}
      id={getId(`${device.device_id}-status-icon`)}
      name={icon}
      color={color}
      size={Size56.XS}
    /> : null;
  }, "getIcon");
  return <Paper9 id={getId("container")} className="device-manager">
    <div id={getId("top")} className="vai-margin-bottom-m vai-margin-horizontal-m">
      <h3 id={getId("heading")} className="vai-margin-bottom-m">{t("deviceManager.heading")}</h3>
      <div id={getId("search-container")} className="vai-margin-bottom-m"><InputField20
        id={getId("search-input")}
        name="deviceManagerSearchInput"
        width={Size56.Container}
        placeholder={t("general.search")}
        value={searchCriteria}
        onChange={filter}
        endIcon={<Icon34 name={IconName17.Search} size={Size56.M} />}
      /></div>
      <Stack3 id={getId("filters-container")} direction="row" className="device-filters">
        <Flex36.Item id={getId("device-type-select-container")}>
          <span id={getId("device-type-select-label")} className="vai-font-size-s">{t("deviceManager.filter.device")}</span>
          <Select9
            id={deviceTypeSelectId}
            className="filter-select"
            mode="multiple"
            value={filterByDevice}
            onChange={handleFilterByDeviceChange}
          >{filterDeviceOptions.map(({ label, value }, index) => <Select9.Option id={getId(`device-type-option--${value}`)} key={index} value={value}>{t(label)}</Select9.Option>)}</Select9>
        </Flex36.Item>
        <Flex36.Item id={getId("device-status-container")}>
          <span id={getId("device-status-label")} className="vai-font-size-s">{t("deviceManager.filter.status")}</span>
          <Select9
            id={deviceStatusSelectId}
            className="filter-select"
            width={Size56.M}
            mode="multiple"
            value={filterByStatus}
            onChange={handleFilterByStatusChange}
          >{filterStatusOptions.map(({ label, value }, index) => <Select9.Option id={`device-status-option--${value}`} key={index} value={value}>{t(label)}</Select9.Option>)}</Select9>
        </Flex36.Item>
        <Flex36.Item id={getId("sort-container")}>
          <span id={getId("sort-label")} className="vai-font-size-s">{t("deviceManager.filter.sort")}</span>
          <Select9
            id={sortSelectId}
            className="filter-select sort"
            width={Size56.M}
            value={sortBy2}
            onChange={handleSortByChange}
          >{deviceManagerSortOptions.map(({ label, value }, index) => <Select9.Option id={getId(`sort-option--${label}`)} key={index} value={value}>{t(label)}</Select9.Option>)}</Select9>
        </Flex36.Item>
      </Stack3>
    </div>
    <Separator11 />
    <div id={getId("bottom")} className="vai-margin-horizontal-m vai-margin-bottom-m device-manager--list">{isFetching || isLoading ? <CenteredSpinner_default htmlId={getId("spinner")} /> : error ? <ListError_default
      errorMsgTranslationKey="deviceManager.errorLoadingResults"
      {...HTML_ID_PROPS}
      refreshResults={refreshResults}
    /> : !hasDevices ? <Flex36 id={getId("no-devices-container")} flexDirection="column">
      <Stack3 id={getId("no-devices-stack")} direction="row"><Flex36.Item id={getId("no-devices-images")} flexBasis="100%" style={{ textAlign: "center" }}>
        <img
          id={getId("no-devices-ca10")}
          src={CA10_small_antenna2}
          className="vai-margin-horizontal-s vai-margin-vertical-m icon-width"
        />
        <img
          id={getId("no-devices-rfl100")}
          src={RFL100_no_cable2}
          className="vai-margin-horizontal-s vai-margin-vertical-m icon-width"
        />
      </Flex36.Item></Stack3>
      <Flex36.Item id={getId("no-devices-msg")} className="vai-margin-horizontal-m">{t("deviceManager.noDevices.list", { appName: APP_NAME_FULL })}</Flex36.Item>
    </Flex36> : <List2
      id={getId("device-list")}
      data-testid={TEST_IDS.device_manager_device_list}
      className="device-container"
    >{filteredResults.map((device, index) => {
      return <ListItem2
        id={getId(`${device.device_id}-list-item`)}
        data-testid={TEST_IDS.device_manager_device_list_item}
        className={getDeviceListItemClassName(device)}
        onClick={handleListItemClick(device.device_id)}
        key={getId(`list-item--${index}`)}
      >
        <FlexItem17
          id={getId(`${device.device_id}-device-icon`)}
          data-testid={TEST_IDS.device_manager_device_list_item_img_wrapper}
          flexBasis="40px"
          className="device-icon"
        ><img
          id={getId(`${device.device_id}-img`)}
          data-testid={TEST_IDS.device_manager_device_list_item_img}
          src={getDeviceImage(device.product_code)}
          className="icon-width"
        /></FlexItem17>
        <FlexItem17
          id={getId(`${device.device_id}-device-details`)}
          flexBasis="70%"
          alignSelf="center"
          className="vai-margin-left-m"
        >
          <h4
            id={getId(`${device.device_id}-device-nickname`)}
            data-testid={TEST_IDS.device_manager_device_list_item_nickname}
            className="vai-margin-vertical-none"
          >{device.nickname}</h4>
          <div
            id={getId(`${device.device_id}-device-or-host-text`)}
            data-testid={TEST_IDS.device_manager_device_list_item_device_or_host_text}
            className="vai-font-size-xs grey-medium"
          >{getDeviceOrHostText(device, t)}</div>
        </FlexItem17>
        <Flex36 className="vai-margin-horizontal-s device-status grey-medium" justifyContent="flex-end">
          <FlexItem17
            id={getId(`${device.device_id}-status-label`)}
            data-testid={TEST_IDS.device_manager_device_list_item_status_label}
            className="vai-margin-right-s align-right"
            alignSelf="center"
            flexBasis="95%"
          >{t(DEVICE_STATE_TRANSLATION_KEYS[device.state])}</FlexItem17>
          <FlexItem17
            data-testid={TEST_IDS.device_manager_device_list_item_device_status_icon_wrapper}
            id={getId(`${device.device_id}-status-icon-wrapper`)}
            className="device-icon"
            alignSelf="center"
          >{getIcon2(device)}</FlexItem17>
        </Flex36>
      </ListItem2>;
    })}</List2>}</div>
  </Paper9>;
}, "DeviceManager");
var DeviceManager_default = DeviceManager;

// ../vlncc-frontend/src/components/AccessRestricted/AccessRestricted.tsx
import { useTranslation as useTranslation66 } from "react-i18next";
import { Button as Button42, Flex as Flex37, Stack as Stack4 } from "@vaisala-rockhopper/components";
import { useNavigate as useNavigate10 } from "react-router-dom";
var AccessRestricted = /* @__PURE__ */ __name(({ htmlId: htmlId3 = "access-restricted" }) => {
  const { t } = useTranslation66();
  const appName2 = APP_NAME;
  const companyName = getConstantFromLocalStorage(LS_COMPANY_NAME);
  const navigate = useNavigate10();
  const { getId } = useHtmlId_default({ htmlId: htmlId3, separator: "-" });
  const goToSites = /* @__PURE__ */ __name(() => {
    navigate(routes.site.url);
  }, "goToSites");
  return <Flex37
    id={getId("container")}
    flexWrap="wrap"
    flexDirection="column"
    justifyContent="space-around"
    className="h-100"
  >
    <Flex37 justifyContent="center" flexWrap="wrap-reverse">
      <Flex37 flexDirection="column" justifyContent="space-between">
        <Flex37.Item className="vai-margin-bottom-m"><h2 id={getId("heading")}>{t("general.accessRestricted")}</h2></Flex37.Item>
        <Stack4>
          <Flex37.Item id={getId("description")}>{t("general.accessRestrictedDesc")}</Flex37.Item>
          <Flex37.Item id={getId("description-2")}>{t("general.contactAdmin", { appName: appName2, companyName })}</Flex37.Item>
          <Flex37.Item>
            {
              /* eslint-disable-next-line enforce-ids-in-jsx/missing-ids */
            }
            <Button42 id={getId("button")} onClick={goToSites}>{t("general.backToSites")}</Button42>
          </Flex37.Item>
        </Stack4>
      </Flex37>
      <Flex37.Item className="vai-margin-left-xl vai-margin-right-xl"><Illustration id={getId("illustration")} illustration={"genericError" /* genericError */} /></Flex37.Item>
    </Flex37>
    {
      /* {isDevelopment() ? <pre className="vai-margin-left-m">{error?.stack}</pre> : null} */
    }
  </Flex37>;
}, "AccessRestricted");
var AccessRestricted_default = AccessRestricted;

// ../vlncc-frontend/src/containers/DeviceManagerContainer.tsx
var deviceManagerNavigationTabs = [
  {
    id: "device-manager-tab-status",
    tabKey: "status",
    title: "Status",
    translationKey: "deviceManager.tab.title.status"
  },
  // Taken out of Release 1 - Planned for Release 2
  // {
  //   tabKey: 'links',
  //   title: 'Links',
  //   translationKey: 'deviceManager.tab.title.links'
  // },
  {
    id: "device-manager-tab-properties",
    tabKey: "properties",
    title: "Properties",
    translationKey: "deviceManager.tab.title.properties"
  }
];
var DeviceManagerContainer = /* @__PURE__ */ __name((props) => {
  const navigate = useNavigate11();
  const params = useParams12();
  const { getId } = useHtmlId_default({ htmlId: "device-manager" });
  const customerId = getConstantFromLocalStorage(LS_COMPANY_CUSTOMER_ID);
  const siteId = PARENT_SITE_KEY;
  const currentUser = useAppSelector(selectCurrentUser);
  const { data: devices = void 0, ...rest } = useGetDevicesPerSiteQuery(
    { customerId, siteId },
    { refetchOnFocus: false, refetchOnMountOrArgChange: true }
  );
  const [splitDevices, setSplitDevices] = React65.useState([]);
  const hasDevices = Boolean(devices?.length);
  const currentRoute = React65.useCallback(() => {
    let value = params["*"];
    if (!value)
      return routes.deviceManager.status.url;
    const split = value.split("/");
    const hasDeviceInUrl = split.length > 1;
    if (value === "" || !hasDeviceInUrl && ![routes.deviceManager.status.url, routes.deviceManager.properties.url].includes(value)) {
      value = routes.deviceManager.status.url;
    }
    return value;
  }, [params]);
  const splitDevicesAndHosts = React65.useCallback(() => {
    const _devices = devices.filter((device) => device.is_logger);
    const hosts = devices.filter((device) => !device.is_logger);
    return _devices.concat(hosts);
  }, [devices]);
  React65.useEffect(() => {
    if (hasDevices) {
      const _splitDevices = splitDevicesAndHosts();
      setSplitDevices(_splitDevices);
      const route = currentRoute();
      if ([routes.deviceManager.status.url, routes.deviceManager.properties.url].includes(route)) {
        navigate(`${route}/${_splitDevices[0].device_id}`);
      }
    }
  }, [devices]);
  if (currentUser != null && !currentUser.canManageDevices) {
    return <AccessRestricted_default />;
  }
  return <PageContainer3.Content id={getId("page-container")} className="h-100">
    <Flex38 id={getId("container")} className="h-100">
      <Flex38 id={getId("container-left")} style={{ marginRight: ".75rem", flexBasis: "30%" }}><DeviceManager_default devices={splitDevices} currentRoute={currentRoute} hasDevices={hasDevices} {...rest} /></Flex38>
      {typeof devices !== "undefined" && <Flex38 id={getId("container-right")} style={{ width: "100%" }}><Routes5><Route5 element={<TabNavigation tabs={deviceManagerNavigationTabs} />}>
        <Route5 index element={<Navigate4 to="status" />} />
        <Route5 path="status">
          <Route5 index element={<DeviceManagerStatus_default hasDevices={hasDevices} />} />
          <Route5 path=":id" element={<DeviceManagerStatus_default hasDevices={hasDevices} />} />
        </Route5>
        {
          /* Taken out of Release 1 - Planned for Release 2
          <Route path="links">
            <Route index element={<DeviceManagerLinks hasDevices={hasDevices} />} />
            <Route path="device/:id" element={<DeviceManagerLinks hasDevices={hasDevices} />} />
            <Route path=":id" element={<DeviceManagerLinks hasDevices={hasDevices} />} />
          </Route> */
        }
        <Route5 path="properties">
          <Route5 index element={<DeviceManagerProperties_default hasDevices={hasDevices} />} />
          <Route5 path=":id" element={<DeviceManagerProperties_default hasDevices={hasDevices} />} />
        </Route5>
      </Route5></Routes5></Flex38>}
    </Flex38>
    {props.children}
  </PageContainer3.Content>;
}, "DeviceManagerContainer");
var DeviceManagerContainer_default = DeviceManagerContainer;

// ../vlncc-frontend/src/components/Error/Error500.tsx
import React66 from "react";
import { useTranslation as useTranslation67 } from "react-i18next";
import { Button as Button43, Flex as Flex39 } from "@vaisala-rockhopper/components";
import { useLocation as useLocation10 } from "react-router-dom";
var Error500 = /* @__PURE__ */ __name(({ error, resetErrorBoundary }) => {
  const { t } = useTranslation67();
  const location = useLocation10();
  const errorLocation = React66.useRef(location.pathname);
  const reload = /* @__PURE__ */ __name(() => {
    window.location.reload();
  }, "reload");
  React66.useEffect(() => {
    if (location.pathname !== errorLocation.current) {
      resetErrorBoundary(null);
      reload();
    }
  }, [location.pathname]);
  return <Flex39 flexWrap="wrap" flexDirection="column" justifyContent="space-around" className="h-100">
    <Flex39 justifyContent="center" flexWrap="wrap-reverse">
      <Flex39 flexDirection="column" justifyContent="space-between">
        <Flex39.Item className="vai-margin-bottom-m"><h2>{t("general.somethingWentWrong")}</h2></Flex39.Item>
        <Flex39.Item id="error-500-description" className="vai-margin-bottom-l">{t("general.errorPageDescription")}</Flex39.Item>
        <Flex39.Item><Button43 id="error-500-reload-button" onClick={reload}>{t("general.refresh")}</Button43></Flex39.Item>
      </Flex39>
      <Flex39.Item className="vai-margin-left-xl vai-margin-right-xl"><Illustration illustration={"genericError" /* genericError */} /></Flex39.Item>
    </Flex39>
    {
      /* {isDevelopment() ? <pre className="vai-margin-left-m">{error?.stack}</pre> : null} */
    }
  </Flex39>;
}, "Error500");
var Error500_default = Error500;

// ../vlncc-frontend/src/components/Utils/Feedback/index.tsx
import { Anchor, Flex as Flex40, Icon as Icon35 } from "@vaisala-rockhopper/components";
import { useTranslation as useTranslation68 } from "react-i18next";
import { VaiIcon as VaiIcon25 } from "@vaisala-rockhopper/design-tokens";
import "./feedback.scss";
var Feedback = /* @__PURE__ */ __name(() => {
  const { t } = useTranslation68();
  return <Anchor
    className="feedback-toast vai-font-size-xs vai-padding-vertical-s vai-padding-horizontal-xl"
    to={FEEDBACK_URL}
    openInNewWindow
  ><Flex40 alignItems="center" justifyContent="center">
    <Icon35 htmlId="feedback-toast" className="vai-margin-right-xs" name={VaiIcon25.HelpO} />
    {t("general.feedback")}
  </Flex40></Anchor>;
}, "Feedback");
var Feedback_default = Feedback;

// ../vlncc-frontend/src/components/Reports/DownloadReport/DownloadReport.tsx
import * as React67 from "react";
import { useLocation as useLocation11, useNavigate as useNavigate12 } from "react-router-dom";
import { parse as parse3 } from "querystring";
import { NotificationType as NotificationType5 } from "@vaisala-rockhopper/components";
import "./download-report.scss";
import { useTranslation as useTranslation69 } from "react-i18next";
var DownloadReport = /* @__PURE__ */ __name(() => {
  const location = useLocation11();
  const navigate = useNavigate12();
  const { t } = useTranslation69();
  const customerId = getConstantFromLocalStorage(LS_COMPANY_CUSTOMER_ID);
  const dispatch = useAppDispatch();
  const [
    getDownloadUrl,
    { isFetching: isFetchingUrl, data: reportUrl, error: urlError, isUninitialized: isUrlUninitiated }
  ] = useLazyGetDownloadUrlQuery();
  const [
    downloadReport,
    { isFetching: isFetchingFile, data: reportData, error: fileError, isUninitialized: isFileUninitiated }
  ] = useLazyDownloadReportQuery();
  const [downloadUrl, setDownloadUrl] = React67.useState("");
  const [filename, setFilename] = React67.useState("");
  const anchorRef = React67.useRef(null);
  const showErrorNotification = /* @__PURE__ */ __name(() => {
    dispatch(
      addNotification({
        type: NotificationType5.Error,
        content: t("reports.generalDownloadingError"),
        duration: 4
      })
    );
  }, "showErrorNotification");
  React67.useEffect(() => {
    const { reportInstanceId, title } = parse3(location.search.substring(1));
    if (title) {
      setFilename(title);
    }
    if (reportInstanceId) {
      getDownloadUrl({ customerId, reportInstanceId });
    } else {
      navigate("/reports/graph", { replace: true });
    }
  }, []);
  React67.useEffect(() => {
    if (reportUrl && reportUrl.success && reportUrl.message && !urlError) {
      downloadReport({ url: reportUrl.message });
    } else if (!isUrlUninitiated && (reportUrl && !reportUrl.success || urlError)) {
      showErrorNotification();
      navigate("/reports/graph", { replace: true });
    }
  }, [reportUrl, urlError]);
  React67.useEffect(() => {
    if (reportData) {
      const url = window.URL.createObjectURL(reportData);
      setDownloadUrl(url);
    } else if (!isFileUninitiated && (!reportData || fileError)) {
      showErrorNotification();
      navigate("/reports/graph", { replace: true });
    }
  }, [reportData, fileError]);
  React67.useEffect(() => {
    if (downloadUrl && anchorRef.current) {
      let fileNameDirectories, title;
      if (!filename) {
        const anchor = document.createElement("a");
        anchor.href = reportUrl.message;
        fileNameDirectories = anchor.pathname.split("/");
        title = fileNameDirectories[fileNameDirectories.length - 1];
      } else {
        title = filename;
      }
      anchorRef.current.setAttribute("download", title);
      anchorRef.current.setAttribute("type", reportData.type);
      anchorRef.current.click();
      navigate("/reports/graph", { replace: true });
    }
  }, [downloadUrl]);
  return <>
    {isFetchingUrl || isFetchingFile ? <CenteredSpinner_default /> : <></>}
    <a id="download-link" href={downloadUrl} ref={anchorRef} />
  </>;
}, "DownloadReport");
var DownloadReport_default = DownloadReport;

// ../vlncc-frontend/src/hooks/useSessionRefresh.tsx
import { Auth as Auth8 } from "aws-amplify";
import React69 from "react";

// ../vlncc-frontend/src/hooks/useInterval.tsx
import React68 from "react";
var useInterval = /* @__PURE__ */ __name(({ callback, delay }) => {
  const intervalRef = React68.useRef();
  const callbackRef = React68.useRef(callback);
  React68.useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);
  React68.useEffect(() => {
    intervalRef.current = window.setInterval(() => callbackRef.current(), delay);
    return () => window.clearInterval(intervalRef.current);
  }, []);
  return intervalRef;
}, "useInterval");
var useInterval_default = useInterval;

// ../vlncc-frontend/src/hooks/useSessionRefresh.tsx
var DEFAULT_REFRESH_SECONDS = 1e3 * 60 * 5;
var useSessionRefresh = /* @__PURE__ */ __name(({ refreshMs }) => {
  const isExpired = React69.useRef(true);
  const _refreshMs = refreshMs || DEFAULT_REFRESH_SECONDS;
  const checkSession = /* @__PURE__ */ __name(async () => {
    let _isExpired = isExpired.current;
    try {
      await Auth8.currentSession();
      _isExpired = false;
    } catch (e) {
      console.error("Session expired", e);
      _isExpired = true;
    }
    isExpired.current = _isExpired;
  }, "checkSession");
  useInterval_default({ callback: checkSession, delay: _refreshMs });
  return { checkSession, isExpired: isExpired.current };
}, "useSessionRefresh");
var useSessionRefresh_default = useSessionRefresh;

// ../vlncc-frontend/src/components/Main.tsx
var MainContent = /* @__PURE__ */ __name(() => {
  return <ErrorBoundary key={window.location.pathname} fallbackRender={(props) => <Error500_default {...props} />}>
    {
      /* eslint-disable-next-line enforce-ids-in-jsx/missing-ids */
    }
    <Routes6>
      <Route6 path={`${routes.site.url}/*`} element={<Site_default />} />
      <Route6 path={`${routes.profile.url}/*`} element={<Profile_default2 />} />
      <Route6 path={routes.events.url} element={<Events_default3 />} />
      <Route6 path={`${routes.downloadReport.url}`} element={<DownloadReport_default />} />
      <Route6 path={`${routes.reports.url}/*`} element={<Reports_default />} />
      <Route6 path={`${routes.deviceManager.url}/*`} element={<DeviceManagerContainer_default />} />
      <Route6 path="*" element={<Navigate5 to={routes.site.url} replace />} />
    </Routes6>
    <Feedback_default />
  </ErrorBoundary>;
}, "MainContent");
var MemoizedMainContent = React70.memo(MainContent);
var Main = /* @__PURE__ */ __name(({ displaySize, windowSize, deviceType }) => {
  const [navigationCollapsed, setNavigationCollapsed] = React70.useState(false);
  const [pageContentScrollStatus, setPageContentScrollStatus] = React70.useState(ScrollStatus2.Top);
  const dispatch = useAppDispatch();
  useSessionRefresh_default({});
  React70.useEffect(() => {
    dispatch(getAuthInfo());
  }, []);
  React70.useEffect(() => {
    if (displaySize === "desktop" /* desktop */) {
      navigationCollapsed && setNavigationCollapsed(false);
    } else {
      !navigationCollapsed && setNavigationCollapsed(true);
    }
  }, [displaySize]);
  const onCollapseChange = /* @__PURE__ */ __name((navigationCollapsed2) => setNavigationCollapsed(navigationCollapsed2), "onCollapseChange");
  const onPageContentScrollStatusChange = /* @__PURE__ */ __name((pageContentScrollStatus2) => {
    setPageContentScrollStatus(pageContentScrollStatus2);
  }, "onPageContentScrollStatusChange");
  return <LoginRedirect_default><TimeContextProvider>
    <Navigation_default collapsed={navigationCollapsed} onCollapseChange={onCollapseChange} />
    <PageContainer4>
      <Header_default logoVisible={navigationCollapsed} pageContentScrollStatus={pageContentScrollStatus} />
      <PageContainer4.Content onScrollStatusChange={onPageContentScrollStatusChange}>
        {
          /* Memoization fixes unwanted Rerendering of the Dev routes when navigationCollapsed change */
        }
        <MemoizedMainContent />
      </PageContainer4.Content>
    </PageContainer4>
  </TimeContextProvider></LoginRedirect_default>;
}, "Main");
var Main_default = withDisplaySize(Main);

// ../vlncc-frontend/src/containers/Login.tsx
import * as React71 from "react";
import { connect as connect21 } from "react-redux";
import { useNavigate as useNavigate13, useSearchParams } from "react-router-dom";
import { stringify as stringify3 } from "querystring";

// ../vlncc-frontend/src/components/Utils/SelectLanguageHeader/index.tsx
import { Header as Header2, Avatar, Size as Size57 } from "@vaisala-rockhopper/components";
import enUS from "../../../assets/flags/en-US.svg";
import DE from "../../../assets/flags/de-DE.svg";
import ES from "../../../assets/flags/es-XN.svg";
import FI from "../../../assets/flags/fi-FI.svg";
import FR from "../../../assets/flags/fr-FR.svg";
import IT from "../../../assets/flags/it-IT.svg";
import JP from "../../../assets/flags/ja-JP.svg";
import PT from "../../../assets/flags/pt-BR.svg";
import CN from "../../../assets/flags/zh-CN.svg";
import SE from "../../../assets/flags/sv-SE.svg";
import "./select-language-header.scss";
var SelectLanguageHeader = /* @__PURE__ */ __name((props) => {
  const { language, changeLanguage: changeLanguage2 } = props;
  const getSRC = /* @__PURE__ */ __name((src) => {
    switch (src) {
      case "en-US" /* en */:
        return enUS;
      case "de-DE" /* dede */:
        return DE;
      case "es-XN" /* esXN */:
        return ES;
      case "fi-FI" /* fiFI */:
        return FI;
      case "fr-FR" /* frfr */:
        return FR;
      case "it-IT" /* itIT */:
        return IT;
      case "ja-JP" /* jajp */:
        return JP;
      case "pt-BR" /* ptBR */:
        return PT;
      case "sv-SE" /* svSE */:
        return SE;
      case "zh-CN" /* zhcn */:
        return CN;
    }
  }, "getSRC");
  const onChangeLanguageClick = /* @__PURE__ */ __name((lang) => () => {
    if (lang !== language) {
      changeLanguage2(lang);
    }
  }, "onChangeLanguageClick");
  return <Header2
    id="select-header-language-container"
    data-testid="language-header"
    className="select-header-language-container"
    title=""
  ><Header2.Menu
    id="select-header-language-title"
    className="select-header-language-title"
    title={language ? language.slice(-2) : ""}
    data-testid="language-header-menu"
    startIcon={<Avatar
      className="select-header-language-title-avatar"
      id="select-header-language-title-avatar"
      size={Size57.XS}
      src={getSRC(language)}
      data-testid="language-header-menu-avatar"
    />}
  >{Object.keys(LANGUAGE_TEXT).map((key) => {
    return <Header2.MenuItem
      key={`MenuItem-key-${key}`}
      id={`select-header-language-${key}`}
      data-testid="language-header-menu-item"
      startIcon={<Avatar
        id={`select-header-language-avatar-${key}`}
        size={Size57.XS}
        name={key}
        src={getSRC(key)}
        className="select-header-language-list-avatar select-header-language-title-avatar"
        data-testid="language-header-menu-item-avatar"
      />}
      onClick={onChangeLanguageClick(key)}
    >{LANGUAGE_TEXT[key]}</Header2.MenuItem>;
  })}</Header2.Menu></Header2>;
}, "SelectLanguageHeader");

// ../vlncc-frontend/src/containers/Login.tsx
var mapDispatchToProps17 = /* @__PURE__ */ __name((dispatch) => ({
  changeLanguage: (language) => dispatch(actionCreators.changeLanguage(language)),
  login: (username, password, companyName, isFirstLogin) => dispatch(authDispatchActions.login(username, password, companyName, isFirstLogin)),
  sendResetCode: (email, companyName) => dispatch(authDispatchActions.sendResetCode(email, companyName)),
  resetPassword: (userName, resetCode, newPassword) => dispatch(authDispatchActions.resetPassword(userName, resetCode, newPassword)),
  sendResetCodeInit: () => dispatch(authDispatchActions.sendResetCodeInit()),
  setAuthError: (error) => dispatch(authDispatchActions.setAuthError(error)),
  setResettingPasswordError: (error) => dispatch(authDispatchActions.setResettingPasswordError(error)),
  setUpPasswordPolicy: () => dispatch(authDispatchActions.setUpPasswordPolicy()),
  setUpProfile: (userProfile) => dispatch(authDispatchActions.setUpProfile(userProfile)),
  setUpPassword: (username, oldPassword, newPassword) => dispatch(authDispatchActions.setUpPassword(username, oldPassword, newPassword)),
  setUpMFA: (mfa) => dispatch(authDispatchActions.setUpMFA(mfa)),
  resendMFA: () => dispatch(authDispatchActions.resendMFA()),
  MFABackToLogin: () => dispatch(authDispatchActions.MFABackToLogin()),
  getLanguageInfo: () => dispatch(authDispatchActions.getLanguageInfo())
}), "mapDispatchToProps");
var mapStateToProps20 = /* @__PURE__ */ __name(({ auth, general, profile }) => ({
  auth,
  language: general.language,
  profileLoading: profile.initProfileLoading
}), "mapStateToProps");
var LoginContainer = /* @__PURE__ */ __name(({
  auth,
  profileLoading,
  login: login2,
  language,
  sendResetCode: sendResetCode2,
  resetPassword: resetPassword2,
  setAuthError: setAuthError2,
  setResettingPasswordError: setResettingPasswordError2,
  sendResetCodeInit: sendResetCodeInit2,
  setUpProfile: setUpProfile2,
  setUpPasswordPolicy: setUpPasswordPolicy2,
  setUpPassword: setUpPassword2,
  changeLanguage: changeLanguage2,
  setUpMFA: setUpMFA2,
  resendMFA: resendMFA2,
  MFABackToLogin: MFABackToLogin2,
  getLanguageInfo: getLanguageInfo2
}) => {
  const navigate = useNavigate13();
  const [searchParams] = useSearchParams();
  React71.useEffect(() => {
    if (auth.isPasswordConfirmed) {
      navigate(routes.login.setUpProfile.url);
    } else if (auth.isMFA) {
      const query = stringify3({ returnUrl: searchParams.get("returnUrl") });
      if (searchParams.get("returnUrl")) {
        navigate(routes.login.setUpMfa.url + `?${query}`);
      } else {
        navigate(routes.login.setUpMfa.url);
      }
    } else if (!auth.isUserProfileCompleted) {
      navigate(routes.login.setUpProfile.url);
    }
  }, [auth.isPasswordConfirmed, auth.isMFA, auth.isUserProfileCompleted]);
  React71.useEffect(() => {
    if (typeof language === "undefined" || language == null) {
      getLanguageInfo2();
    }
  }, []);
  const fallback = <CenteredSpinner_default
    style={{ width: "100%" }}
    wrapperProps={{
      alignItems: "center",
      flexDirection: "column"
    }}
    htmlId="root-spinner"
  />;
  return <MainRedirect_default>{profileLoading ? fallback : <>
    <SelectLanguageHeader language={language} changeLanguage={changeLanguage2} />
    <Login_default
      login={login2}
      sendResetCode={sendResetCode2}
      resetPassword={resetPassword2}
      setAuthError={setAuthError2}
      setResettingPasswordError={setResettingPasswordError2}
      sendResetCodeInit={sendResetCodeInit2}
      setUpProfile={setUpProfile2}
      setUpPasswordPolicy={setUpPasswordPolicy2}
      setUpPassword={setUpPassword2}
      changeLanguage={changeLanguage2}
      auth={auth}
      language={language}
      history={history}
      setUpMFA={setUpMFA2}
      resendMFA={resendMFA2}
      MFABackToLogin={MFABackToLogin2}
    />
  </>}</MainRedirect_default>;
}, "LoginContainer");
var Login_default2 = connect21(mapStateToProps20, mapDispatchToProps17)(LoginContainer);

// ../vlncc-frontend/src/app.tsx
import * as React72 from "react";

// ../vlncc-frontend/src/components/Toaster.tsx
import { Anchor as Anchor2, Notification, Toaster as VaiToaster } from "@vaisala-rockhopper/components";
var Toaster = /* @__PURE__ */ __name(() => {
  const dispatch = useAppDispatch();
  const notifications2 = useAppSelector(selectNotifications);
  return <VaiToaster>{notifications2.map((notification) => <Notification
    key={notification.id}
    type={notification.type}
    onClosed={() => dispatch(removeNotification(notification.id))}
    closeIcon={notification.closable}
    duration={notification.duration}
  >
    {notification.content}
    {notification.linkTo ? <Anchor2 to={notification.linkTo} openInNewWindow>{notification.linkText}</Anchor2> : null}
  </Notification>)}</VaiToaster>;
}, "Toaster");
var Toaster_default = Toaster;

// ../vlncc-frontend/src/app.tsx
import { useIdleTimer } from "react-idle-timer";
function Application({ theme: theme2, logout: logout2, isAuthenticated }) {
  const dialog = useAppSelector(selectDialog);
  const onIdle = /* @__PURE__ */ __name(() => {
    if (isAuthenticated) {
      console.log("user is idle");
      logout2(false, 6 /* InactivityError */);
    }
  }, "onIdle");
  useIdleTimer({
    crossTab: true,
    syncTimers: 1e3,
    timeout: IDLE_TIMEOUT,
    onIdle,
    debounce: IDLE_TIMER_DEBOUNCING
  });
  const fallback = <CenteredSpinner_default
    style={{ width: "100%" }}
    wrapperProps={{
      alignItems: "center",
      flexDirection: "column"
    }}
    htmlId="root-spinner"
  />;
  return <VaiApplication theme={theme2}><React72.Suspense fallback={fallback}>
    <Toaster_default />
    {dialog}
    <Routes7>
      <Route7 path={`${routes.login.url}/*`} element={<Login_default2 />} />
      <Route7 path={routes.logout.url} element={<AppLogout />} />
      <Route7 path="*" element={<Main_default />} />
    </Routes7>
  </React72.Suspense></VaiApplication>;
}
__name(Application, "Application");
var mapStateToProps21 = /* @__PURE__ */ __name((state) => ({
  theme: state.general.theme,
  isAuthenticated: state.auth.isAuthenticated
}), "mapStateToProps");
var mapDispatchToProps18 = /* @__PURE__ */ __name((dispatch) => ({
  logout: (globalSignout, error) => dispatch(authDispatchActions.logout(globalSignout, error))
}), "mapDispatchToProps");
var App_default = connect22(mapStateToProps21, mapDispatchToProps18)(Application);

// ../vlncc-frontend/src/index.tsx
import "./styles.scss";
import { Amplify as Amplify2, Hub } from "aws-amplify";
try {
  Amplify2.configure({
    Auth: {
      mandatorySignIn: false,
      region: localStorage.getItem("region"),
      userPoolId: localStorage.getItem("userPoolId"),
      userPoolWebClientId: localStorage.getItem("userPoolWebClientId")
    }
  });
  Hub.listen("auth", (data) => {
    const { event } = data.payload;
    switch (event) {
      case "signIn":
        console.log("user signed in", data);
        window.Appcues.identify(data.payload.data.username);
        break;
      case "signUp":
        console.log("user signed up", data);
        break;
      case "signOut":
        console.log("user signed out", data);
        window.Appcues.reset();
        break;
      case "signIn_failure":
        console.log("user sign in failed", data);
        break;
      case "tokenRefresh":
        console.log("token was refreshed", data);
        break;
      case "tokenRefresh_failure":
        console.error("token failed to refresh", data);
        window.Appcues.reset();
        store_default.dispatch(logout(false, 7 /* SessionExpiredError */));
        break;
      case "configured":
        console.log("the Auth module is configured", data);
        break;
      default:
        console.log("Unhandled event", event, data);
        break;
    }
  });
} catch (error) {
  reportError(error, "Error in AWS Amplify configure:");
}
var Root = /* @__PURE__ */ __name(() => <Provider store={store_default}><BrowserRouter><App_default /></BrowserRouter></Provider>, "Root");
ReactDOM.render(<Root />, document.getElementById("root"));
unregister();
var src_default = Root;
export {
  src_default as default
};
