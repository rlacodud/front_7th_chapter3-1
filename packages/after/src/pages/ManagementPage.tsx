import * as React from "react";
import { Button } from "@/components/ui/button";
import { InfoAlert } from "@/components/InfoAlert";
import { EntityStats } from "@/components/management/EntityStats";
import { EntityTable } from "@/components/management/EntityTable";
import { ManagementFormDialog } from "@/components/management/ManagementFormDialog";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useManagementPage } from "@/hooks/useManagementPage";

export const ManagementPage: React.FC = () => {
  const {
    entityType,
    setEntityType,
    data,
    columns,
    statsCards,
    formData,
    updateField,
    selectedItem,
    alert,
    dismissAlert,
    createOpen,
    editOpen,
    openCreateDialog,
    openEditDialog,
    closeCreateDialog,
    closeEditDialog,
    createEntity,
    updateEntity,
    deleteEntity,
    handlePostStatus,
    loading,
    currentPage,
    totalPages,
    goToPrevPage,
    goToNextPage,
    hasPagination,
  } = useManagementPage();

  const isUserView = entityType === "user";
  const handlePrevClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (currentPage === 1) {
      return;
    }
    goToPrevPage();
  };

  const handleNextClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (currentPage === totalPages) {
      return;
    }
    goToNextPage();
  };

  return (
    <div className="min-h-screen py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col px-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-app-foreground">
                관리 시스템
              </h2>
              <p className="mt-2 text-sm font-medium text-app-muted-foreground">
                사용자와 게시글을 관리하세요
              </p>
            </div>
            <Button onClick={openCreateDialog}>새로 만들기</Button>
          </div>
        </div>

        <div className="mt-6 flex items-center">
          <Button
            variant={entityType === "post" ? "primary" : "secondary"}
            onClick={() => setEntityType("post")}
          >
            게시글
          </Button>
          <Button
            variant={entityType === "user" ? "primary" : "secondary"}
            onClick={() => setEntityType("user")}
          >
            사용자
          </Button>
        </div>
        <section className="space-y-4 rounded-tl-none rounded-tr-none rounded-bl-xl rounded-br-xl border bg-app-background p-4 shadow-sm">
          {alert && (
            <InfoAlert
              variant={alert.type}
              title={
                alert.type === "success" ? "작업 완료" : "문제가 발생했어요"
              }
              description={alert.message}
              onClose={dismissAlert}
            />
          )}

          <EntityStats cards={statsCards} />

          <div className="flex items-center justify-between gap-4">
            <h2 className="text-lg font-semibold text-app-foreground">
              {isUserView ? "사용자 목록" : "게시글 목록"}
            </h2>
            {loading && (
              <span className="text-sm text-app-muted-foreground">
                로딩 중...
              </span>
            )}
          </div>
          <EntityTable
            entityType={entityType}
            columns={columns}
            data={data}
            onEdit={openEditDialog}
            onDelete={deleteEntity}
            onStatusAction={handlePostStatus}
          />
          {hasPagination && (
            <Pagination className="pt-2">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={handlePrevClick}
                    className={
                      currentPage === 1 ? "pointer-events-none opacity-50" : ""
                    }
                    aria-disabled={currentPage === 1}
                  />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    isActive
                    onClick={(event) => event.preventDefault()}
                    className="w-20 justify-center"
                  >
                    {currentPage} / {totalPages}
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={handleNextClick}
                    className={
                      currentPage === totalPages
                        ? "pointer-events-none opacity-50"
                        : ""
                    }
                    aria-disabled={currentPage === totalPages}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </section>
      </div>

      <ManagementFormDialog
        mode="create"
        entityType={entityType}
        open={createOpen}
        onClose={closeCreateDialog}
        onSubmit={createEntity}
        formData={formData}
        updateField={updateField}
      />

      <ManagementFormDialog
        mode="edit"
        entityType={entityType}
        open={editOpen}
        onClose={closeEditDialog}
        onSubmit={updateEntity}
        formData={formData}
        updateField={updateField}
        selectedItem={selectedItem}
      />
    </div>
  );
};
