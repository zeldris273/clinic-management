using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class InitialMigra2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MedicalHistory_Doctors_DoctorId",
                table: "MedicalHistory");

            migrationBuilder.DropIndex(
                name: "IX_MedicalHistory_DoctorId",
                table: "MedicalHistory");

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedAt",
                table: "MedicalHistory",
                type: "timestamp with time zone",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "timestamp with time zone",
                oldDefaultValueSql: "CURRENT_TIMESTAMP");

            migrationBuilder.CreateTable(
                name: "Appointments",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    patientId = table.Column<int>(type: "integer", nullable: false),
                    doctorId = table.Column<int>(type: "integer", nullable: false),
                    Date = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    Type = table.Column<string>(type: "text", nullable: false),
                    PatiensId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Appointments", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Appointments_Doctors_doctorId",
                        column: x => x.doctorId,
                        principalTable: "Doctors",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Appointments_Patiens_PatiensId",
                        column: x => x.PatiensId,
                        principalTable: "Patiens",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Patiens_userId",
                table: "Patiens",
                column: "userId");

            migrationBuilder.CreateIndex(
                name: "IX_Appointments_doctorId",
                table: "Appointments",
                column: "doctorId");

            migrationBuilder.CreateIndex(
                name: "IX_Appointments_PatiensId",
                table: "Appointments",
                column: "PatiensId");

            migrationBuilder.AddForeignKey(
                name: "FK_Patiens_Users_userId",
                table: "Patiens",
                column: "userId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Patiens_Users_userId",
                table: "Patiens");

            migrationBuilder.DropTable(
                name: "Appointments");

            migrationBuilder.DropIndex(
                name: "IX_Patiens_userId",
                table: "Patiens");

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedAt",
                table: "MedicalHistory",
                type: "timestamp with time zone",
                nullable: false,
                defaultValueSql: "CURRENT_TIMESTAMP",
                oldClrType: typeof(DateTime),
                oldType: "timestamp with time zone");

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
    }
}
