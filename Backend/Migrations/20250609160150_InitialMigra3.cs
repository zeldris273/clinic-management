using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class InitialMigra3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_MedicalHistory_DoctorId",
                table: "MedicalHistory",
                column: "DoctorId");

            migrationBuilder.AddForeignKey(
                name: "FK_MedicalHistory_Doctors_DoctorId",
                table: "MedicalHistory",
                column: "DoctorId",
                principalTable: "Doctors",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MedicalHistory_Doctors_DoctorId",
                table: "MedicalHistory");

            migrationBuilder.DropIndex(
                name: "IX_MedicalHistory_DoctorId",
                table: "MedicalHistory");
        }
    }
}
