import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Alert } from "@/components/ui/alert";
import { InputField } from "@/components/InputField";
import { Textarea } from "@/components/ui/textarea";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { Label } from "@/components/ui/label";
import {
  CATEGORY_OPTIONS,
  POST_STATUSES,
  USER_ROLES,
  USER_STATUSES,
} from "@/constants/management";
import type { EntityType, ManagementFormData } from "@/type/management";
import type { Post } from "@/services/postService";
import type { User } from "@/services/userService";

type Entity = User | Post;

interface ManagementFormDialogProps {
  mode: "create" | "edit";
  entityType: EntityType;
  open: boolean;
  onClose: () => void;
  onSubmit: () => void;
  formData: ManagementFormData;
  updateField: (name: keyof ManagementFormData, value: string) => void;
  selectedItem?: Entity | null;
}

export const ManagementFormDialog: React.FC<ManagementFormDialogProps> = ({
  mode,
  entityType,
  open,
  onClose,
  onSubmit,
  formData,
  updateField,
  selectedItem,
}) => {
  const isUserView = entityType === "user";
  const title =
    mode === "create"
      ? `새 ${isUserView ? "사용자" : "게시글"} 만들기`
      : `${isUserView ? "사용자" : "게시글"} 수정`;
  const description =
    mode === "create"
      ? isUserView
        ? "새로운 사용자를 등록합니다."
        : "새로운 게시글을 작성합니다."
      : "선택한 항목의 정보를 변경합니다.";

  return (
    <Dialog open={open} onOpenChange={(state) => !state && onClose()}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        {mode === "edit" && selectedItem && (
          <Alert variant="info" className="mb-4 text-sm">
            ID: {selectedItem.id} | 생성일: {selectedItem.createdAt}
            {entityType === "post" &&
              ` | 조회수: ${(selectedItem as Post).views}`}
          </Alert>
        )}

        <div className="space-y-4">
          {renderFormFields({
            entityType,
            formData,
            updateField,
          })}
        </div>

        <DialogFooter className="pt-2">
          <Button variant="secondary" onClick={onClose}>
            취소
          </Button>
          <Button onClick={onSubmit}>
            {mode === "create" ? "생성" : "수정 완료"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

interface FormFieldProps {
  entityType: EntityType;
  formData: ManagementFormData;
  updateField: (name: keyof ManagementFormData, value: string) => void;
}

function renderFormFields({
  entityType,
  formData,
  updateField,
}: FormFieldProps) {
  if (entityType === "user") {
    return (
      <div className="space-y-4">
        <InputField
          name="username"
          label="사용자명"
          placeholder="사용자명을 입력하세요"
          required
          value={formData.username ?? ""}
          onChange={(event) => updateField("username", event.target.value)}
        />
        <InputField
          name="email"
          type="email"
          label="이메일"
          placeholder="user@example.com"
          required
          value={formData.email ?? ""}
          onChange={(event) => updateField("email", event.target.value)}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <SelectFieldRow
            id="user-role"
            name="role"
            label="역할"
            value={formData.role ?? USER_ROLES.user.value}
            onChange={(value) => updateField("role", value)}
            options={Object.values(USER_ROLES)}
          />
          <SelectFieldRow
            id="user-status"
            name="status"
            label="상태"
            value={formData.status ?? USER_STATUSES.active.value}
            onChange={(value) => updateField("status", value)}
            options={Object.values(USER_STATUSES)}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <InputField
        name="title"
        label="제목"
        placeholder="게시글 제목을 입력하세요"
        required
        value={formData.title ?? ""}
        onChange={(event) => updateField("title", event.target.value)}
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <InputField
          name="author"
          label="작성자"
          placeholder="작성자명"
          required
          value={formData.author ?? ""}
          onChange={(event) => updateField("author", event.target.value)}
        />
        <SelectFieldRow
          id="post-category"
          name="category"
          label="카테고리"
          placeholder="카테고리 선택"
          value={formData.category ?? ""}
          onChange={(value) => updateField("category", value)}
          options={CATEGORY_OPTIONS}
        />
      </div>
      <SelectFieldRow
        id="post-status"
        name="status"
        label="상태"
        value={formData.status ?? POST_STATUSES.draft.value}
        onChange={(value) => updateField("status", value)}
        options={Object.values(POST_STATUSES)}
      />
      <div className="space-y-1.5 text-left">
        <LabelWithHelper label="내용" helper="게시글 본문을 입력하세요." />
        <Textarea
          name="content"
          placeholder="게시글 내용을 입력하세요"
          value={formData.content ?? ""}
          onChange={(event) => updateField("content", event.target.value)}
        />
      </div>
    </div>
  );
}

function LabelWithHelper({
  label,
  helper,
}: {
  label: string;
  helper?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-sm font-semibold text-app-foreground">{label}</span>
      {helper && (
        <span className="text-xs text-app-text-tertiary">{helper}</span>
      )}
    </div>
  );
}

interface SelectFieldRowProps {
  id: string;
  name?: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  required?: boolean;
  placeholder?: string;
}

function SelectFieldRow({
  id,
  name,
  label,
  value,
  onChange,
  options,
  required,
  placeholder,
}: SelectFieldRowProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="space-y-1.5 text-left">
      <Label
        htmlFor={id}
        className="flex items-center gap-1 text-sm font-semibold text-app-foreground"
      >
        {label}
        {required && <span className="text-destructive">*</span>}
      </Label>
      <NativeSelect
        id={id}
        name={name ?? id}
        value={value}
        onChange={handleChange}
        required={required}
        aria-invalid={required && !value}
        className="w-full"
      >
        {placeholder && (
          <NativeSelectOption value="" disabled hidden>
            {placeholder}
          </NativeSelectOption>
        )}
        {options.map((option) => (
          <NativeSelectOption key={option.value} value={option.value}>
            {option.label}
          </NativeSelectOption>
        ))}
      </NativeSelect>
    </div>
  );
}
