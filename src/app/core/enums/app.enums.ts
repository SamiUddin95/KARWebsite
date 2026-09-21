export enum UserRole {
  Client  = 'Client',
  Lawyer  = 'Lawyer',
  Student = 'Student',
  Donor   = 'Donor',
  Admin   = 'Admin'
}

export enum CaseType {
  Criminal      = 'Criminal',
  Civil         = 'Civil',
  Family        = 'Family',
  Property      = 'Property',
  Corporate     = 'Corporate',
  Tax           = 'Tax',
  Constitutional= 'Constitutional',
  Immigration   = 'Immigration',
  Other         = 'Other'
}

export enum CaseStatus {
  Pending   = 'Pending',
  Approved  = 'Approved',
  Active    = 'Active',
  Disposed  = 'Disposed',
  Closed    = 'Closed'
}

export enum AppointmentType {
  Video  = 'VideoCall',
  WalkIn = 'Walk-in'
}

export enum AppointmentStatus {
  Draft                  = 'Draft',
  PaymentPending         = 'PaymentPending',
  PaymentCompleted       = 'PaymentCompleted',
  AwaitingReview         = 'AwaitingReview',
  AssignmentPending      = 'AssignmentPending',
  LawyerAssigned         = 'LawyerAssigned',
  LawyerAccepted         = 'LawyerAccepted',
  Confirmed              = 'Confirmed',
  InProgress             = 'InProgress',
  Completed              = 'Completed',
  Cancelled              = 'Cancelled',
  RefundRequested        = 'RefundRequested',
  Refunded               = 'Refunded'
}

export enum SubmissionMethod {
  UploadDocument = 'UploadDocument',
  WhatsApp       = 'Whatsapp'
}

export enum LawyerStatus {
  Pending      = 'Pending',
  UnderReview  = 'UnderReview',
  Approved     = 'Approved',
  Rejected     = 'Rejected',
  Active       = 'Active',
  Suspended    = 'Suspended'
}

export enum DonationPurpose {
  GeneralLegalAid  = 'GeneralLegalAid',
  Scholarships     = 'Scholarships',
  LegalEducation   = 'LegalEducation',
  VulnerableClients= 'VulnerableClients',
  HumanRights      = 'HumanRights',
  Other            = 'Other'
}

export enum NotificationType {
  LawyerAssigned      = 'LawyerAssigned',
  AppointmentConfirmed= 'AppointmentConfirmed',
  HearingUpdated      = 'HearingUpdated',
  CourtOrderAdded     = 'CourtOrderAdded',
  CaseUpdate          = 'CaseUpdate',
  NewMessage          = 'NewMessage',
  PaymentCompleted    = 'PaymentCompleted',
  ExamReminder        = 'ExamReminder',
  DonationReceipt     = 'DonationReceipt'
}
