
export class Collaborateurs
{
    staffId?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    phoneNumber?: string;
    lastLogin?: Date;
    active?: boolean;
    password?: string;
    profile_image?: string;
    emailSignature?: string;
    admin?: boolean;
    lastActivity?: boolean;
    role?: Role;
    is_not_staff?: boolean;
    constructor() {
    }

}

export interface RolePermission {
    permissionid: number;
    roleid: number;
    canView: boolean;
    canCreate: boolean;
    canEdit: boolean;
    canDelete: boolean;
}
export interface Permission{
    permissionid: number;
    name: string;
    shortname: string;
}

export class Role
{
    roleid?: number;
    roleName?: string;
    rolepermission? : RolePermission[];
    constructor() {
    }


}
