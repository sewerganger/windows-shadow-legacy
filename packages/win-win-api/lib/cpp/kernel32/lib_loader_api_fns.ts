
import { DLL_DIRECTORY_COOKIE, ENUMRESLANGPROCA, ENUMRESLANGPROCW, ENUMRESNAMEPROCA, ENUMRESNAMEPROCW, ENUMRESTYPEPROCA, ENUMRESTYPEPROCW } from "./lib_loader_api_type";
import { PCWSTR, LPCWSTR, LPCSTR, LANGID, VOID, LPSTR, LPWSTR, HANDLE } from "../user32/win_nt";
import { BOOL, HMODULE, DWORD, INT, HGLOBAL, FARPROC, HRSRC, LPVOID } from "../user32/win_def";
import { LONG_PTR } from "../user32/base_tsd";

export const libloaderApiFns = {
	AddDllDirectory: [DLL_DIRECTORY_COOKIE, [PCWSTR]],
	DisableThreadLibraryCalls: [BOOL, [HMODULE]],
	EnumResourceLanguagesExA: [BOOL, [HMODULE, LPCSTR, LPCSTR, ENUMRESLANGPROCA, LONG_PTR, DWORD, LANGID]],
	EnumResourceLanguagesExW: [BOOL, [HMODULE, LPCWSTR, LPCWSTR, ENUMRESLANGPROCW, LONG_PTR, DWORD, LANGID]],
	EnumResourceNamesExA: [BOOL, [HMODULE, LPCSTR, ENUMRESNAMEPROCA, LONG_PTR, DWORD, LANGID]],
	EnumResourceNamesExW: [BOOL, [HMODULE, LPCWSTR, ENUMRESNAMEPROCW, LONG_PTR, DWORD, LANGID]],
	EnumResourceTypesExA: [BOOL, [HMODULE, ENUMRESTYPEPROCA, LONG_PTR, DWORD, LANGID]],
	EnumResourceTypesExW: [BOOL, [HMODULE, ENUMRESTYPEPROCW, LONG_PTR, DWORD, LANGID]],
	FindStringOrdinal: [INT, [DWORD, LPCWSTR, INT, LPCWSTR, INT, BOOL]],
	FreeLibrary: [BOOL, [HMODULE]],
	FreeLibraryAndExitThread: [VOID, [HMODULE, DWORD]],
	FreeResource: [BOOL, [HGLOBAL]],
	GetModuleFileNameA: [DWORD, [HMODULE, LPSTR, DWORD]],
	GetModuleFileNameW: [DWORD, [HMODULE, LPWSTR, DWORD]],
	GetModuleHandleA: [HMODULE, [LPCSTR]],
	GetModuleHandleExA: [BOOL, [DWORD, LPCSTR, HMODULE]],
	GetModuleHandleExW: [BOOL, [DWORD, LPCWSTR, HMODULE]],
	GetModuleHandleW: [HMODULE, [LPCWSTR]],
	GetProcAddress: [FARPROC, [HMODULE, LPCSTR]],
	LoadLibraryA: [HMODULE, [LPCSTR]],
	LoadLibraryExA: [HMODULE, [LPCSTR, HANDLE, DWORD]],
	LoadLibraryExW: [HMODULE, [LPCWSTR, HANDLE, DWORD]],
	LoadLibraryW: [HMODULE, [LPCWSTR]],
	LoadResource: [HGLOBAL, [HMODULE, HRSRC]],
	LockResource: [LPVOID, [HGLOBAL]],
	RemoveDllDirectory: [BOOL, [DLL_DIRECTORY_COOKIE]],
	SetDefaultDllDirectories: [BOOL, [DWORD]],
	SizeofResource: [DWORD, [HMODULE, HRSRC]]
};

